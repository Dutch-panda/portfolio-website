/**
 * Central Portfolio Data Configuration — Ehsan Negahdar
 * Shared across index.html, cv.html, projects.html, and blog.html
 */
window.PORTFOLIO_DATA = {
  meta: {
    title: "Designer & Problem-Solver — Systems · Data · Agentic AI",
    kicker: "DESIGNER & PROBLEM-SOLVER // SYSTEMS · DATA · AGENTIC AI",
    headlineLine1: "Untangling complex systems.",
    headlineLine2: "Designing autonomous workflows.",
    subheadline:
      "Turning messy operational data, process bottlenecks, and ambiguous domain questions into clear architecture, decision frameworks, and AI workflows.",
    availability: "Available",
    availabilityDetail: "Amsterdam, NL · Open for select systems, data & AI workflow problems",
    directEmail: "en.mirror@gmail.com",
    phone: "+31 68 494 2790",
    location: "Amsterdam, Netherlands",
    githubUrl: "https://github.com/Dutch-panda",
    linkedinUrl: "https://www.linkedin.com/in/ehsan-negahdar/",
    systemStatus: "Clean",
  },

  specialties: [
    {
      index: "01",
      title: "Systems & Process",
      summary:
        "System architecture, process mapping, operational benchmarking, and turning cross-team workflow friction into scalable execution.",
      deliverables: [
        "End-to-end process optimization & bottleneck diagnostics",
        "Requirement analysis & operational system design",
        "Cross-functional KPI architecture & performance evaluation",
      ],
      metric: "6+ years optimizing processes across Fintech, Consulting & Retail",
    },
    {
      index: "02",
      title: "Agentic AI & Workflows",
      summary:
        "Domain AI tools implementation, autonomous research pipelines, and human-in-the-loop decision systems built around real business constraints.",
      deliverables: [
        "Deterministic multi-agent workflows & tool orchestration",
        "Domain-specific AI copilots & automated reporting pipelines",
        "Human-in-the-loop guardrails & evaluation frameworks",
      ],
      metric: "Bridging domain strategy with autonomous AI execution",
    },
    {
      index: "03",
      title: "Research & Data",
      summary:
        "Analytical problem-solving, CRM & transactional data modeling, cohort/funnel diagnostics, and executive storytelling with data.",
      deliverables: [
        "Advanced SQL, Python & ETL pipeline architecture",
        "Power BI data modeling (DAX), KPI dashboards & telemetry",
        "Customer segmentation, churn modeling & growth strategy",
      ],
      metric: "SQL · Python · Power BI · Decision Modeling",
    },
  ],

  projects: [
    // =========================================================================
    // PINNED GITHUB REPOSITORIES (Synced with https://github.com/Dutch-panda)
    // =========================================================================
    {
      id: "agent-platform-v2",
      category: "github",
      featured: true,
      problem: "Fragmented multi-step engineering requests & unverified task handoffs",
      solution: "AP-V2 · Multi-Agent Engineering & Knowledge Vault Platform",
      tagLabel: "GitHub ↗",
      tagType: "github",
      year: "2026",
      role: "System Architect & Creator",
      url: "https://github.com/Dutch-panda/AgentPlatform",
      details:
        "Built a Python CLI powered by Pydantic AI that coordinates a four-role autonomous engineering team (Natasha coordinator, Odin researcher, Taghi architect, and Meti implementer). Turns raw prompts into structured briefs, research findings, phased specifications, and Docker-validated implementations linked inside an Obsidian knowledge vault.",
      methodology: [
        "Designed a 4-stage sequential routing graph: Coordinator (Natasha) → Researcher (Odin) → Architect (Taghi) → Implementer (Meti).",
        "Enforced strict Docker execution sandboxing and phase-by-phase validation gates so unvalidated phases automatically downgrade reported success.",
        "Persisted every brief, research note, architecture spec, and code review into a connected Obsidian Markdown vault with graph lookup.",
      ],
      stack: ["Python 3.10+", "Pydantic AI", "Docker Sandbox", "Obsidian Vault", "Multi-Agent Systems"],
      outcome: "One prompt → four specialized agent roles → connected knowledge trail & validated build.",
    },
    {
      id: "periodic-table-practice",
      category: "github",
      featured: true,
      problem: "Lack of offline-first, zero-tracking interactive scientific study tools in RTL",
      solution: "Element-by-Element (عنصر به عنصر) · Offline-First Study Companion",
      tagLabel: "GitHub ↗",
      tagType: "github",
      year: "2026",
      role: "Designer & Developer",
      url: "https://github.com/Dutch-panda/periodic-table-practice",
      details:
        "Designed and engineered a mobile-friendly, offline-first periodic-table learning companion covering all 118 elements with search/filters, five-question diagnostic quizzes, mistake-retry loops, and local progress persistence—with zero backend, zero tracking, and a standalone single-file offline build.",
      methodology: [
        "Preserved left-to-right scientific table structure seamlessly inside a right-to-left (Persian) responsive interface with card and grid views.",
        "Built an automated Python build pipeline (scripts/build.py) that compiles a self-contained offline.html and atomic service-worker cache.",
        "Implemented targeted mistake-retry loops and automated Node test suites (tests/*.test.cjs) verified via GitHub Actions CI.",
      ],
      stack: ["JavaScript (ES6+)", "Offline-First / Service Worker", "Python Build Pipeline", "Automated CI Tests"],
      outcome: "Zero-dependency, privacy-first educational web app deployed via GitHub Actions.",
    },

    // =========================================================================
    // REAL-WORLD ANALYTICS & SYSTEMS CASE STUDIES (From Professional Experience)
    // =========================================================================
    {
      id: "fintech-payment-funnel",
      category: "sample",
      featured: true,
      problem: "Opaque conversion drop-offs & payment process friction at scale",
      solution: "Fintech Transaction & Cohort Intelligence System (ZarinPal)",
      tagLabel: "Case Study",
      tagType: "sample",
      year: "2025",
      role: "Business Data Analyst · ZarinPal",
      url: "./cv.html",
      details:
        "Architected an end-to-end transaction and user-behavior analytics framework combining SQL, Python, and Power BI (DAX) to track conversion funnels, retention cohorts, and payment risk signals across digital payment products.",
      methodology: [
        "Modeled multi-million-row transaction logs using optimized SQL queries and Python preprocessing pipelines.",
        "Built interactive Power BI executive dashboards tracking transaction volume, conversion rates, and user engagement.",
        "Partnered with product, marketing, and risk teams to translate cohort and funnel anomalies into payment flow optimizations.",
      ],
      stack: ["SQL", "Python (Pandas/NumPy)", "Power BI / DAX", "Funnel & Cohort Analysis"],
      outcome: "Directly informed customer acquisition, retention, and payment risk monitoring systems.",
    },
    {
      id: "process-benchmarking-architecture",
      category: "systems",
      featured: true,
      problem: "Disconnected operational metrics & unmapped cross-team process friction",
      solution: "Scalable Process Mapping & KPI Benchmarking Framework",
      tagLabel: "Systems",
      tagType: "systems",
      year: "2023",
      role: "Business Analytics Specialist · Sarshenas Consulting",
      url: "./cv.html",
      details:
        "Analyzed end-to-end business processes and operational performance metrics for consulting clients, designing scalable analytical frameworks and KPI dashboards for process mapping, benchmarking, and continuous performance evaluation.",
      methodology: [
        "Audited client workflows to isolate operational bottlenecks and manual reporting drag.",
        "Designed standardized KPI reporting architectures connecting process indicators to strategic business outcomes.",
        "Translated complex analytical findings into executive roadmaps for process optimization.",
      ],
      stack: ["Process Optimization", "KPI Architecture", "Power BI", "Operational Benchmarking"],
      outcome: "Established repeatable process-mapping and performance evaluation frameworks across engagements.",
    },
    {
      id: "crm-churn-segmentation",
      category: "sample",
      featured: true,
      problem: "High customer churn & undifferentiated engagement in large telecom CRM datasets",
      solution: "Automated CRM Segmentation & Churn Diagnostic Model",
      tagLabel: "Case Study",
      tagType: "sample",
      year: "2021",
      role: "Data Analytics · Hamrah Academy",
      url: "./cv.html",
      details:
        "Cleaned, transformed, and modeled large-scale telecom CRM datasets to uncover customer behavior, churn drivers, and engagement patterns—supporting automated KPI dashboards for acquisition and retention.",
      methodology: [
        "Engineered ETL cleaning, transformation, and validation pipelines across large-scale customer datasets.",
        "Conducted behavioral segmentation and churn pattern analysis to identify at-risk customer cohorts.",
        "Automated recurring KPI dashboards tracking customer acquisition and retention performance.",
      ],
      stack: ["CRM Analytics", "ETL & Data Prep", "SQL", "Customer Segmentation"],
      outcome: "Delivered validated CRM reporting pipelines and actionable retention insights.",
    },
    {
      id: "hospitality-market-req-analysis",
      category: "systems",
      featured: false,
      problem: "Launching a new specialty hospitality concept inside an existing studio",
      solution: "End-to-End Requirement, Market & Operational Blueprint (Pulse Pilates)",
      tagLabel: "Systems",
      tagType: "systems",
      year: "2026",
      role: "Business Analyst · Pulse Pilates",
      url: "./cv.html",
      details:
        "Conducted comprehensive requirement engineering, local market analysis, operational workflow design, and menu development for launching an integrated coffee shop within the Pilates studio.",
      methodology: [
        "Analyzed local market positioning, customer flow, and operational requirements.",
        "Designed service workflows and menu architecture aligned with studio operations.",
      ],
      stack: ["Requirement Analysis", "Market Research", "Process Design", "Business Strategy"],
      outcome: "Delivered an execution-ready commercial and operational launch blueprint.",
    },

    // =========================================================================
    // TEMPLATE FOR UPCOMING GITHUB REPOS & UNIVERSITY THESIS PROJECTS
    // Uncomment and fill in when ready to publish your MSc theses (UvA / UT)
    // or new public GitHub repositories:
    // =========================================================================
    /*
    {
      id: "uva-msc-thesis",
      category: "systems", // or "github" / "sample"
      featured: true,
      problem: "Your thesis research problem statement here",
      solution: "MSc Digital Business Thesis — University of Amsterdam",
      tagLabel: "University Thesis",
      tagType: "systems",
      year: "2025",
      role: "MSc Researcher · University of Amsterdam",
      url: "https://github.com/Dutch-panda",
      details: "Summary of your UvA MSc Digital Business or UT MSc IT Management thesis.",
      methodology: [
        "Step 1 of research methodology / data collection / modeling",
        "Step 2 of empirical analysis or framework design",
      ],
      stack: ["Digital Business", "Data Science", "Strategy Analytics", "Research"],
      outcome: "Key academic and practical contribution of the thesis.",
    },
    */
  ],

  updates: [
    {
      date: "Oct 2026",
      title: "Published AP-V2 (Multi-Agent Engineering Platform) & Periodic Table Companion on GitHub",
      tag: "GitHub",
    },
    {
      date: "2026",
      title: "Business Analyst @ Pulse Pilates — Market analysis, requirement engineering & operations",
      tag: "Strategy & Process",
    },
    {
      date: "2025",
      title: "Completed MSc in Digital Business @ University of Amsterdam (Talent Fund Scholar)",
      tag: "Milestone",
    },
  ],

  cv: {
    name: "Ehsan Negahdar",
    title: "Business Data Analyst · Strategy, Systems & Process Optimization",
    location: "Amsterdam, Netherlands",
    email: "en.mirror@gmail.com",
    phone: "+31 68 494 2790",
    linkedin: "https://www.linkedin.com/in/ehsan-negahdar/",
    github: "https://github.com/Dutch-panda",
    summary:
      "Business Data Analyst and Problem-Solver with 6+ years of experience across consulting, fintech, retail, and education—turning complex data and operational ambiguity into actionable insights, streamlined processes, and strategic growth. Hands-on expertise in Python, SQL, Power BI, ETL, and agentic AI workflows.",
    kpis: [
      { num: "6+", label: "Years in Data, Systems & Analytics" },
      { num: "4", label: "Industries: Fintech, Consulting, Retail, Education" },
      { num: "2", label: "Master's Degrees (UvA & UT)" },
      { num: "Core", label: "SQL · Python · Power BI · Agentic AI" },
    ],
    skills: [
      { name: "SQL", desc: "Advanced querying, performance tuning" },
      { name: "Python", desc: "Pandas, NumPy, Matplotlib, automation" },
      { name: "Power BI", desc: "Dashboards, DAX, data modeling" },
      { name: "ETL & Data Prep", desc: "Cleaning, transformation, validation" },
      { name: "Data Visualization", desc: "Executive storytelling with data" },
      { name: "CRM Analytics", desc: "Churn, segmentation, engagement" },
      { name: "Process Optimization", desc: "Process mapping, efficiency benchmarking" },
      { name: "Agentic Workflows", desc: "Pydantic AI, multi-agent orchestration" },
    ],
    education: [
      {
        degree: "MSc, Business Administration — Digital Business",
        school: "University of Amsterdam",
        dates: "Sep 2024 – Aug 2025",
        note: "Coursework in Theories of Digital Business, Data Science, Strategy Analytics, and Digital Transformation.",
      },
      {
        degree: "MSc, IT Management — Information Systems",
        school: "University of Tehran",
        dates: "Sep 2019 – Aug 2023",
        note: "Focused on IT Strategy, Business Intelligence, Data Science, and Systems Design.",
      },
      {
        degree: "BSc, Business Administration — Trade & Commerce",
        school: "University of Tehran",
        dates: "Sep 2015 – Aug 2019",
        note: "Foundation in management, marketing, finance, and organizational behavior.",
      },
    ],
    awards: [
      {
        name: "Amsterdam Economics & Business Talent Fund Scholarship",
        meta: "University of Amsterdam · Aug 2024",
      },
      {
        name: "Direct Entry to Master's Degree Talent Award",
        meta: "University of Tehran · Sep 2019",
      },
    ],
    languages: [
      { name: "English", level: "Professional" },
      { name: "Dutch", level: "A2 · Improving" },
      { name: "Farsi", level: "Native" },
    ],
    experience: [
      {
        role: "Business Analyst",
        org: "Pulse Pilates",
        current: true,
        dates: "Dec 2025 – Present",
        meta: "Muscat, Oman",
        bullets: [
          "Conducted requirement analysis for opening a coffee shop within the Pilates studio, including market analysis and menu development.",
        ],
      },
      {
        role: "Teaching Assistant, Sustainability Honours Programme",
        org: "University of Amsterdam Business School",
        current: false,
        dates: "Oct 2024 – Jun 2025",
        meta: "Amsterdam, Netherlands",
        bullets: [
          "Assisted with preparing course materials, taught the climate change simulation workshop, and assessed student proposals and final projects.",
        ],
      },
      {
        role: "Business Data Analyst",
        org: "ZarinPal",
        current: false,
        dates: "Jul 2023 – Aug 2025",
        meta: "Fintech",
        bullets: [
          "Analyzed transaction and user behavior data to identify growth opportunities and improve digital payment product performance, and developed data-driven strategies for customer acquisition and retention with product and marketing teams.",
          "Built and maintained Power BI dashboards tracking key KPIs (transaction volume, conversion rates, user engagement), and conducted cohort, funnel, and segmentation analyses to evaluate product and campaign performance.",
          "Supported strategic decision-making and performance reporting through ad-hoc SQL and Python analyses, providing insights that contributed to the optimization of payment processes and risk monitoring systems.",
        ],
      },
      {
        role: "Business Intelligence Researcher",
        org: "Big Data Analytics Group",
        current: true,
        dates: "Feb 2023 – Present",
        meta: "Consulting",
        bullets: [
          "Researched emerging trends in big data, analytics, and BI, focusing on real-world business applications and measurable impact, and developed case-based frameworks illustrating how data and BI tools drive strategic advantage for decision-makers.",
          "Translated analytical findings into actionable recommendations for organizations seeking performance improvement.",
        ],
      },
      {
        role: "Business Analytics Specialist",
        org: "Sarshenas Consulting Services",
        current: false,
        dates: "Aug 2021 – Jul 2023",
        meta: "Consulting",
        bullets: [
          "Analyzed business processes and performance metrics to identify operational improvement areas for clients, and developed data-driven recommendations that enhanced operational efficiency and supported strategic decision-making.",
          "Designed and maintained dashboards and reports to monitor key process indicators and business outcomes.",
          "Translated complex analytical findings into actionable insights for strategic planning and process optimization, contributing to scalable analytical frameworks for process mapping, benchmarking, and performance evaluation.",
        ],
      },
      {
        role: "Data Analytics Trainee",
        org: "Hamrah Academy",
        current: false,
        dates: "Aug 2020 – Jul 2021",
        meta: "Telecom Industry",
        bullets: [
          "Analyzed large CRM datasets to uncover patterns in customer behavior, churn, and engagement across telecom services, and cleaned, transformed, and validated large-scale customer data to ensure accuracy and consistency for reporting.",
          "Supported the design and automation of dashboards and KPI reports tracking customer acquisition and retention, gaining hands-on experience in customer segmentation and translating analytical findings into actionable business recommendations.",
        ],
      },
      {
        role: "Data Analytics Trainee",
        org: "Rose Academy (Consultancy and Education)",
        current: false,
        dates: "Mar 2019 – Jul 2020",
        meta: "Retail Consulting",
        bullets: [
          "Assisted in analyzing large retail datasets to identify sales trends and customer behavior patterns, and supported consultants in preparing data-driven recommendations for improving client sales and inventory management.",
          "Cleaned, transformed, and visualized data using Excel, Power BI, and SQL for client reports and presentations, gaining hands-on experience with ETL processes, retail analytics, and client-facing reporting workflows.",
        ],
      },
      {
        role: "Project Coordinator, Business Games League",
        org: "University of Tehran (Student Association)",
        current: false,
        dates: "Nov 2019 – May 2020",
        meta: "Volunteer",
        bullets: [
          "Coordinated the planning and execution of a university-wide business strategy competition with industry partners, managing event logistics, team registration, budgets, and communication between participants and sponsors.",
          "Oversaw project timelines and deliverables, fostering teamwork and analytical thinking among participants.",
        ],
      },
    ],
  },

  blogPosts: [
    {
      id: "agentic-handoffs",
      date: "Oct 18, 2026",
      readTime: "5 min read",
      category: "Agentic Workflows",
      title: "Why Most Agentic Workflows Fail at the Handoff (And How to Fix the Architecture)",
      excerpt:
        "Lessons from building AP-V2 with Pydantic AI: why autonomous agents fail at step boundaries without typed task briefs, Docker validation gates, and connected vault memory.",
      body: [
        "When teams first prototype an agentic workflow, they usually focus on prompt engineering or model selection. Yet in production environments—whether coordinating engineering tasks in AP-V2, triaging operational tickets, or validating financial data—failures almost always happen at the boundaries between steps.",
        "In AP-V2 (AgentPlatform), we solved this by separating responsibilities across four explicit roles: a Coordinator (Natasha) that produces a typed task brief and selects the route, a Researcher (Odin) that queries local vault context, an Architect (Taghi) that defines ordered execution phases with explicit validation commands, and an Implementer (Meti) that executes inside a Docker sandbox.",
        "Crucially, a reported success is automatically downgraded to failure if any phase remains unvalidated. Combining typed state contracts with deterministic sandbox verification gives you autonomous speed without sacrificing engineering rigor.",
      ],
    },
    {
      id: "diagnosing-bottlenecks",
      date: "Oct 04, 2026",
      readTime: "4 min read",
      category: "Process & Strategy",
      title: "Untangling Complexity: A Blueprint for Diagnosing Operational Bottlenecks",
      excerpt:
        "Lessons from fintech and consulting on how to combine transaction-level SQL/Python telemetry with process mapping to remove hidden workflow drag.",
      body: [
        "Every growing organization accumulates invisible process drag: manual spreadsheet handoffs, disconnected CRM definitions, and KPIs that measure activity rather than outcomes.",
        "Effective problem-solving starts before writing a single line of SQL or DAX. First, map the decision flow: who needs what signal, at what latency, to make a high-consequence choice? Only then do we instrument the funnel, clean the underlying ETL pipeline, and surface a focused dashboard that drives action.",
      ],
    },
    {
      id: "messy-data-to-conviction",
      date: "Sep 19, 2026",
      readTime: "6 min read",
      category: "Data & Decisions",
      title: "From Messy CRM & Transaction Logs to Executive Conviction",
      excerpt:
        "How cohort, funnel, and segmentation models bridge the gap between raw operational data and high-leverage strategic decisions.",
      body: [
        "Raw transactional data tells you what happened yesterday; cohort and segmentation models tell you why behavior is shifting and where to intervene next.",
        "Across fintech payment gateways and telecom CRM systems, the highest-leverage insights come from pairing clean data engineering (ETL validation, schema discipline) with clear visual storytelling in Power BI and Python.",
      ],
    },
  ],
};
