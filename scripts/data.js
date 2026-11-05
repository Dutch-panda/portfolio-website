/**
 * Central Portfolio Data Configuration — Ehsan Negahdar
 * Shared across index.html, cv.html, projects.html, and blog.html
 */
window.PORTFOLIO_DATA = {
  meta: {
    title: "Ehsan Negahdar — Business Data Analyst & Systems Architect",
    kicker: "EHSAN NEGAHDAR // BUSINESS DATA ANALYST & SYSTEMS ARCHITECT",
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
      title: "Business & System Analysis",
      summary:
        "Requirements analysis, process mapping, system and workflow design, evaluation, and risk-aware change planning.",
      deliverables: [
        "End-to-end process mapping & operational bottleneck diagnostics",
        "Requirements engineering & system comparison specifications",
        "Staged migration planning, customer communication & risk mitigation",
      ],
      metric: "Requirements · Process Mapping · Workflow Design",
    },
    {
      index: "02",
      title: "AI-Enabled Solutions",
      summary:
        "Multi-agent workflow design, context persistence, and human-in-the-loop decision boundaries built around real organizational needs.",
      deliverables: [
        "Structured multi-agent workflow architecture & orchestration",
        "Context persistence, linked result trails & SQLite execution logs",
        "Human review checkpoints & phase-by-phase validation gates",
      ],
      metric: "BuildRelay Showcase · Human-in-the-Loop Architecture",
    },
    {
      index: "03",
      title: "Data & Telemetry",
      summary:
        "Data preparation, analysis, and visualization in SQL, Python, and Power BI to support practical operational decisions.",
      deliverables: [
        "SQL data queries (joins, aggregations, CTEs, basic query optimization)",
        "Python data analysis (pandas, NumPy, Matplotlib, Seaborn) & Flask web tools",
        "Power BI data modeling, relationship design & KPI reporting",
      ],
      metric: "SQL · Python · Power BI · Data Modeling",
    },
  ],

  projects: [
    // =========================================================================
    // PINNED GITHUB REPOSITORIES (Synced with https://github.com/Dutch-panda)
    // =========================================================================
    {
      id: "buildrelay",
      category: "github",
      featured: true,
      problem: "Fragmented multi-step engineering requests & unverified task handoffs",
      solution: "BuildRelay · Multi-Agent Engineering & Knowledge Vault Platform",
      tagLabel: "GitHub ↗",
      tagType: "github",
      year: "2026",
      role: "System & Workflow Designer (agent-assisted implementation)",
      url: "https://github.com/Dutch-panda/BuildRelay",
      scopeHeading: "Multi-Agent Routing & Sandbox Architecture",
      methodologyHeading: "Execution Pipeline & Validation Gates",
      pipeline: [
        "Natural-Language Brief",
        "Multi-Agent Routing",
        "Phase Validation Gates",
        "Context Persistence (Obsidian / SQLite)",
        "Human Review Checkpoint",
      ],
      details:
        "Designed an end-to-end multiagent workflow CLI that turns a natural-language request into a structured software deliverable with human review at phase completion. Defined system behavior, quality expectations, context persistence, and SQLite logging, directing agent-assisted implementation.",
      methodology: [
        "Designed an end-to-end multiagent workflow turning natural-language briefs into structured deliverables with human review at phase completion.",
        "Defined system behavior, quality expectations, context persistence, linked result records, and SQLite execution logging.",
        "Directed agent-assisted implementation and reviewed phase completion, testing workflow on offline Python/Flask form-and-PDF generation.",
      ],
      stack: ["Python 3.10+", "Agent Orchestration", "SQLite Logging", "Context Persistence", "Human-in-the-Loop"],
      outcome: "Functional multi-agent workflow turning prompts into validated deliverables with human checkpoint gates.",
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
      scopeHeading: "Offline-First & Scientific UI Architecture",
      methodologyHeading: "Compilation, Verification & Privacy",
      pipeline: [
        "Raw Element Data",
        "Python Build Pipeline",
        "Atomic Service Worker",
        "Card & Grid Views",
        "Diagnostic Mistake Loop",
        "Automated CI Suite",
      ],
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
  ],

  updates: [
    {
      date: "Oct 2026",
      title: "Published BuildRelay (Multi-Agent Engineering Platform) & Periodic Table Companion on GitHub",
      tag: "GitHub",
    },
    {
      date: "2026",
      title: "Independent Business Analyst / Consultant @ Pulse Pilates — Booking migration & business analysis",
      tag: "Consulting",
    },
    {
      date: "2025",
      title: "Completed MSc in Digital Business @ University of Amsterdam (Talent Fund Scholar)",
      tag: "Education",
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
      "Business and systems analysis professional focused on designing practical data and workflow solutions around organizational needs. Combines process analysis, requirements definition, and system design with data analysis and human-in-the-loop workflows. Hands-on expertise in Python, SQL, Power BI, and agentic workflows.",
    kpis: [
      { num: "6+", label: "Years in Data, Systems & Analytics" },
      { num: "4", label: "Industries: Fintech, Consulting, Retail, Education" },
      { num: "2", label: "Master's Degrees (UvA & UT)" },
      { num: "Core", label: "SQL · Python · Power BI · Agentic AI" },
    ],
    roadmap: [
      {
        step: "01",
        period: "2019 – 2021",
        stage: "Foundational Analytics & ETL",
        milestones: "Hamrah Academy · Rose Academy",
        skills: ["SQL", "Python (Pandas)", "Power BI", "ETL Pipelines", "CRM Analytics"],
        summary: "Cleaned telecom/retail datasets, engineered ETL pipelines, and built automated customer retention & sales dashboards.",
        current: false,
      },
      {
        step: "02",
        period: "2021 – 2023",
        stage: "Process Optimization & Systems Design",
        milestones: "Sarshenas Consulting · MSc IT Management (UT)",
        skills: ["Process Mapping", "Operational Bottlenecks", "KPI Dashboards", "Requirements Specs"],
        summary: "Analyzed cross-functional client processes, mapped operational workflows, and translated analytical findings into executive strategies.",
        current: false,
      },
      {
        step: "03",
        period: "2024 – 2025",
        stage: "Digital Strategy & Decision Science",
        milestones: "MSc Digital Business (UvA) · Talent Scholar · TA",
        skills: ["Digital Transformation", "Strategy Analytics", "Decision Frameworks", "Simulation Modeling"],
        summary: "Earned UvA Merit Scholarship; investigated digital platform ecosystems and taught climate simulation workshops.",
        current: false,
      },
      {
        step: "04",
        period: "2025 – Present",
        stage: "Autonomous AI Workflows & Systems Architecture",
        milestones: "BuildRelay (Open Source) · Pulse Pilates",
        skills: ["Agentic AI Workflows", "Multi-Agent Orchestration", "Human-in-the-Loop", "Platform Migration"],
        summary: "Architecting autonomous multi-agent workflows with context persistence, and leading operational system migrations.",
        current: true,
      },
    ],
    skills: [
      { name: "Business & System Analysis", desc: "Requirements analysis, process mapping, system & workflow design, evaluation" },
      { name: "AI Workflow Design", desc: "Agent orchestration, context persistence, human-review boundaries" },
      { name: "SQL", desc: "Joins, aggregations, CTEs, basic query optimization" },
      { name: "Python", desc: "Pandas, NumPy, Matplotlib, Seaborn, Flask & Jinja templates" },
      { name: "Power BI", desc: "Prior experience with data modeling and relationships" },
      { name: "ETL & Data Preparation", desc: "Cleaning, transformation, schema validation" },
      { name: "CRM Analytics", desc: "Customer segmentation, cohort analysis, engagement metrics" },
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
        id: "proj-buildrelay",
        role: "System & Workflow Designer (agent-assisted implementation)",
        org: "BuildRelay (Independent project / portfolio showcase)",
        current: true,
        dates: "Oct 2026 – Present",
        meta: "Open Source / Independent",
        bullets: [
          "Designed an end-to-end multiagent workflow that turns a natural-language request into a software deliverable, with human review at phase completion.",
          "Defined system behavior, quality expectations and supporting features, including context persistence, project organization, linked result records and SQLite logging; refined the design through observed issues and feedback.",
          "Directed agent-assisted implementation and reviewed phase completion; agents performed most of the coding.",
          "Tested the workflow on a two-line natural-language request for an offline Python Flask app that collects HTML form responses and generates a question-and-answer PDF.",
        ],
      },
      {
        id: "exp-pulse",
        role: "Independent Business Analyst / Consultant",
        org: "Pulse Pilates",
        current: true,
        dates: "Dec 2025 – Present",
        meta: "Muscat, Oman",
        bullets: [
          "Compared booking-system options and planned and staged the studio's migration, including customer communication and risk mitigation; supported a completed migration and subsequent adjustments.",
          "Contributed business analysis to an in-studio cafe initiative, including requirements and market analysis, operational workflow and menu development.",
          "Advised on recruitment and personnel-management needs as part of the studio's business development initiative.",
        ],
      },
      {
        id: "exp-uva-ta",
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
        id: "exp-big-data",
        role: "Independent Research Participant",
        org: "Big Data Analytics Group",
        current: true,
        dates: "Feb 2023 – Present",
        meta: "Research & Professional Activities",
        bullets: [
          "Research and write book and article summaries, tool introductions, and analyses of data- and AI-driven business models for executives and students.",
        ],
      },
      {
        id: "exp-sarshenas",
        role: "Business Analytics Specialist",
        org: "Sarshenas Consulting Services",
        current: false,
        dates: "Aug 2021 – Jul 2023",
        meta: "Consulting",
        bullets: [
          "Analyzed business processes and performance metrics to identify operational improvement areas for clients, developing data-driven recommendations for process mapping and workflow evaluation.",
          "Designed and maintained dashboards and reports to monitor key process indicators and business outcomes.",
          "Translated analytical findings into actionable insights for strategic planning and process optimization.",
        ],
      },
      {
        id: "exp-hamrah",
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
        id: "exp-rose",
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
        id: "exp-tehran",
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
      id: "beyond-the-prompt-buildrelay",
      category: "Design Notes // Experimental Project",
      date: "Nov 2026",
      readTime: "7 min read",
      badge: "BuildRelay",
      title: "Designing BuildRelay: Requirements, Review and Human Judgment in an Agent Workflow",
      slug: "./blog/beyond-the-prompt-buildrelay.html",
      summary:
        "Design notes on an experimental agent workflow: clarifying requirements, separating responsibilities, and combining automated checks with human review.",
      tags: ["Multi-Agent Workflows", "System Design", "BuildRelay", "Process Supervision", "Human-in-the-Loop"],
      highlights: [
        "Process supervision & behavior specs: clarifying expectations upfront instead of managing drift",
        "Explicit roles & routing: Natasha (coordinator), Odin (researcher), Taghi (architect), Meti (implementer), Dana (supervisor)",
        "Treating review as diverse evidence: phase-check results, model-based critique, and human judgment",
      ],
    },
  ],
};
