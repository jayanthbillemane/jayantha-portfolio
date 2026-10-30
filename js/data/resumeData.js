/**
 * Jayantha BS - Official Executive Resume Data
 * Senior Software Engineer • AI Platforms, Multi-Agent Runtimes & Backend Systems
 * Bengaluru, India • jayanthbillemane@gmail.com • +91 7847010071 • linkedin.com/in/jayanth-billemane-a95b68253
 */

export const resumeData = {
  profile: {
    name: "JAYANTHA BS",
    role: "Senior Software Engineer",
    specialization: "AI Platforms, Multi-Agent Runtimes & Backend Systems",
    statusBadge: "OPEN TO ARCHITECT & STAFF / SENIOR ROLES",
    email: "jayanthbillemane@gmail.com",
    phone: "+91 7847010071",
    linkedin: "https://www.linkedin.com/in/jayanth-billemane-a95b68253",
    github: "https://github.com/jayanth-bs",
    location: "Bengaluru, India",
    pdfResumePath: "./assets/Jayantha_BS_Resume.pdf",
    summary: "Senior Software Engineer with 6+ years of experience engineering high-performance AI agent runtimes, citation-aware RAG pipelines, and regulatory-compliant enterprise software. Proven track record architecting modular multi-agent frameworks using Python, FastAPI, and LangGraph, paired with high-volume vector search and real-time observability. Deep expertise in life-sciences compliance automation, including Veeva Vault MLR ingestion, Italian AIFA regulatory guardrails, and Salesforce auto-triggered CRM delivery. Adept at translating complex enterprise domain logic into resilient distributed architectures with strict state tracking, tool sandboxing, and sub-second retrieval latency."
  },

  heroStats: [
    { label: "Engineering Experience", value: "6+ Years", subtext: "AI Platforms & Distributed Systems", icon: "briefcase", accent: "indigo" },
    { label: "Document Ingestion Speedup", value: "50% Faster", subtext: "Streamlined Wisdom & DataLabs Pipelines", icon: "zap", accent: "cyan" },
    { label: "CamcomAI Inspection T/A", value: "95% Reduced", subtext: "AICAMERA Automated Damage Assessment", icon: "clock", accent: "emerald" },
    { label: "Browser Video Telemetry", value: "15 FPS", subtext: "Real-time CamcomAI Camera Media Stream", icon: "video", accent: "purple" },
    { label: "Regulatory Compliance", value: "100% Audit", subtext: "Italian AIFA & Pharma MLR Directives", icon: "shield-check", accent: "amber" }
  ],

  coreCompetencies: [
    {
      category: "AI & Agent Platforms",
      icon: "bot",
      skills: [
        "Multi-Agent Orchestration (LangGraph, LangChain)",
        "Context Management & Summarization",
        "Agentic Model-Call Middleware",
        "Policy-Governed Tool Sandboxing",
        "Zero-Downtime Dynamic Graph Compilation",
        "Streaming Execution Architecture (AG-UI)",
        "OpenAI & Anthropic Claude Integration"
      ]
    },
    {
      category: "Regulatory & Compliance AI",
      icon: "shield",
      skills: [
        "AIFA Regulatory Governance (Italian D.Lgs. 219/06)",
        "MLR Policy Guardrails & Claim Validation",
        "Audit Trail Grounding (Claim to Source)",
        "Veeva Vault (PromoMats & Content Wizard)",
        "Salesforce CRM & Marketing Cloud",
        "Rep-Triggered Email (RTE) Automation"
      ]
    },
    {
      category: "Search & Document Intelligence",
      icon: "file-search",
      skills: [
        "Vector Retrieval (Azure AI Search)",
        "Structure-Aware Layout Chunking",
        "Bounding-Box Coordinate Tracking & Grounding",
        "Multimodal Extraction (Azure Vision, DataLabs)",
        "Metadata Enrichment & Markdown Synthesis",
        "Human-in-the-Loop Validation Workflows"
      ]
    },
    {
      category: "Backend & Cloud Architecture",
      icon: "server",
      skills: [
        "Python 3.12, FastAPI, Django Ninja, Flask",
        "PostgreSQL, Redis, Azure Cosmos DB, DuckDB",
        "RESTful & Server-Sent Events (SSE) Streaming APIs",
        "Docker, Kubernetes, Container Orchestration",
        "Microsoft Azure (App Services, Blob Storage)",
        "CI/CD Pipelines (GitHub Actions)"
      ]
    },
    {
      category: "Observability & Tooling",
      icon: "activity",
      skills: [
        "OpenTelemetry Distributed Tracing",
        "OpenInference & Arize Phoenix Lineage",
        "Vega & Microsoft Flint Visual Analytics",
        "GrapesJS Modular WYSIWYG Canvas",
        "FabricJS & OpenCV Image Annotation",
        "Microsoft Teams Web & SSO Integration"
      ]
    }
  ],

  technicalSkillsCategories: [
    { name: "Programming Languages", items: ["Python", "JavaScript (ES6+)", "TypeScript", "SQL", "HTML5/CSS3"] },
    { name: "AI & Agentic Systems", items: ["LangGraph", "LangChain", "OpenAI API", "Anthropic Models", "RAG", "Agent Middleware", "Tool Orchestration", "Persistent Memory", "Context Management", "Retrieval Evaluation"] },
    { name: "Regulatory & MarTech", items: ["AIFA Compliance Governance", "MLR Audit Trails", "Veeva Vault (PromoMats API)", "Salesforce CRM / Marketing Cloud", "Rep-Triggered Email (RTE)", "GrapesJS"] },
    { name: "Document Intelligence & Search", items: ["Azure AI Search", "Azure Vision", "DataLabs", "Vector Embeddings", "Structure-Aware Chunking", "Metadata Enrichment", "Citation Mapping", "Bounding-Box Attribution"] },
    { name: "Backend & Databases", items: ["FastAPI", "Django", "Django Ninja", "Flask", "SQLAlchemy", "Alembic", "PostgreSQL", "MySQL", "SQLite", "Azure Cosmos DB", "DuckDB", "Redis"] },
    { name: "Frontend & Visualization", items: ["React", "TypeScript", "Redux", "Tailwind CSS", "GrapesJS", "FabricJS", "Vega", "Microsoft Flint"] },
    { name: "Cloud & DevOps", items: ["Microsoft Azure (App Services, Blob Storage)", "Docker", "Kubernetes", "CI/CD (GitHub Actions)", "Container Orchestration"] },
    { name: "Observability & Developer Tools", items: ["OpenTelemetry", "OpenInference", "Arize Phoenix", "GitHub Copilot", "Cursor", "Antigravity"] }
  ],

  experience: [
    {
      role: "Senior Full Stack Developer",
      company: "Phamax Consulting (Ariya Division)",
      period: "Aug 2024 – Oct 2026",
      location: "Bengaluru, India",
      summary: "Led architecture for enterprise AI agent runtimes, Italian regulatory compliance engines (AIFA), citation-aware RAG pipelines, and automated Veeva Vault to Salesforce CRM bridges.",
      subsections: [
        {
          heading: "AI AGENT PLATFORM & RUNTIME ARCHITECTURE",
          points: [
            "Configurable Multi-Agent Runtime: Architected a modular multi-agent execution runtime using Python 3.12, FastAPI, LangGraph, and LangChain, integrating OpenAI and Anthropic models with agent-specific prompts, dynamic toolsets, and persistent storage.",
            "Zero-Downtime Dynamic Graph Compilation: Implemented hot-swappable graph compilation and runtime configuration updates, allowing agent capabilities, system prompts, and tool configurations to evolve without application redeployment.",
            "Streaming Execution Architecture: Developed thread-management and streaming-run APIs alongside AG-UI integration, powering responsive conversational interfaces and embedded enterprise web applications.",
            "Reusable Agent Middleware: Engineered model-call middleware for persistent context summarization, token accounting, LLM and tool error handling, loop-prevention heuristics, and safeguards against incomplete tool interactions.",
            "Enterprise Security & Tool Isolation: Implemented unified JWT authentication, SSO session propagation, and policy-governed tool sandboxing to isolate untrusted code execution and protect host resources.",
            "Distributed Observability & Evaluation: Integrated OpenTelemetry, OpenInference, and Arize Phoenix to trace agent lineages, monitor tool-calling latency, and systematically benchmark retrieval accuracy across agent workflows.",
            "Runtime Scalability & Orchestration: Designed an extensible runtime supporting multiple independently configured agents, shared execution services, and decoupled workers, establishing the foundation for elastic horizontal scaling and container orchestration."
          ]
        },
        {
          heading: "REGULATORY COMPLIANCE, INGESTION & DOCUMENT INTELLIGENCE",
          points: [
            "AIFA Regulatory & Compliance-Aware Engine: Engineered deterministic compliance guardrails and policy verification layers ensuring all AI-generated assets strictly adhere to Italian regulatory standards (AIFA) and pharmaceutical MLR guidelines, maintaining complete audit trails from claim to source.",
            "Evidence Grounding & Citation Retrieval: Engineered a citation-aware RAG pipeline utilizing structure-aware chunking, vector indexing in Azure AI Search, and bounding-box coordinate tracking—enabling generative answers to be traced directly to source page and paragraph evidence.",
            "Ingestion Optimization: Reduced document-ingestion time by 50% by streamlining processing pipelines, integrating review dashboards, and optimizing human-in-the-loop validation workflows.",
            "Enterprise Document Processing: Processed and indexed complex enterprise assets (PDFs, clinical decks, images), extracting unstructured content into structured Markdown/JSON via DataLabs and Azure Vision.",
            "Document Management: Developed operational dashboards for document upload staging, metadata capture, and human review, contributing core ingestion and validation capabilities to the Wisdom platform."
          ]
        },
        {
          heading: "AI APPLICATIONS, ANALYTICS & ENTERPRISE INTEGRATIONS",
          points: [
            "Veeva Vault & Salesforce Content Automation: Integrated Veeva Vault APIs within Content Wizard to ingest MLR-approved scientific literature, utilizing LLMs to dynamically generate compliant marketing collateral, Sales Materials, scientific flyers, and doctor letters; automated asset delivery to Salesforce CRM for rep-triggered email campaigns.",
            "Content Wizard Platform: Built the core Content Wizard platform using React, TypeScript, Django Ninja, and GrapesJS, providing medical and commercial teams with a modular WYSIWYG canvas for rapid, compliant asset generation.",
            "Pharmaceutical Intelligence Applications: Delivered two AI-powered analytics suites leveraging shared agent harness and document indexing, empowering Italian and European pharmaceutical clients with competitive market intelligence and auto-generated dashboards.",
            "Analytical Execution & Visualization: Developed agent-driven analytical workflows integrating Microsoft Flint, Vega, and DuckDB with sandboxed code execution for real-time data aggregation and dynamic visualization.",
            "Enterprise Integrations & Technical Leadership: Integrated AI agents directly into Microsoft Teams via embedded web experiences and Teams SSO; led technical task decomposition, sprint estimation, and cross-functional engineering coordination."
          ]
        }
      ],
      stack: ["Python 3.12", "FastAPI", "LangGraph", "LangChain", "Azure AI Search", "Azure Vision", "Veeva Vault API", "Salesforce CRM", "OpenTelemetry", "Arize Phoenix", "Django Ninja", "React", "TypeScript", "GrapesJS", "DuckDB"]
    },
    {
      role: "Software Developer",
      company: "CamcomAI",
      period: "Dec 2021 – Oct 2023",
      location: "Bengaluru, India",
      summary: "Engineered core automated vehicle inspection platforms and real-time computer vision orientation classification at edge.",
      subsections: [
        {
          heading: "AICAMERA & COMPUTER VISION PLATFORM",
          points: [
            "AICAMERA Platform Architecture: Engineered core features of AICAMERA, an automated vehicle inspection and insurance fraud-detection platform, driving up to a 95% reduction in manual inspection turnaround and claim processing costs.",
            "Real-Time Orientation Classification: Implemented an in-house vehicle-side classification model to guide users in capturing required vehicle angles and high-quality images for downstream claim assessment.",
            "Edge Media & Telemetry Capture: Developed browser-based camera streaming via JavaScript MediaDevices APIs, capturing synchronized 15 FPS video alongside precise geolocation coordinates for audit-verified inspections.",
            "CVAS Microservices Migration: Contributed to the CVAS platform by decomposing monolithic services into microservices and developing image-annotation and masking tools using OpenCV, Python, and FabricJS."
          ]
        }
      ],
      stack: ["Python", "JavaScript MediaDevices", "OpenCV", "FabricJS", "Computer Vision", "FastAPI", "Docker", "Microservices"]
    },
    {
      role: "Contract Developer",
      company: "Medilenz and Risk Advisors Inc.",
      period: "Oct 2020 – Nov 2021",
      location: "Bengaluru, India",
      summary: "Automated medical data extraction and analytical dashboard engineering.",
      subsections: [
        {
          heading: "MEDICAL CLAIMS PROCESSING & DASHBOARDS",
          points: [
            "Developed automated data-extraction pipelines using Python, Beautiful Soup, and Flask for processing structured medical claims information.",
            "Built interactive analytical dashboards and monitoring interfaces using ReactJS and Redux."
          ]
        }
      ],
      stack: ["Python", "Flask", "Beautiful Soup", "ReactJS", "Redux", "Data Pipelines"]
    },
    {
      role: "Software Engineer",
      company: "EFI",
      period: "Apr 2019 – Jul 2020",
      location: "Bengaluru, India",
      summary: "Enterprise directory automation and critical portal monitoring engineering.",
      subsections: [
        {
          heading: "ENTERPRISE AUTOMATION & DIRECTORY MANAGEMENT",
          points: [
            "Automated enterprise directory management and distribution list synchronization via Python Active Directory/LDAP scripts, eliminating repetitive manual IT admin workflows.",
            "Developed monitoring capabilities for business-critical internal portals and built frontend components for Active Directory management."
          ]
        }
      ],
      stack: ["Python", "LDAP / Active Directory", "JavaScript", "Internal Tools", "Monitoring"]
    }
  ],

  education: [
    {
      degree: "Bachelor of Engineering (B.E.) in Medical Electronics",
      institution: "M.S. Ramaiah Institute of Technology (MSRIT)",
      period: "2015 – 2019",
      location: "Bengaluru, Karnataka, India"
    }
  ],

  camcomEdgeSpecs: {
    targetFps: 15,
    frameBudgetMs: 66.67,
    actualLatencyMs: 58.4,
    platform: "AICAMERA Browser & Edge Media Streamer",
    stages: [
      { name: "Camera MediaDevices Video Frame Capture (1080p)", budgetMs: 6.2, color: "#38BDF8" },
      { name: "Vehicle Angle & Orientation Classification", budgetMs: 14.5, color: "#818CF8" },
      { name: "Real-Time Defect Detection & Surface Masking", budgetMs: 24.4, color: "#6366F1" },
      { name: "Spatial Bounding Box Tracking & FabricJS Overlay", budgetMs: 8.8, color: "#A855F7" },
      { name: "Audit Telemetry (GPS / Timestamp) Serialization", budgetMs: 4.5, color: "#10B981" }
    ],
    defects: [
      { id: "DEF-01", type: "Quarter Panel Dent", confidence: 96.4, color: "#F59E0B", severity: "CRITICAL" },
      { id: "DEF-02", type: "Bumper Surface Scratch", confidence: 98.2, color: "#EF4444", severity: "HIGH" },
      { id: "DEF-03", type: "Door Paint Scuff", confidence: 92.5, color: "#38BDF8", severity: "MEDIUM" },
      { id: "DEF-04", type: "Windshield Micro Crack", confidence: 89.8, color: "#A855F7", severity: "HIGH" }
    ]
  }
};
