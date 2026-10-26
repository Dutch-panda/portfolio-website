/**
 * Shared Portfolio Controller across index.html, projects.html, cv.html, and blog.html
 */
(function () {
  const data = window.PORTFOLIO_DATA;
  const currentPage = document.body.getAttribute('data-page') || 'home';

  /* --------------------------------------------------------------------------
   * 1. Toast Notification & Email Copy Helper (All Pages)
   * -------------------------------------------------------------------------- */
  const toastEl = document.getElementById('toast-banner');
  let toastTimer = null;

  function showToast(message) {
    if (!toastEl) return;
    toastEl.textContent = message;
    toastEl.classList.add('visible');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toastEl.classList.remove('visible');
    }, 3600);
  }

  document.querySelectorAll('[data-copy-email]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const email = data.meta.directEmail;
      if (navigator.clipboard) {
        navigator.clipboard.writeText(email).catch(() => {});
      }
      showToast(`✓ Copied direct email: ${email}`);
    });
  });

  /* --------------------------------------------------------------------------
   * 2. Footer Dispatch Ticker Cycling (All Pages)
   * -------------------------------------------------------------------------- */
  const dispatchBtn = document.getElementById('footer-dispatch-btn');
  let updateIdx = 0;

  function updateTickerText() {
    if (!dispatchBtn || !data.updates || !data.updates.length) return;
    const item = data.updates[updateIdx];
    dispatchBtn.innerHTML = `<span style="color: var(--accent-orange); font-family: var(--font-mono); margin-right: 6px;">[${item.date}]</span> ${item.title}`;
  }

  if (dispatchBtn) {
    updateTickerText();
    dispatchBtn.addEventListener('click', () => {
      updateIdx = (updateIdx + 1) % data.updates.length;
      updateTickerText();
    });
  }

  /* --------------------------------------------------------------------------
   * 3. Smooth 120fps Lerp Scroll Engine (All Pages on Desktop)
   * -------------------------------------------------------------------------- */
  const stages = Array.from(document.querySelectorAll('.stage-section'));
  const stageBoxes = stages.map((s) => s.querySelector('.stage-box'));
  const railDots = Array.from(document.querySelectorAll('.rail-dot'));

  let targetScrollY = window.scrollY;
  let currentScrollY = window.scrollY;
  let isSmoothLoopRunning = false;
  const LERP_FACTOR = 0.11;

  function getMaxScroll() {
    return Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
  }

  function updateStackTransforms() {
    if (!stages.length) return;
    const vh = window.innerHeight;
    let activeIdx = 0;

    for (let idx = 0; idx < stages.length; idx++) {
      const section = stages[idx];
      const nextSection = stages[idx + 1];
      const box = stageBoxes[idx];
      if (!box) continue;

      const rect = section.getBoundingClientRect();
      if (rect.top <= vh * 0.5) {
        activeIdx = idx;
      }

      if (nextSection) {
        const nextRect = nextSection.getBoundingClientRect();
        const stickyTop = 96;
        const overlapStart = vh - 44;
        const overlapDistance = Math.max(1, overlapStart - stickyTop);

        const rawProgress = (overlapStart - nextRect.top) / overlapDistance;
        const progress = Math.max(0, Math.min(1, rawProgress));

        if (progress > 0.001) {
          const eased = progress * progress * (3 - 2 * progress);
          const scale = 1 - eased * 0.045;
          const opacity = 1 - eased * 0.72;
          const translateY = -eased * 22;
          box.style.transform = `translate3d(0, ${translateY.toFixed(2)}px, 0) scale(${scale.toFixed(4)})`;
          box.style.opacity = opacity.toFixed(3);
        } else {
          box.style.transform = 'translate3d(0, 0, 0) scale(1)';
          box.style.opacity = '1';
        }
      } else {
        box.style.transform = 'translate3d(0, 0, 0) scale(1)';
        box.style.opacity = '1';
      }
    }

    railDots.forEach((dot, idx) => {
      dot.classList.toggle('active', idx === activeIdx);
    });
  }

  function smoothScrollTick() {
    const diff = targetScrollY - currentScrollY;

    if (Math.abs(diff) > 0.35) {
      currentScrollY += diff * LERP_FACTOR;
      window.scrollTo(0, currentScrollY);
      updateStackTransforms();
      window.requestAnimationFrame(smoothScrollTick);
    } else {
      currentScrollY = targetScrollY;
      window.scrollTo(0, currentScrollY);
      updateStackTransforms();
      isSmoothLoopRunning = false;
    }
  }

  function startSmoothLoop() {
    if (!isSmoothLoopRunning) {
      isSmoothLoopRunning = true;
      window.requestAnimationFrame(smoothScrollTick);
    }
  }

  window.addEventListener(
    'wheel',
    (e) => {
      if (window.innerWidth <= 960) return;
      e.preventDefault();
      const delta = e.deltaMode === 1 ? e.deltaY * 32 : e.deltaY;
      targetScrollY = Math.max(0, Math.min(getMaxScroll(), targetScrollY + delta));
      startSmoothLoop();
    },
    { passive: false }
  );

  window.addEventListener(
    'scroll',
    () => {
      if (!isSmoothLoopRunning) {
        currentScrollY = window.scrollY;
        targetScrollY = window.scrollY;
        updateStackTransforms();
      }
    },
    { passive: true }
  );

  function getStageScrollOffset(targetIndex) {
    if (!stages.length) return 0;
    const clamped = Math.max(0, Math.min(stages.length - 1, targetIndex));
    if (clamped === 0) return 0;

    let offset = 0;
    for (let i = 0; i < clamped; i++) {
      offset += stages[i].offsetHeight + window.innerHeight * 0.16;
    }
    return Math.min(getMaxScroll(), offset);
  }

  function scrollToStage(targetIndex) {
    targetScrollY = getStageScrollOffset(targetIndex);
    startSmoothLoop();
  }

  window.addEventListener('keydown', (e) => {
    const activeTag = document.activeElement ? document.activeElement.tagName : '';
    if (activeTag === 'INPUT' || activeTag === 'TEXTAREA') return;

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      targetScrollY = Math.max(0, Math.min(getMaxScroll(), targetScrollY + 180));
      startSmoothLoop();
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      targetScrollY = Math.max(0, Math.min(getMaxScroll(), targetScrollY - 180));
      startSmoothLoop();
    } else if (e.key === 'PageDown' || e.key === ' ') {
      e.preventDefault();
      targetScrollY = Math.max(
        0,
        Math.min(getMaxScroll(), targetScrollY + window.innerHeight * 0.85)
      );
      startSmoothLoop();
    } else if (e.key === 'PageUp') {
      e.preventDefault();
      targetScrollY = Math.max(
        0,
        Math.min(getMaxScroll(), targetScrollY - window.innerHeight * 0.85)
      );
      startSmoothLoop();
    } else if (e.key === 'Home') {
      e.preventDefault();
      targetScrollY = 0;
      startSmoothLoop();
    } else if (e.key === 'End') {
      e.preventDefault();
      targetScrollY = getMaxScroll();
      startSmoothLoop();
    }
  });

  window.addEventListener('resize', updateStackTransforms, { passive: true });

  railDots.forEach((dot, idx) => {
    dot.addEventListener('click', () => scrollToStage(idx));
  });

  document.querySelectorAll('[data-goto-stage]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const target = parseInt(btn.getAttribute('data-goto-stage'), 10);
      scrollToStage(target);
    });
  });

  updateStackTransforms();

  /* --------------------------------------------------------------------------
   * 4. HOME PAGE RENDERERS (Specialties, Preview Archive & Problem Bar)
   * -------------------------------------------------------------------------- */
  const specialtiesGrid = document.getElementById('specialties-grid');
  if (specialtiesGrid && data.specialties) {
    specialtiesGrid.innerHTML = data.specialties
      .map(
        (item) => `
      <article class="specialty-col">
        <div>
          <h3 class="specialty-heading">
            <span class="specialty-index">${item.index}</span>
            <span class="specialty-slash">/</span>${item.title}
          </h3>
          <p class="specialty-summary">${item.summary}</p>
          <ul class="specialty-deliverables">
            ${item.deliverables.map((d) => `<li>${d}</li>`).join('')}
          </ul>
        </div>
        <div class="specialty-metric">${item.metric}</div>
      </article>
    `
      )
      .join('');
  }

  const archiveList = document.getElementById('archive-list');
  const filterChips = Array.from(document.querySelectorAll('[data-filter]'));

  function renderHomeProjects(filterCategory = 'all') {
    if (!archiveList) return;
    const baseProjects = data.projects.filter((p) => p.featured !== false);
    const filtered =
      filterCategory === 'all'
        ? baseProjects
        : data.projects.filter((p) => p.category === filterCategory);

    archiveList.innerHTML = filtered
      .map(
        (proj, idx) => `
      <div class="archive-row ${idx === 0 ? 'expanded' : ''}" data-project-id="${proj.id}">
        <button type="button" class="archive-row-main" aria-expanded="${idx === 0 ? 'true' : 'false'}">
          <div class="problem-cell">
            <span class="badge-problem">Problem</span>
            <span class="problem-text">${proj.problem}</span>
          </div>
          <span class="arrow-divider">──▶</span>
          <div class="solution-cell">
            <span class="badge-solution">Solution</span>
            <span class="solution-text">${proj.solution}</span>
          </div>
          <span class="provenance-tag" data-external-url="${proj.url}">${proj.tagLabel}</span>
        </button>
        <div class="archive-row-drawer">
          <p class="drawer-desc">${proj.details}</p>
          <div class="drawer-meta">
            <div class="drawer-stack">
              ${proj.stack.map((s) => `<span class="stack-pill">${s}</span>`).join('')}
            </div>
            <span class="drawer-outcome">✓ ${proj.outcome}</span>
          </div>
        </div>
      </div>
    `
      )
      .join('');

    archiveList.querySelectorAll('.archive-row').forEach((row) => {
      const mainBtn = row.querySelector('.archive-row-main');
      const tag = row.querySelector('.provenance-tag');

      mainBtn.addEventListener('click', (e) => {
        if (tag && tag.contains(e.target)) {
          const url = tag.getAttribute('data-external-url');
          if (url && url.startsWith('http')) {
            window.open(url, '_blank', 'noopener');
            return;
          }
        }
        const isExpanded = row.classList.contains('expanded');
        archiveList.querySelectorAll('.archive-row').forEach((r) => r.classList.remove('expanded'));
        if (!isExpanded) {
          row.classList.add('expanded');
        }
      });
    });
  }

  filterChips.forEach((chip) => {
    chip.addEventListener('click', () => {
      filterChips.forEach((c) => c.classList.remove('active'));
      chip.classList.add('active');
      renderHomeProjects(chip.getAttribute('data-filter'));
    });
  });

  if (archiveList) {
    renderHomeProjects('all');
  }

  const problemForm = document.getElementById('problem-form');
  const problemInput = document.getElementById('problem-input');

  if (problemForm && problemInput) {
    problemForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const note = problemInput.value.trim();
      if (!note) {
        problemInput.focus();
        showToast('Write a brief note about your system, data, or workflow bottleneck first.');
        return;
      }

      const submitBtn = problemForm.querySelector('button[type="submit"]');
      const originalBtnText = submitBtn ? submitBtn.textContent : 'Send';
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending...';
      }

      if (navigator.clipboard) {
        navigator.clipboard.writeText(note).catch(() => {});
      }

      const endpoint =
        data.meta.formEndpoint || `https://formsubmit.co/ajax/${data.meta.directEmail}`;

      try {
        const res = await fetch(endpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            _subject: 'Portfolio Direct Note — Problem Inquiry',
            message: note,
            source: window.location.href,
            timestamp: new Date().toISOString(),
          }),
        });

        if (res.ok) {
          showToast(`✓ Note sent directly to ${data.meta.directEmail}!`);
          problemInput.value = '';
        } else {
          throw new Error('Endpoint returned non-200');
        }
      } catch (err) {
        const subject = encodeURIComponent('Problem Inquiry — Portfolio Direct Note');
        const body = encodeURIComponent(
          `Hi Ehsan,\n\nHere is the problem I'm looking to untangle:\n\n"${note}"\n\nBest regards,`
        );
        window.location.href = `mailto:${data.meta.directEmail}?subject=${subject}&body=${body}`;
        showToast('✓ Direct note prepared in your email client & copied to clipboard.');
        problemInput.value = '';
      } finally {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.textContent = originalBtnText;
        }
      }
    });
  }

  /* --------------------------------------------------------------------------
   * 5. DEDICATED PROJECTS PAGE RENDERER (projects.html)
   * -------------------------------------------------------------------------- */
  const projectsFullGrid = document.getElementById('projects-full-grid');
  const pageFilterChips = Array.from(document.querySelectorAll('[data-page-filter]'));

  function renderFullProjectsPage(filterCategory = 'all') {
    if (!projectsFullGrid) return;
    const filtered =
      filterCategory === 'all'
        ? data.projects
        : data.projects.filter((p) => p.category === filterCategory);

    projectsFullGrid.innerHTML = filtered
      .map(
        (proj, i) => `
      <article class="stage-box project-case-card" id="${proj.id}">
        <span class="box-corner-bl" aria-hidden="true"></span>
        <span class="box-corner-br" aria-hidden="true"></span>

        <div class="project-case-top">
          <div class="project-case-meta">
            <span style="color: var(--accent-orange); font-weight: 600;">CASE 0${i + 1}</span>
            <span>·</span>
            <span>${proj.year}</span>
            <span>·</span>
            <span>${proj.role || 'Systems & Analytics'}</span>
          </div>
          <a
            href="${proj.url}"
            target="_blank"
            rel="noopener noreferrer"
            class="provenance-tag"
          >
            ${proj.tagLabel}
          </a>
        </div>

        <div class="project-ps-banner">
          <div class="problem-cell">
            <span class="badge-problem">Problem</span>
            <span style="font-size: 1rem; color: var(--text-primary);">${proj.problem}</span>
          </div>
          <span class="arrow-divider">──▶</span>
          <div class="solution-cell">
            <span class="badge-solution">Solution</span>
            <strong style="font-size: 1.05rem; color: var(--text-primary);">${proj.solution}</strong>
          </div>
        </div>

        <div class="project-case-body">
          <div>
            <div class="project-subhead">Architecture &amp; Scope</div>
            <p class="project-OverviewText">${proj.details}</p>
          </div>
          <div>
            <div class="project-subhead">How It Was Untangled</div>
            <ul class="project-methodology-list">
              ${(proj.methodology || []).map((m) => `<li>${m}</li>`).join('')}
            </ul>
          </div>
        </div>

        <div class="project-case-footer">
          <div class="drawer-stack">
            ${proj.stack.map((s) => `<span class="stack-pill">${s}</span>`).join('')}
          </div>
          <span class="drawer-outcome">✓ ${proj.outcome}</span>
        </div>
      </article>
    `
      )
      .join('');
  }

  pageFilterChips.forEach((chip) => {
    chip.addEventListener('click', () => {
      pageFilterChips.forEach((c) => c.classList.remove('active'));
      chip.classList.add('active');
      renderFullProjectsPage(chip.getAttribute('data-page-filter'));
    });
  });

  if (projectsFullGrid) {
    renderFullProjectsPage('all');
  }

  /* --------------------------------------------------------------------------
   * 6. DEDICATED CV PAGE RENDERER (cv.html)
   * -------------------------------------------------------------------------- */
  const cvPageContainer = document.getElementById('cv-page-content');
  if (cvPageContainer && data.cv) {
    const cv = data.cv;
    cvPageContainer.innerHTML = `
      <span class="box-corner-bl" aria-hidden="true"></span>
      <span class="box-corner-br" aria-hidden="true"></span>

      <div class="cv-header">
        <div class="cv-name-row">
          <div>
            <h1 class="cv-name">${cv.name}</h1>
            <div class="cv-subtitle">${cv.title}</div>
          </div>
          <div class="cv-contact">
            ${cv.location}<br />
            <a href="mailto:${cv.email}">${cv.email}</a> · ${cv.phone}<br />
            <a href="${cv.linkedin}" target="_blank" rel="noopener noreferrer">linkedin.com/in/ehsan-negahdar</a> ·
            <a href="${cv.github}" target="_blank" rel="noopener noreferrer">github.com/Dutch-panda</a>
          </div>
        </div>

        <div class="cv-kpi-strip">
          ${cv.kpis
            .map(
              (k) => `
            <div class="cv-kpi">
              <div class="num">${k.num}</div>
              <div class="label">${k.label}</div>
            </div>
          `
            )
            .join('')}
        </div>
      </div>

      <div class="cv-body-grid">
        <aside class="cv-aside">
          <h2 class="cv-section-h2">Summary</h2>
          <p class="cv-summary-text">${cv.summary}</p>

          <h2 class="cv-section-h2">Skills</h2>
          ${cv.skills
            .map(
              (s) => `
            <div class="cv-skill-item">
              <span class="sk-name">${s.name}</span>
              <span class="sk-desc">${s.desc}</span>
            </div>
          `
            )
            .join('')}

          <h2 class="cv-section-h2">Education</h2>
          ${cv.education
            .map(
              (ed) => `
            <div class="cv-edu-item">
              <div class="deg">${ed.degree}</div>
              <div class="school">${ed.school}</div>
              <div class="dates">${ed.dates}</div>
            </div>
          `
            )
            .join('')}

          <h2 class="cv-section-h2">Awards</h2>
          ${cv.awards
            .map(
              (aw) => `
            <div class="cv-award-item">
              <span class="a-name">${aw.name}</span>
              <span class="a-meta">${aw.meta}</span>
            </div>
          `
            )
            .join('')}

          <h2 class="cv-section-h2">Languages</h2>
          ${cv.languages
            .map(
              (lg) => `
            <div class="cv-lang-item">
              <span>${lg.name}</span>
              <span class="lvl">${lg.level}</span>
            </div>
          `
            )
            .join('')}
        </aside>

        <div class="cv-main">
          <h2 class="cv-section-h2">Experience</h2>
          ${cv.experience
            .map(
              (exp) => `
            <div class="cv-exp-entry">
              <div class="cv-exp-head">
                <div class="cv-exp-role">
                  ${exp.role} · <span class="org">${exp.org}</span>
                  ${exp.current ? '<span class="cv-current-tag">Current</span>' : ''}
                </div>
                <div class="cv-exp-dates">${exp.dates}</div>
              </div>
              <div class="cv-exp-meta">${exp.meta}</div>
              <ul class="cv-bullets">
                ${exp.bullets.map((b) => `<li>${b}</li>`).join('')}
              </ul>
            </div>
          `
            )
            .join('')}
        </div>
      </div>
    `;
  }

  const printCvBtn = document.getElementById('print-cv-btn');
  if (printCvBtn) {
    printCvBtn.addEventListener('click', () => window.print());
  }

  /* --------------------------------------------------------------------------
   * 7. DEDICATED BLOG PAGE RENDERER (blog.html)
   * -------------------------------------------------------------------------- */
  const blogFullList = document.getElementById('blog-full-list');
  if (blogFullList && data.blogPosts) {
    blogFullList.innerHTML = data.blogPosts
      .map(
        (post) => `
      <article class="stage-box blog-article-box" id="${post.id}">
        <span class="box-corner-bl" aria-hidden="true"></span>
        <span class="box-corner-br" aria-hidden="true"></span>
        <div class="blog-meta">${post.date} · ${post.readTime} · [${post.category}]</div>
        <h2 class="blog-title">${post.title}</h2>
        ${(post.body || [post.excerpt]).map((p) => `<p class="blog-body-p">${p}</p>`).join('')}
      </article>
    `
      )
      .join('');
  }
})();
