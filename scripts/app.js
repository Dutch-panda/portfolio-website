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

  function escapeHtml(str) {
    if (!str) return '';
    return String(str).replace(/[&<>'"]/g, (tag) => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      "'": '&#39;',
      '"': '&quot;',
    }[tag] || tag));
  }

  document.querySelectorAll('[data-copy-email]').forEach((btn) => {
    btn.addEventListener('click', async () => {
      const email = data.meta.directEmail;
      try {
        if (!navigator.clipboard) throw new Error('Clipboard API unavailable');
        await navigator.clipboard.writeText(email);
        showToast(`✓ Copied direct email: ${email}`);
      } catch (err) {
        window.location.href = `mailto:${email}`;
        showToast(`Opening mail client for: ${email}`);
      }
    });
  });

  /* --------------------------------------------------------------------------
   * 2. Mobile Navigation Drawer Toggle (All Pages)
   * -------------------------------------------------------------------------- */
  const navToggle = document.getElementById('mobile-nav-toggle');
  const headerNav = document.getElementById('site-header-nav');
  const siteHeader = document.querySelector('.site-header');

  if (navToggle && headerNav) {
    function closeMenu() {
      navToggle.setAttribute('aria-expanded', 'false');
      headerNav.classList.remove('is-open');
      if (siteHeader) siteHeader.classList.remove('nav-open');
    }

    function toggleMenu() {
      const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', String(!isExpanded));
      headerNav.classList.toggle('is-open', !isExpanded);
      if (siteHeader) siteHeader.classList.toggle('nav-open', !isExpanded);
    }

    navToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleMenu();
    });

    headerNav.querySelectorAll('a, button').forEach((link) => {
      link.addEventListener('click', () => {
        if (window.innerWidth <= 860) {
          closeMenu();
        }
      });
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && navToggle.getAttribute('aria-expanded') === 'true') {
        closeMenu();
        navToggle.focus();
      }
    });

    document.addEventListener('click', (e) => {
      if (
        navToggle.getAttribute('aria-expanded') === 'true' &&
        !headerNav.contains(e.target) &&
        !navToggle.contains(e.target)
      ) {
        closeMenu();
      }
    });
  }

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
   * 3. Hardware-Accelerated Stage Transforms (Home Page Only)
   * -------------------------------------------------------------------------- */
  const stages = Array.from(document.querySelectorAll('.stage-section'));
  const stageBoxes = stages.map((s) => s.querySelector('.stage-box'));
  const railDots = Array.from(document.querySelectorAll('.rail-dot'));

  if (currentPage === 'home' && stages.length > 0) {
    const isReducedMotion = () =>
      window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    function getMaxScroll() {
      return Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
    }

    function updateStackTransforms() {
      if (!stages.length) return;
      const vh = window.innerHeight;
      const reduced = isReducedMotion();
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

        if (reduced) {
          box.style.transform = 'none';
          box.style.opacity = '1';
          continue;
        }

        if (nextSection && window.innerWidth > 960) {
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

    let isTicking = false;
    window.addEventListener(
      'scroll',
      () => {
        if (!isTicking) {
          window.requestAnimationFrame(() => {
            updateStackTransforms();
            isTicking = false;
          });
          isTicking = true;
        }
      },
      { passive: true }
    );

    window.addEventListener(
      'resize',
      () => {
        updateStackTransforms();
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
      const reduced = isReducedMotion();
      const offset = getStageScrollOffset(targetIndex);
      window.scrollTo({
        top: offset,
        behavior: reduced ? 'auto' : 'smooth',
      });
    }

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
  }

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
        <div class="archive-row-header">
          <button
            type="button"
            class="archive-row-toggle"
            aria-expanded="${idx === 0 ? 'true' : 'false'}"
            aria-controls="drawer-${proj.id}"
            id="toggle-${proj.id}"
          >
            <div class="problem-cell">
              <span class="badge-problem">Problem</span>
              <span class="problem-text">${proj.problem}</span>
            </div>
            <span class="arrow-divider" aria-hidden="true">──▶</span>
            <div class="solution-cell">
              <span class="badge-solution">Solution</span>
              <span class="solution-text">${proj.solution}</span>
            </div>
            <span class="accordion-chevron" aria-hidden="true">▾</span>
          </button>
          <a
            href="${proj.url}"
            class="provenance-tag"
            ${proj.url.startsWith('http') ? 'target="_blank" rel="noopener noreferrer"' : ''}
            aria-label="View source or evidence for ${proj.solution}"
          >
            ${proj.tagLabel}
          </a>
        </div>
        <div
          class="archive-row-drawer"
          id="drawer-${proj.id}"
          role="region"
          aria-labelledby="toggle-${proj.id}"
        >
          <div class="archive-row-drawer-inner">
            <p class="drawer-desc">${proj.details}</p>
            <div class="drawer-meta">
              <div class="drawer-stack">
                ${proj.stack.map((s) => `<span class="stack-pill">${s}</span>`).join('')}
              </div>
              <span class="drawer-outcome">✓ ${proj.outcome}</span>
            </div>
          </div>
        </div>
      </div>
    `
      )
      .join('');

    archiveList.querySelectorAll('.archive-row').forEach((row) => {
      const toggleBtn = row.querySelector('.archive-row-toggle');

      if (toggleBtn) {
        toggleBtn.addEventListener('click', () => {
          const isExpanded = row.classList.contains('expanded');
          archiveList.querySelectorAll('.archive-row').forEach((r) => {
            r.classList.remove('expanded');
            const btn = r.querySelector('.archive-row-toggle');
            if (btn) btn.setAttribute('aria-expanded', 'false');
          });
          if (!isExpanded) {
            row.classList.add('expanded');
            toggleBtn.setAttribute('aria-expanded', 'true');
          }
        });
      }
    });
  }

  filterChips.forEach((chip) => {
    chip.addEventListener('click', () => {
      filterChips.forEach((c) => {
        const isActive = c === chip;
        c.classList.toggle('active', isActive);
        c.setAttribute('aria-selected', isActive ? 'true' : 'false');
      });
      renderHomeProjects(chip.getAttribute('data-filter'));
    });
  });

  if (archiveList) {
    renderHomeProjects('all');
  }

  const problemForm = document.getElementById('problem-form');
  const problemEmail = document.getElementById('problem-email');
  const problemInput = document.getElementById('problem-input');
  const problemFeedback = document.getElementById('problem-form-feedback');

  if (problemForm && problemInput) {
    problemForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const email = problemEmail ? problemEmail.value.trim() : '';
      const note = problemInput.value.trim();

      if (problemEmail && !email) {
        problemEmail.focus();
        showToast('Please provide your email address so I can respond.');
        return;
      }

      if (!note) {
        problemInput.focus();
        showToast('Please describe your system, data, or workflow problem.');
        return;
      }

      const submitBtn = problemForm.querySelector('button[type="submit"]');
      const originalBtnText = submitBtn ? submitBtn.textContent : 'Send Note';
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending...';
      }

      if (problemFeedback) {
        problemFeedback.innerHTML = '';
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
            _subject: 'Portfolio Direct Inquiry — Ehsan Negahdar',
            email: email,
            _replyto: email,
            message: note,
            source: window.location.href,
            timestamp: new Date().toISOString(),
          }),
        });

        if (res.ok) {
          showToast(`✓ Note sent successfully to ${data.meta.directEmail}!`);
          if (problemFeedback) {
            problemFeedback.innerHTML = `<span class="feedback-success">✓ Thank you! Your note has been dispatched. I will reply to ${escapeHtml(email)} soon.</span>`;
          }
          if (problemEmail) problemEmail.value = '';
          problemInput.value = '';
        } else {
          throw new Error('Endpoint returned HTTP ' + res.status);
        }
      } catch (err) {
        // NON-DESTRUCTIVE RECOVERY: Keep user's input intact
        showToast('Unable to send automatically. Note preserved below.');
        if (problemFeedback) {
          const subject = encodeURIComponent('Problem Inquiry — Direct Note');
          const mailBody = encodeURIComponent(
            `Hi Ehsan,\n\nFrom: ${email}\nProblem description:\n"${note}"\n\nBest regards,`
          );
          const mailtoUrl = `mailto:${data.meta.directEmail}?subject=${subject}&body=${mailBody}`;

          problemFeedback.innerHTML = `
            <div class="feedback-fallback-banner">
              <p class="feedback-text warning">⚠ Direct dispatch service unavailable. Your note has been preserved.</p>
              <div class="feedback-actions">
                <button type="button" class="feedback-btn action-copy" id="feedback-copy-btn">📋 Copy Note</button>
                <a href="${mailtoUrl}" class="feedback-btn action-email" target="_blank" rel="noopener noreferrer">✉ Open in Email Client</a>
                <button type="button" class="feedback-btn action-retry" id="feedback-retry-btn">↻ Retry</button>
              </div>
            </div>
          `;

          const copyBtn = document.getElementById('feedback-copy-btn');
          if (copyBtn) {
            copyBtn.addEventListener('click', async () => {
              const fullNote = `Contact: ${email}\nProblem: ${note}`;
              try {
                if (!navigator.clipboard) throw new Error('No clipboard API');
                await navigator.clipboard.writeText(fullNote);
                copyBtn.textContent = '✓ Copied!';
                showToast('✓ Note copied to clipboard.');
              } catch (clipErr) {
                copyBtn.textContent = 'Select text manually';
                showToast('Clipboard access unavailable. Please select your text manually.');
              }
            });
          }

          const retryBtn = document.getElementById('feedback-retry-btn');
          if (retryBtn) {
            retryBtn.addEventListener('click', () => {
              problemForm.requestSubmit();
            });
          }
        }
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
            ${proj.url.startsWith('http') ? 'target="_blank" rel="noopener noreferrer"' : ''}
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
      pageFilterChips.forEach((c) => {
        const isActive = c === chip;
        c.classList.toggle('active', isActive);
        c.setAttribute('aria-selected', isActive ? 'true' : 'false');
      });
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

        <div class="cv-main" id="cv-experience">
          <h2 class="cv-section-h2">Experience</h2>
          ${cv.experience
            .map(
              (exp) => `
            <div class="cv-exp-entry" id="${exp.id || 'exp-' + exp.org.toLowerCase().replace(/[^a-z0-9]+/g, '-')}">
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
