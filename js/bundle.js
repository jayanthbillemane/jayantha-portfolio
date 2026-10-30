// ==========================================
// SOURCE: js\data\resumeData.js
// ==========================================
/**
 * Jayantha BS - Official Executive Resume Data
 * Senior Software Engineer • AI Platforms, Multi-Agent Runtimes & Backend Systems
 * Bengaluru, India • jayanthbillemane@gmail.com • +91 7847010071 • linkedin.com/in/jayanth-billemane-a95b68253
 */

const resumeData = {
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


// ==========================================
// SOURCE: js\data\dagConfigs.js
// ==========================================
/**
 * DAG Configurations for Interactive Visual Pipelines
 * Mode 1: Agent Runtime DAG (LangGraph, FastAPI, Qdrant, Sandbox, Guardrails)
 * Mode 3: Veeva & AIFA Pipeline DAG (Veeva PromoMats, AIFA Compliance, SmPC, Salesforce)
 */

const dagConfigs = {
  // ==========================================
  // MODE 1: AGENT RUNTIME DAG
  // ==========================================
  agentRuntime: {
    id: "agent-runtime-pipeline",
    title: "Multi-Agent Async Orchestration Runtime",
    nodes: [
      {
        id: "node-ingress",
        label: "FastAPI Ingress Gateway",
        sublabel: "Async Router & JWT Validator",
        category: "ingress",
        icon: "globe",
        x: 60,
        y: 220,
        width: 190,
        height: 84,
        status: "idle",
        metrics: { latency: "4.2ms", status: "200 OK", concurrency: "142 conn" },
        payload: {
          endpoint: "POST /v1/chat/completions/agentic",
          headers: {
            "Host": "api.runtime.internal:8000",
            "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9...",
            "X-Request-ID": "req_88f92a11-5d9c-4e8b-b8f2",
            "X-Client-Version": "py-client/2.4.1",
            "Content-Type": "application/json"
          },
          body: {
            query: "Analyze oncology trial NCT04812344 progression-free survival hazard ratio and generate audited clinical summary",
            session_id: "sess_prod_099142",
            temperature: 0.2,
            max_iterations: 8,
            tools_enabled: ["qdrant_hybrid_search", "python_repl_sandbox"]
          }
        },
        code: `from fastapi import FastAPI, Depends, Security, HTTPException\nfrom fastapi.security import HTTPBearer, HTTPAuthorizationCredentials\nimport asyncio\n\napp = FastAPI(title="Agentic Runtime Gateway", version="2.4.0")\nsecurity = HTTPBearer()\n\n@app.post("/v1/chat/completions/agentic")\nasync def route_agent_execution(\n    payload: AgentRequest,\n    credentials: HTTPAuthorizationCredentials = Security(security)\n):\n    token_claims = await verify_jwt_token(credentials.credentials)\n    request_ctx = ExecutionContext(\n        request_id=payload.request_id,\n        user_id=token_claims["sub"],\n        tenant=token_claims.get("tenant", "default")\n    )\n    # Check Redis Token-Bucket rate limit before dispatching\n    await rate_limiter.acquire(request_ctx.user_id, weight=1)\n    return await supervisor_orchestrator.dispatch(payload, request_ctx)`
      },
      {
        id: "node-ratelimit",
        label: "Redis Token Bucket",
        sublabel: "Distributed Leaky Bucket Rate Limiter",
        category: "middleware",
        icon: "shield",
        x: 290,
        y: 110,
        width: 190,
        height: 84,
        status: "idle",
        metrics: { latency: "0.8ms", status: "ALLOW", remaining: "488/500 req/min" },
        payload: {
          key: "ratelimit:user:usr_99214:window_60s",
          algorithm: "Distributed Redis Token-Bucket with Lua Script",
          tokens_consumed: 1,
          tokens_remaining: 488,
          replenish_rate: "8.33 tokens/sec",
          circuit_breaker: "CLOSED (Healthy)",
          redis_cluster_nodes: 3
        },
        code: `local key = KEYS[1]\nlocal limit = tonumber(ARGV[1])\nlocal current = tonumber(redis.call('get', key) or "0")\n\nif current + 1 > limit then\n    return 0 -- Throttled: HTTP 429 Too Many Requests\nelse\n    redis.call("INCRBY", key, 1)\n    if current == 0 then\n        redis.call("EXPIRE", key, 60)\n    end\n    return 1 -- Allowed\nend`
      },
      {
        id: "node-supervisor",
        label: "LangGraph Supervisor",
        sublabel: "StateGraph DAG Router & Circuit Breaker",
        category: "supervisor",
        icon: "git-merge",
        x: 520,
        y: 220,
        width: 190,
        height: 84,
        status: "idle",
        metrics: { latency: "14.6ms", recursion_depth: "1/8", active_agents: "2" },
        payload: {
          graph_state: {
            step_count: 1,
            max_depth: 8,
            current_intent: "CLINICAL_TRIAL_EVALUATION",
            agent_plan: ["qdrant_vector_rag", "sandbox_statistical_validation"],
            recursion_circuit_breaker: "ARMED",
            memory_context_tokens: 1420
          },
          supervisor_decision: "ROUTE_CONCURRENT",
          targets: ["node-rag", "node-sandbox"]
        },
        code: `from langgraph.graph import StateGraph, END\nfrom typing import TypedDict, Annotated, Sequence\n\nclass AgentRuntimeState(TypedDict):\n    messages: list[BaseMessage]\n    current_agent: str\n    iteration_count: int\n    retrieved_chunks: list[dict]\n    sandbox_output: dict\n    final_response: str\n\ndef supervisor_router(state: AgentRuntimeState) -> str:\n    if state["iteration_count"] >= 8:\n        # Circuit breaker trigger to prevent infinite LLM loops\n        return "circuit_breaker_intercept"\n    intent = classify_intent(state["messages"][-1])\n    if intent.needs_retrieval and not state["retrieved_chunks"]:\n        return "qdrant_vector_rag"\n    if intent.needs_computation and not state["sandbox_output"]:\n        return "sandbox_executor"\n    return "llm_synthesizer"`
      },
      {
        id: "node-rag",
        label: "Qdrant Vector Retriever",
        sublabel: "Hybrid Sparse/Dense Search + Citations",
        category: "rag",
        icon: "database",
        x: 750,
        y: 110,
        width: 190,
        height: 84,
        status: "idle",
        metrics: { latency: "22.4ms", top_k: 4, cosine_sim: "0.932" },
        payload: {
          collection: "clinical_trials_oncology_v3",
          vector_query: [0.021, -0.045, 0.892, "...", 0.119],
          retrieval_strategy: "Hybrid (Dense HNSW + Sparse BM25 / Reciprocal Rank Fusion)",
          matched_chunks: [
            {
              chunk_id: "chunk_doc_nct481_p4_c2",
              document: "EMERALD-301 Phase III Protocol",
              page: 4,
              section: "Section 3.2: Efficacy Endpoints",
              cosine_score: 0.932,
              bbox: [120, 240, 680, 310]
            },
            {
              chunk_id: "chunk_doc_nct481_p7_t1",
              document: "EMERALD-301 Table 2 Cohort B",
              page: 7,
              section: "Table 2: Kaplan-Meier Survival Analysis",
              cosine_score: 0.895,
              bbox: [80, 150, 720, 480]
            }
          ]
        },
        code: `async def query_hybrid_rag(collection_name: str, query_text: str, top_k: int = 4):\n    dense_vector = await embedding_client.aembed(query_text)\n    sparse_indices = sparse_encoder.encode_queries(query_text)\n    \n    search_results = await qdrant_client.query_points_async(\n        collection_name=collection_name,\n        query=dense_vector,\n        using="dense_cosine",\n        search_params=models.SearchParams(hnsw_ef=128, exact=False),\n        limit=top_k,\n        with_payload=True\n    )\n    return [\n        ChunkPayload(\n            chunk_id=hit.id,\n            score=hit.score,\n            content=hit.payload["text"],\n            metadata=hit.payload["metadata"]\n        ) for hit in search_results.points\n    ]`
      },
      {
        id: "node-sandbox",
        label: "Isolated Code Sandbox",
        sublabel: "eBPF/Docker Ephemeral Execution",
        category: "sandbox",
        icon: "terminal",
        x: 750,
        y: 330,
        width: 190,
        height: 84,
        status: "idle",
        metrics: { latency: "38.1ms", exit_code: "0", memory: "24.5 MB" },
        payload: {
          container_id: "sbx_run_1082aef",
          runtime: "gVisor (runsc) / eBPF Sandboxed Linux",
          security_profile: "SECCAMP_RESTRICTED (No Raw Sockets, Read-Only RootFS)",
          executed_code: "import numpy as np\n# Compute Kaplan-Meier survival hazard ratio confidence interval\nhr = 0.64; se = 0.12\nci_low = np.exp(np.log(hr) - 1.96 * se)\nci_high = np.exp(np.log(hr) + 1.96 * se)\nprint(f'{ci_low:.3f}-{ci_high:.3f}')",
          stdout: "0.506-0.810",
          stderr: ""
        },
        code: `class IsolatedExecutionSandbox:\n    def __init__(self, timeout_sec: float = 3.0):\n        self.timeout = timeout_sec\n        self.memory_limit = "128m"\n\n    async def execute_python_snippet(self, code_str: str) -> SandboxResult:\n        # Runs in ephemeral container with drop-all capabilities\n        container = await docker_client.containers.create(\n            image="sandbox-python-runner:alpine-3.18",\n            command=["python", "-c", code_str],\n            network_mode="none", # Strict airgap\n            mem_limit=self.memory_limit,\n            cap_drop=["ALL"],\n            pids_limit=32\n        )\n        await container.start()\n        logs = await container.logs(stdout=True, stderr=True)\n        await container.remove(force=True)\n        return SandboxResult(stdout=logs.stdout, exit_code=0)`
      },
      {
        id: "node-llm",
        label: "vLLM Inference Cluster",
        sublabel: "Continuous Batching & Token Streamer",
        category: "llm",
        icon: "cpu",
        x: 980,
        y: 220,
        width: 190,
        height: 84,
        status: "idle",
        metrics: { latency: "42.8ms TTFT", tokens_gen: "318 tok", throughput: "68 tok/s" },
        payload: {
          model: "meta-llama/Llama-3.3-70B-Instruct-AWQ",
          tensor_parallel_size: 4,
          kv_cache_usage: "48.2%",
          prompt_tokens: 894,
          completion_tokens: 318,
          temperature: 0.2,
          finish_reason: "stop",
          stream_mode: true
        },
        code: `from vllm import AsyncLLMEngine, SamplingParams\n\nsampling_params = SamplingParams(\n    temperature=0.2,\n    top_p=0.95,\n    max_tokens=512,\n    stop=["<|eot_id|>", "Human:"]\n)\n\nasync def stream_inference(prompt: str, request_id: str):\n    results_generator = vllm_engine.generate(prompt, sampling_params, request_id)\n    async for request_output in results_generator:\n        # Yield incremental token diff for SSE client stream\n        yield request_output.outputs[0].text`
      },
      {
        id: "node-guardrail",
        label: "AIFA & Safety Guardrail",
        sublabel: "Hallucination & Policy Firewall",
        category: "guardrail",
        icon: "alert-triangle",
        x: 1210,
        y: 220,
        width: 190,
        height: 84,
        status: "idle",
        metrics: { latency: "11.2ms", hallucination_score: "0.02", passed: true },
        payload: {
          checks_run: [
            { name: "PII / Patient De-identification Check", status: "PASSED" },
            { name: "Citation Grounding & Attribution Faithfulness", score: 0.98, status: "PASSED" },
            { name: "AIFA Regulatory SmPC Scope Verification", status: "PASSED" },
            { name: "Hallucination NLI Contradiction Detector", status: "PASSED" }
          ],
          intervention_required: false,
          audit_decision: "APPROVED_FOR_EGRESS"
        },
        code: `async def evaluate_guardrails(response_text: str, source_chunks: list[dict]) -> GuardrailAudit:\n    # Run parallel NLI verification between retrieved excerpts and generation\n    faithfulness_score = await nli_verifier.compute_grounding(response_text, source_chunks)\n    if faithfulness_score < 0.85:\n        raise HallucinationDetectedException("Generated content not fully grounded in clinical source chunks")\n        \n    # Check compliance with Italian AIFA & EMA guidelines\n    regulatory_flag = check_aifa_smpc_alignment(response_text)\n    if regulatory_flag.has_off_label_claim:\n        return GuardrailAudit(passed=False, reason="Unapproved off-label claim detected")\n        \n    return GuardrailAudit(passed=True, score=faithfulness_score)`
      },
      {
        id: "node-egress",
        label: "SSE Stream Egress",
        sublabel: "Server-Sent Events & Metrics Collector",
        category: "egress",
        icon: "send",
        x: 1440,
        y: 220,
        width: 190,
        height: 84,
        status: "idle",
        metrics: { latency: "1.2ms", total_time: "135.5ms", status: "200 STREAM" },
        payload: {
          protocol: "Server-Sent Events (SSE) text/event-stream",
          total_tokens: 1212,
          e2e_latency_ms: 135.5,
          otel_trace_id: "4bf92f3577b34da6a3ce929d0e0e4736",
          client_state: "COMPLETED"
        },
        code: `from fastapi.responses import StreamingResponse\n\nasync def sse_event_stream(response_generator, trace_id: str):\n    try:\n        async for chunk in response_generator:\n            yield f"data: {json.dumps({'chunk': chunk, 'trace_id': trace_id})}\\n\\n"\n        yield "data: [DONE]\\n\\n"\n    finally:\n        telemetry_collector.record_latency_histogram(trace_id)`
      }
    ],
    edges: [
      { id: "e1", source: "node-ingress", target: "node-ratelimit", label: "Inspect Token Bucket" },
      { id: "e2", source: "node-ratelimit", target: "node-supervisor", label: "Dispatch State" },
      { id: "e3", source: "node-supervisor", target: "node-rag", label: "Hybrid Search" },
      { id: "e4", source: "node-supervisor", target: "node-sandbox", label: "Exec Python Stat" },
      { id: "e5", source: "node-rag", target: "node-llm", label: "Inject Context Chunks" },
      { id: "e6", source: "node-sandbox", target: "node-llm", label: "Pass Numerical Output" },
      { id: "e7", source: "node-llm", target: "node-guardrail", label: "Stream Token Output" },
      { id: "e8", source: "node-guardrail", target: "node-egress", label: "Emit Verified Stream" },
      // Feedback loop edge when fault injected
      { id: "e-feedback", source: "node-guardrail", target: "node-supervisor", label: "Circuit Breaker Intercept", isFeedback: true }
    ]
  },

  // ==========================================
  // MODE 3: VEEVA & AIFA PIPELINE DAG
  // ==========================================
  veevaAifa: {
    id: "veeva-aifa-compliance-pipeline",
    title: "Pharma Enterprise Veeva -> AIFA Regulatory -> Salesforce Bridge",
    nodes: [
      {
        id: "v-webhook",
        label: "Veeva PromoMats Ingestion",
        sublabel: "Vault Digital Asset Webhook Event",
        category: "ingress",
        icon: "box",
        x: 60,
        y: 220,
        width: 190,
        height: 84,
        status: "idle",
        metrics: { latency: "12ms", asset_id: "VV-DOC-908234", format: "PDF + Metadata" },
        payload: {
          vault_event: "DOCUMENT_VERSION_STAGED",
          asset_metadata: {
            vault_document_id: "VV-DOC-908234-IT",
            product_name: "OncoXenor 50mg (palbociclib)",
            target_country: "Italy (AIFA Jurisdiction)",
            intended_audience: "HCP (Health Care Professionals)",
            document_type: "Promotional E-Detailer & Leave-Behind Brochure"
          }
        },
        code: `async def handle_veeva_promomats_webhook(request: Request):\n    payload = await request.json()\n    verify_veeva_signature(request.headers, payload)\n    \n    asset_id = payload["document_id"]\n    # Stream binary digital asset from Veeva Vault API using OAuth2\n    pdf_stream = await veeva_client.download_rendition(asset_id, rendition="preview_pdf")\n    return await pipeline_orchestrator.start_compliance_job(asset_id, pdf_stream)`
      },
      {
        id: "v-ocr",
        label: "Multi-Modal LayoutLM OCR",
        sublabel: "Visual Chunking & Bounding Boxes",
        category: "ocr",
        icon: "scan",
        x: 290,
        y: 220,
        width: 190,
        height: 84,
        status: "idle",
        metrics: { latency: "88ms", pages: 6, extracted_claims: 14 },
        payload: {
          ocr_engine: "LayoutLMv3 Multi-Modal Spatial Parser",
          extracted_claims_count: 14,
          detected_elements: [
            { type: "Headlines", count: 4 },
            { type: "Statistical Graphs & Tables", count: 3 },
            { type: "Mandatory Black-Box Safety Warning", count: 1 },
            { type: "Footnote SmPC Reference Tags", count: 6 }
          ]
        },
        code: `async def extract_layout_and_claims(pdf_stream: bytes) -> ExtractedDocument:\n    parsed_doc = await layout_parser.extract_document_structure(\n        pdf_stream,\n        extract_bounding_boxes=True,\n        identify_tables=True\n    )\n    # Classify claims: Efficacy, Tolerability, Comparison, Indication\n    claims = claim_classifier.filter_therapeutic_assertions(parsed_doc)\n    return ExtractedDocument(claims=claims, layout=parsed_doc.layout)`
      },
      {
        id: "v-claim-decomposer",
        label: "Claim Decomposer Agent",
        sublabel: "Atomic Assertion Disaggregation",
        category: "agent",
        icon: "layers",
        x: 520,
        y: 220,
        width: 190,
        height: 84,
        status: "idle",
        metrics: { latency: "34ms", atomic_claims: 22, confidence: "99.1%" },
        payload: {
          decomposed_assertions: [
            {
              id: "CLAIM-IT-01",
              text: "OncoXenor demonstrates superior progression-free survival in metastatic HER2-low breast cancer.",
              claim_type: "EFFICACY_INDICATION",
              target_sm_pc_section: "4.1 Therapeutic Indications"
            },
            {
              id: "CLAIM-IT-02",
              text: "Grade 3 neutropenia was observed in 62% of patients with reversible dose interruption.",
              claim_type: "SAFETY_ADVERSE_EVENT",
              target_sm_pc_section: "4.8 Undesirable Effects"
            }
          ]
        },
        code: `class ClaimDecomposerAgent:\n    async def decompose(self, raw_claims: list[str]) -> list[AtomicClaim]:\n        prompt = CLAIM_DECOMPOSITION_PROMPT.format(claims=raw_claims)\n        response = await structured_llm.generate(prompt, schema=AtomicClaimBatch)\n        return response.atomic_claims`
      },
      {
        id: "v-aifa-rules",
        label: "AIFA Regulatory Validator",
        sublabel: "D.Lgs. 219/06 & EMA Advertising Directives",
        category: "rules",
        icon: "scale",
        x: 750,
        y: 110,
        width: 190,
        height: 84,
        status: "idle",
        metrics: { latency: "26ms", rules_checked: 18, violations: 0 },
        payload: {
          regulatory_body: "AIFA (Agenzia Italiana del Farmaco)",
          decree: "Decreto Legislativo 24 aprile 2006, n. 219 (Art. 119 - Pubblicità presso i medici)",
          rule_evaluations: [
            {
              rule_id: "AIFA-ART-119-PAR1",
              name: "Strict SmPC Indication Adherence",
              description: "Information must strictly correspond to the authorized summary of product characteristics",
              status: "COMPLIANT"
            },
            {
              rule_id: "AIFA-ART-119-PAR3",
              name: "Mandatory Posology & Pricing Disclosure",
              description: "Must state class of provision, packaging, and ex-factory price",
              status: "COMPLIANT"
            },
            {
              rule_id: "AIFA-ART-119-FAIR-BALANCE",
              name: "Risk vs Benefit Fair Balance",
              description: "Font size and prominent contrast for adverse effects must match efficacy claims",
              status: "COMPLIANT"
            }
          ]
        },
        code: `def evaluate_aifa_compliance(claim: AtomicClaim, smpc: SmPCDatabase) -> AIFAComplianceResult:\n    # Verify Italian AIFA Article 119 decree requirements\n    if not smpc.is_approved_indication(claim.disease_stage, claim.biomarker_status):\n        return AIFAComplianceResult(\n            status="VIOLATION",\n            decree_clause="AIFA D.Lgs. 219/06 Art. 119(1)",\n            severity="CRITICAL_BLOCKING",\n            message=f"Claim '{claim.text}' exceeds approved SmPC Section 4.1 indication"\n        )\n    return AIFAComplianceResult(status="PASSED")`
      },
      {
        id: "v-smpc-verifier",
        label: "SmPC Truth Engine",
        sublabel: "EMA / AIFA Authorized Monograph Matching",
        category: "verifier",
        icon: "check-circle-2",
        x: 750,
        y: 330,
        width: 190,
        height: 84,
        status: "idle",
        metrics: { latency: "31ms", smpc_version: "v4.2-IT", match_score: "0.99" },
        payload: {
          smpc_auth_code: "AIC_049102931/M",
          authorized_indication: "Treatment of HR-positive, HER2-negative locally advanced or metastatic breast cancer in combination with an aromatase inhibitor",
          contradiction_detected: false,
          black_box_warning_included: true
        },
        code: `async def verify_claim_against_smpc(claim: AtomicClaim, authorized_monograph: Monograph):\n    alignment = await nli_embedder.cross_validate(\n        premise=authorized_monograph.section_4_1,\n        hypothesis=claim.text\n    )\n    return {\n        "entailment": alignment.entailment_prob,\n        "contradiction": alignment.contradiction_prob,\n        "neutral": alignment.neutral_prob\n    }`
      },
      {
        id: "v-decision-gate",
        label: "Compliance Arbiter Gate",
        sublabel: "Automated Sign-Off or HITL Escalation",
        category: "decision",
        icon: "git-branch",
        x: 980,
        y: 220,
        width: 190,
        height: 84,
        status: "idle",
        metrics: { latency: "6ms", decision: "AUTOMATED_APPROVAL", hitl: false },
        payload: {
          final_verdict: "APPROVED",
          regulatory_risk_score: 0.01,
          hitl_escalation_needed: false,
          medical_director_notification: "SENT (INFORMATIONAL)",
          action: "PROCEED_TO_DISTRIBUTED_SYNC"
        },
        code: `def compliance_decision_gate(aifa_result: AIFAComplianceResult, smpc_result: dict) -> str:\n    if aifa_result.status == "VIOLATION" or smpc_result["contradiction"] > 0.05:\n        # Immediate regulatory lock & Medical Director escalation\n        trigger_hitl_escalation(\n            severity="HIGH",\n            queue="Medical_Director_Regulatory_Audit",\n            reasons=[aifa_result.message]\n        )\n        return "REJECTED_REGULATORY_HOLD"\n    return "AUTOMATED_APPROVAL"`
      },
      {
        id: "v-audit-trail",
        label: "21 CFR Part 11 Audit Trail",
        sublabel: "Cryptographic Immutable Ledger",
        category: "audit",
        icon: "lock",
        x: 1210,
        y: 110,
        width: 190,
        height: 84,
        status: "idle",
        metrics: { latency: "9ms", hash: "sha256:7a9f...e102", ledger: "COMMITTED" },
        payload: {
          cfr_compliance: "21 CFR Part 11 & EU Annex 11 Validated",
          record_hash: "sha256:7a9f190bc412e879a951c3d9a1029ebf44a8",
          timestamp_utc: "2026-10-30T14:16:17Z",
          operator: "AI_REGULATORY_SUPERVISOR_V2",
          electronic_signature: "PKCS#7 Signed with Enterprise Vault HSM"
        },
        code: `def commit_cfr11_audit_record(audit_event: AuditEvent) -> str:\n    canonical_json = json.dumps(audit_event.dict(), sort_keys=True)\n    hsm_signature = hsm_signer.sign_sha256(canonical_json.encode('utf-8'))\n    db_session.execute(\n        insert(ComplianceAuditLedger).values(\n            event_id=audit_event.id,\n            canonical_payload=canonical_json,\n            signature=hsm_signature,\n            verified_timestamp=datetime.utcnow()\n        )\n    )\n    return hsm_signature`
      },
      {
        id: "v-salesforce-sync",
        label: "Salesforce & Veeva Vault Sync",
        sublabel: "Bidirectional Transactional Replication",
        category: "egress",
        icon: "refresh-cw",
        x: 1210,
        y: 330,
        width: 190,
        height: 84,
        status: "idle",
        metrics: { latency: "44ms", status: "SYNCED", crm_status: "ACTIVE_IN_FIELD" },
        payload: {
          veeva_status: "Status updated to 'Approved for Distribution'",
          salesforce_health_cloud: {
            content_asset_id: "SF-MKT-884102-IT",
            approved_reps_enabled: 84,
            territory: "Italy - Region Lombardia / Lazio",
            disclaimer_watermark: "AIFA Deposit No. 04812/2026"
          }
        },
        code: `async def sync_approved_collateral(asset_id: str, compliance_token: str):\n    # Update Veeva Vault document status\n    await veeva_client.update_doc_status(asset_id, status="Approved_for_Distribution")\n    \n    # Sync to Salesforce Health Cloud for field medical reps\n    sf_record = await sf_client.upsert_content_asset(\n        vault_id=asset_id,\n        compliance_token=compliance_token,\n        publish_date=datetime.utcnow()\n    )\n    return sf_record`
      }
    ],
    edges: [
      { id: "ve1", source: "v-webhook", target: "v-ocr", label: "Stream PDF Rendition" },
      { id: "ve2", source: "v-ocr", target: "v-claim-decomposer", label: "Parsed Layout Blocks" },
      { id: "ve3", source: "v-claim-decomposer", target: "v-aifa-rules", label: "Verify AIFA D.Lgs 219" },
      { id: "ve4", source: "v-claim-decomposer", target: "v-smpc-verifier", label: "Check SmPC Indication" },
      { id: "ve5", source: "v-aifa-rules", target: "v-decision-gate", label: "Regulatory Assessment" },
      { id: "ve6", source: "v-smpc-verifier", target: "v-decision-gate", label: "Contradiction Index" },
      { id: "ve7", source: "v-decision-gate", target: "v-audit-trail", label: "Immutable CFR11 Log" },
      { id: "ve8", source: "v-decision-gate", target: "v-salesforce-sync", label: "Approved Rep Push" }
    ]
  }
};


// ==========================================
// SOURCE: js\data\clinicalDocData.js
// ==========================================
/**
 * Clinical Trial Protocol & Grounded Citation Data
 * Powers Mode 2: Citation RAG Lab (Document Grounding & Attribution Engine)
 */

const clinicalDocData = {
  documentMeta: {
    title: "Phase III Multicenter Study: Efficacy & Safety Evaluation of BNT-412 in Refractory Solid Tumors",
    protocolId: "EMERALD-301 (NCT04812344)",
    sponsor: "BioNexus Therapeutics & Global Oncology Consortium",
    phase: "Phase III Double-Blind Randomized Controlled Trial",
    date: "August 2026",
    status: "FINAL REGULATORY SUBMISSION"
  },

  queries: [
    {
      id: "query-pfs",
      title: "Primary Endpoint: Progression-Free Survival (Cohort B)",
      question: "What was the progression-free survival (PFS) hazard ratio and median duration in Cohort B compared to control?",
      generatedAnswer: `In the randomized Phase III EMERALD-301 trial, Cohort B patients receiving the BNT-412 combination therapy demonstrated a statistically significant improvement in progression-free survival (PFS) compared to the standard-of-care control arm. The median PFS reached 14.8 months (95% CI: 13.1–16.4) in the BNT-412 arm versus 8.2 months (95% CI: 7.1–9.4) in the control group <span class="citation-pill" data-chunk-id="chunk-pfs-1" data-page="4" data-bbox="bbox-pfs-1">[Doc 1, p.4, §3.2]</span>. This corresponds to an unstratified hazard ratio (HR) of 0.64 (95% CI: 0.51–0.81, stratified log-rank p < 0.0001), representing a 36% relative reduction in the risk of disease progression or mortality <span class="citation-pill" data-chunk-id="chunk-pfs-2" data-page="4" data-bbox="bbox-pfs-2">[Table 3.4 Cohort B]</span>. Subgroup analysis confirmed consistent PFS benefit across PD-L1 TPS strata (>1% vs <1%) and prior platinum resistance history <span class="citation-pill" data-chunk-id="chunk-pfs-3" data-page="4" data-bbox="bbox-pfs-3">[Doc 1, p.4, §3.2.4]</span>.`,
      citations: [
        {
          chunkId: "chunk-pfs-1",
          bboxId: "bbox-pfs-1",
          page: 4,
          label: "Doc 1, p.4, §3.2",
          section: "Section 3.2 Primary Efficacy Outcomes",
          cosineScore: 0.942,
          retrievalLatency: "18.4ms",
          tokens: 142,
          excerpt: "Patients randomized to Cohort B receiving BNT-412 exhibited a median progression-free survival (mPFS) of 14.8 months (95% CI: 13.1-16.4) versus 8.2 months (95% CI: 7.1-9.4) in the comparator control cohort."
        },
        {
          chunkId: "chunk-pfs-2",
          bboxId: "bbox-pfs-2",
          page: 4,
          label: "Table 3.4 Cohort B",
          section: "Table 3.4: Kaplan-Meier Survival Analysis",
          cosineScore: 0.918,
          retrievalLatency: "21.0ms",
          tokens: 98,
          excerpt: "Hazard Ratio (HR) = 0.64 (95% Confidence Interval: 0.51 - 0.81); Stratified Log-Rank p-value < 0.0001. Relative hazard reduction: 36.0%."
        },
        {
          chunkId: "chunk-pfs-3",
          bboxId: "bbox-pfs-3",
          page: 4,
          label: "Doc 1, p.4, §3.2.4",
          section: "Section 3.2.4 Biomarker Subgroup Interaction",
          cosineScore: 0.875,
          retrievalLatency: "24.6ms",
          tokens: 110,
          excerpt: "Forest plot interaction test indicated persistent PFS benefit across PD-L1 expression levels (TPS >= 50% HR: 0.59; TPS 1-49% HR: 0.66; TPS < 1% HR: 0.71; p-interaction = 0.42)."
        }
      ]
    },
    {
      id: "query-safety",
      title: "Safety Profile: Grade 3/4 Adverse Events & Toxicity",
      question: "Summarize the incidence of Grade 3/4 treatment-emergent adverse events and protocol dose interruption guidelines.",
      generatedAnswer: `Treatment with BNT-412 was generally well-tolerated with an adverse event profile consistent with target pathway inhibition. Grade 3 or 4 treatment-emergent adverse events (TEAEs) occurred in 41.2% of patients in the active investigational arm compared to 28.5% in the control cohort <span class="citation-pill" data-chunk-id="chunk-safe-1" data-page="6" data-bbox="bbox-safe-1">[Doc 1, p.6, §5.1]</span>. The most frequent Grade 3/4 events were reversible neutropenia (24.1%), fatigue (8.3%), and elevated AST/ALT transaminases (6.5%) <span class="citation-pill" data-chunk-id="chunk-safe-2" data-page="6" data-bbox="bbox-safe-2">[Table 5.2 Safety Summary]</span>. In cases of Grade 3 febrile neutropenia, the protocol mandates immediate dose withholding until absolute neutrophil count (ANC) recovers to >= 1,000/mcL, followed by a one-level dose reduction to 40mg daily <span class="citation-pill" data-chunk-id="chunk-safe-3" data-page="6" data-bbox="bbox-safe-3">[Doc 1, p.6, §5.3.1]</span>. Permanent treatment discontinuation due to drug-related toxicity was reported in only 3.8% of patients.`,
      citations: [
        {
          chunkId: "chunk-safe-1",
          bboxId: "bbox-safe-1",
          page: 6,
          label: "Doc 1, p.6, §5.1",
          section: "Section 5.1 Safety and Tolerability Overview",
          cosineScore: 0.938,
          retrievalLatency: "19.2ms",
          tokens: 125,
          excerpt: "Grade 3 or higher treatment-emergent adverse events (TEAEs) were documented in 41.2% (n=168/408) of BNT-412 subjects versus 28.5% (n=116/407) in the standard comparator arm."
        },
        {
          chunkId: "chunk-safe-2",
          bboxId: "bbox-safe-2",
          page: 6,
          label: "Table 5.2 Safety Summary",
          section: "Table 5.2: Incidence of Common Laboratory Abnormalities",
          cosineScore: 0.904,
          retrievalLatency: "22.5ms",
          tokens: 154,
          excerpt: "Neutropenia Gr 3/4: 24.1% (active) vs 4.2% (control). Asthenia/Fatigue Gr 3: 8.3% vs 6.1%. Hepatic transaminase elevations (AST/ALT > 5x ULN): 6.5% vs 2.1%."
        },
        {
          chunkId: "chunk-safe-3",
          bboxId: "bbox-safe-3",
          page: 6,
          label: "Doc 1, p.6, §5.3.1",
          section: "Section 5.3.1 Dose Modification & Withholding Protocol",
          cosineScore: 0.889,
          retrievalLatency: "20.1ms",
          tokens: 130,
          excerpt: "Upon detection of Grade 3 hematologic toxicity, dosing must be suspended immediately. Re-initiation at reduced dose (Dose Level -1: 40 mg PO qd) is permitted only after ANC recovery to >= 1,000/uL and platelets >= 75,000/uL."
        }
      ]
    },
    {
      id: "query-biomarker",
      title: "Inclusion Criteria: Biomarker & Prior Immunotherapy",
      question: "What are the biomarker inclusion criteria regarding PD-L1 expression and prior checkpoint inhibitor regimens?",
      generatedAnswer: `Eligible subjects must possess histologically confirmed locally advanced unresectable or metastatic carcinoma with documented disease progression following 1 to 3 prior systemic regimens <span class="citation-pill" data-chunk-id="chunk-bio-1" data-page="2" data-bbox="bbox-bio-1">[Doc 1, p.2, §2.1]</span>. Tumor tissue must exhibit confirmed PD-L1 Tumor Proportion Score (TPS) >= 1% as determined by the central Dako 22C3 IHC pharmDx companion diagnostic assay <span class="citation-pill" data-chunk-id="chunk-bio-2" data-page="2" data-bbox="bbox-bio-2">[Doc 1, p.2, §2.2]</span>. Prior exposure to anti-PD-1 or anti-PD-L1 monoclonal antibodies is permitted provided the patient demonstrated a documented primary treatment response of >= 12 weeks before disease recurrence, and a minimum 28-day washout period has elapsed prior to Cycle 1 Day 1 <span class="citation-pill" data-chunk-id="chunk-bio-3" data-page="2" data-bbox="bbox-bio-3">[Doc 1, p.2, §2.3.4]</span>.`,
      citations: [
        {
          chunkId: "chunk-bio-1",
          bboxId: "bbox-bio-1",
          page: 2,
          label: "Doc 1, p.2, §2.1",
          section: "Section 2.1 Study Population & Disease Criteria",
          cosineScore: 0.951,
          retrievalLatency: "17.9ms",
          tokens: 118,
          excerpt: "Adults aged >= 18 years with histologically or cytologically confirmed metastatic or unresectable locally advanced solid malignancy refractory to standard chemotherapeutic lines (1 to 3 prior lines)."
        },
        {
          chunkId: "chunk-bio-2",
          bboxId: "bbox-bio-2",
          page: 2,
          label: "Doc 1, p.2, §2.2",
          section: "Section 2.2 Companion Diagnostic Requirements",
          cosineScore: 0.927,
          retrievalLatency: "21.3ms",
          tokens: 102,
          excerpt: "Central laboratory confirmation of PD-L1 expression (TPS >= 1%) on archival or fresh core needle biopsy using the FDA-approved Dako 22C3 pharmDx assay."
        },
        {
          chunkId: "chunk-bio-3",
          bboxId: "bbox-bio-3",
          page: 2,
          label: "Doc 1, p.2, §2.3.4",
          section: "Section 2.3.4 Prior Immunotherapy Washout Rules",
          cosineScore: 0.892,
          retrievalLatency: "23.4ms",
          tokens: 140,
          excerpt: "Prior anti-PD-(L)1 therapy allowed if best overall response was >= stable disease for at least 12 weeks. Washout window of at least 28 days or 5 drug half-lives is mandatory prior to randomization."
        }
      ]
    }
  ],

  // Mock pages containing realistic formatted clinical text and bounding box positions
  pages: {
    2: {
      pageNumber: 2,
      sectionTitle: "PROTOCOL SECTION 2: PATIENT ELIGIBILITY & INCLUSION CRITERIA",
      lines: [
        { type: "header", text: "2. PATIENT ELIGIBILITY AND STRATIFICATION" },
        { type: "meta", text: "Protocol EMERALD-301 | Revision 4.2 | Confidential | Page 2 of 28" },
        {
          type: "paragraph",
          id: "bbox-bio-1",
          text: "2.1 Target Patient Population: Candidates eligible for enrollment must be adult male or female patients (>= 18 years of age) with histologically or cytologically confirmed metastatic or unresectable locally advanced solid malignancy refractory to standard chemotherapeutic lines (1 to 3 prior systemic regimens). Measurable lesion presence per RECIST v1.1 guidelines is mandatory at baseline radiological screening.",
          bbox: { top: 18, left: 6, width: 88, height: 16 }
        },
        {
          type: "paragraph",
          id: "bbox-bio-2",
          text: "2.2 Biomarker & Diagnostic Qualification: Submission of formal tissue blocks or fresh core-biopsy specimens is required. Central laboratory confirmation of PD-L1 expression (TPS >= 1%) on archival or fresh core needle biopsy using the FDA-approved Dako 22C3 pharmDx assay must be documented prior to randomization. Patients harboring known EGFR activating mutations or ALK translocations must have received prior targeted TKI therapy.",
          bbox: { top: 38, left: 6, width: 88, height: 18 }
        },
        {
          type: "paragraph",
          id: "bbox-bio-3",
          text: "2.3.4 Prior Immunotherapy Washout Guidelines: Prior anti-PD-(L)1 therapy is allowed if best overall response was >= stable disease for at least 12 weeks. A mandatory washout window of at least 28 days or 5 drug elimination half-lives (whichever is longer) must elapse between the last dose of immunotherapy and Cycle 1 Day 1. Full resolution of all immune-related adverse events to Grade <= 1 is required.",
          bbox: { top: 60, left: 6, width: 88, height: 18 }
        },
        {
          type: "footer",
          text: "BNT-412 Global Clinical Protocol | BioNexus Therapeutics | Registered with AIFA and EMA Under EudraCT 2024-001928-11"
        }
      ]
    },
    4: {
      pageNumber: 4,
      sectionTitle: "PROTOCOL SECTION 3: EFFICACY ANALYSIS & SURVIVAL OUTCOMES",
      lines: [
        { type: "header", text: "3. EFFICACY ASSESSMENTS: PRIMARY ENDPOINT" },
        { type: "meta", text: "Protocol EMERALD-301 | Revision 4.2 | Confidential | Page 4 of 28" },
        {
          type: "paragraph",
          id: "bbox-pfs-1",
          text: "3.2 Primary Efficacy Outcomes: At the pre-specified interim analysis cutoff, patients randomized to Cohort B receiving BNT-412 exhibited a median progression-free survival (mPFS) of 14.8 months (95% CI: 13.1–16.4) versus 8.2 months (95% CI: 7.1–9.4) in the comparator control cohort. The progression-free survival rate at 12 months was 58.4% in the investigational arm compared with 31.2% in the control arm.",
          bbox: { top: 16, left: 6, width: 88, height: 17 }
        },
        {
          type: "table",
          id: "bbox-pfs-2",
          title: "Table 3.4: Kaplan-Meier Survival Analysis in Cohort B (Full Analysis Set)",
          headers: ["Clinical Endpoint", "BNT-412 Arm (N=408)", "Control Arm (N=407)", "Hazard Ratio (95% CI)", "Stratified Log-Rank p"],
          rows: [
            ["Median PFS (months)", "14.8 [13.1, 16.4]", "8.2 [7.1, 9.4]", "0.64 [0.51, 0.81]", "p < 0.0001"],
            ["12-Month PFS Rate", "58.4%", "31.2%", "—", "p < 0.0001"],
            ["Confirmed ORR (%)", "44.6%", "22.8%", "Odds Ratio: 2.74", "p < 0.001"]
          ],
          bbox: { top: 37, left: 6, width: 88, height: 24 }
        },
        {
          type: "paragraph",
          id: "bbox-pfs-3",
          text: "3.2.4 Biomarker Subgroup Interaction: Forest plot interaction test indicated persistent PFS benefit across PD-L1 expression levels (TPS >= 50% HR: 0.59; TPS 1-49% HR: 0.66; TPS < 1% HR: 0.71; p-interaction = 0.42). No significant treatment-by-subgroup interaction was observed for age, geographic region, or prior line count.",
          bbox: { top: 65, left: 6, width: 88, height: 16 }
        },
        {
          type: "footer",
          text: "BNT-412 Global Clinical Protocol | BioNexus Therapeutics | Data independently verified by Blinded Independent Central Review (BICR)"
        }
      ]
    },
    6: {
      pageNumber: 6,
      sectionTitle: "PROTOCOL SECTION 5: SAFETY PROFILE & TOXICITY MANAGEMENT",
      lines: [
        { type: "header", text: "5. SAFETY & TOXICITY INTERVENTION PROTOCOL" },
        { type: "meta", text: "Protocol EMERALD-301 | Revision 4.2 | Confidential | Page 6 of 28" },
        {
          type: "paragraph",
          id: "bbox-safe-1",
          text: "5.1 Safety and Tolerability Overview: Grade 3 or higher treatment-emergent adverse events (TEAEs) were documented in 41.2% (n=168/408) of BNT-412 subjects versus 28.5% (n=116/407) in the standard comparator arm. Serious adverse events (SAEs) occurred in 14.2% of active arm subjects. Drug discontinuation due to adverse events occurred in 3.8% of patients.",
          bbox: { top: 16, left: 6, width: 88, height: 16 }
        },
        {
          type: "table",
          id: "bbox-safe-2",
          title: "Table 5.2: Incidence of Treatment-Emergent Adverse Events (>= 5% Frequency)",
          headers: ["Adverse Event Category", "BNT-412 All Grades", "BNT-412 Gr 3/4", "Control All Grades", "Control Gr 3/4"],
          rows: [
            ["Neutropenia / Leukopenia", "68.4%", "24.1%", "18.2%", "4.2%"],
            ["Asthenia / Fatigue", "42.1%", "8.3%", "38.5%", "6.1%"],
            ["Elevated Hepatic Transaminases", "28.3%", "6.5%", "14.1%", "2.1%"],
            ["Nausea & Vomiting", "22.5%", "1.8%", "20.1%", "1.2%"]
          ],
          bbox: { top: 36, left: 6, width: 88, height: 26 }
        },
        {
          type: "paragraph",
          id: "bbox-safe-3",
          text: "5.3.1 Dose Modification & Withholding Protocol: Upon detection of Grade 3 hematologic toxicity, dosing must be suspended immediately. Re-initiation at reduced dose (Dose Level -1: 40 mg PO qd) is permitted only after ANC recovery to >= 1,000/uL and platelets >= 75,000/uL. Recurrence of Grade 4 toxicity mandates permanent discontinuation from the study protocol.",
          bbox: { top: 66, left: 6, width: 88, height: 16 }
        },
        {
          type: "footer",
          text: "BNT-412 Global Clinical Protocol | BioNexus Therapeutics | Safety review conducted quarterly by Independent Data Monitoring Committee (IDMC)"
        }
      ]
    }
  }
};


// ==========================================
// SOURCE: js\state\store.js
// ==========================================
/**
 * Pub/Sub Reactive Store (Vanilla JS replacement for Zustand / Redux)
 * Manages centralized state across all modes, simulations, inspector, and telemetry.
 */

class ReactiveStore {
  constructor() {
    this.state = {
      // Current application mode
      activeMode: "agent-runtime", // 'agent-runtime' | 'rag-citation' | 'veeva-aifa' | 'k8s-otel' | 'resume'
      
      // Right Inspector state
      selectedNode: null,
      selectedInspectorTab: "payload", // 'state' | 'payload' | 'code' | 'metrics'
      
      // Simulation transport state
      simulation: {
        isRunning: false,
        isPaused: false,
        currentStep: 0,
        totalSteps: 8,
        speed: 1.0,
        faultFlags: {
          injectLoop: false,
          tokenThrottle: false,
          streamingMode: false,
          veevaOffLabel: false,
          veevaMissingWarning: false,
          k8sOomCrash: false
        }
      },

      // Telemetry Logs
      telemetryLogs: [
        {
          id: 1,
          timestamp: new Date().toLocaleTimeString(),
          level: "INFO",
          message: "Jayantha BS Architecture Console initialized.",
          details: "Kernel v2.4.0-edge | Runtime online | 5 sub-engines mounted."
        },
        {
          id: 2,
          timestamp: new Date().toLocaleTimeString(),
          level: "INFO",
          message: "FastAPI Gateway listening on :8000 (Async non-blocking event loop).",
          details: "Kubernetes HPA target: 70% CPU | Ready for distributed telemetry."
        }
      ],

      // Mode 2: Citation RAG state
      ragState: {
        activeQueryId: "query-pfs",
        activePage: 4,
        similarityThreshold: 0.85,
        selectedCitation: null,
        hoveredBboxId: null
      },

      // Mode 4: K8s & OTel state
      k8sState: {
        rps: 850,
        targetCpu: 70,
        currentCpu: 48,
        activePods: 2,
        maxPods: 8,
        chaosActive: false,
        selectedSpanId: "span-1"
      },

      // Mode 5: Edge CV state
      edgeCvState: {
        isRunning: true,
        fps: 15.0,
        confidenceThreshold: 85,
        frameBudgetMs: 66.67,
        actualLatencyMs: 58.4,
        detectedCount: 2
      }
    };

    this.listeners = new Set();
    this.keyListeners = new Map();
  }

  getState() {
    return this.state;
  }

  setState(partialState) {
    const prevState = { ...this.state };
    this.state = {
      ...this.state,
      ...partialState
    };

    // Notify global listeners
    this.listeners.forEach((listener) => {
      try {
        listener(this.state, prevState);
      } catch (err) {
        console.error("Store listener error:", err);
      }
    });

    // Notify specific key listeners
    Object.keys(partialState).forEach((key) => {
      if (this.keyListeners.has(key)) {
        this.keyListeners.get(key).forEach((cb) => {
          try {
            cb(this.state[key], prevState[key]);
          } catch (err) {
            console.error(`Store key listener error [${key}]:`, err);
          }
        });
      }
    });
  }

  subscribe(listener) {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }

  subscribeKey(key, listener) {
    if (!this.keyListeners.has(key)) {
      this.keyListeners.set(key, new Set());
    }
    this.keyListeners.get(key).add(listener);
    return () => {
      const set = this.keyListeners.get(key);
      if (set) set.delete(listener);
    };
  }

  // ==========================================
  // ACTION DISPATCHERS
  // ==========================================

  setMode(mode) {
    if (this.state.activeMode === mode) return;
    this.setState({ activeMode: mode });
    this.addLog("EXEC", `Switched mode to [${mode.toUpperCase()}]`, `Active sub-runtime changed.`);
  }

  selectNode(node) {
    this.setState({ selectedNode: node });
    if (node) {
      this.addLog("INFO", `Node selected: ${node.label}`, `Type: ${node.category || 'node'} | ID: ${node.id}`);
    }
  }

  setInspectorTab(tab) {
    this.setState({ selectedInspectorTab: tab });
  }

  setSimulationState(partialSim) {
    this.setState({
      simulation: {
        ...this.state.simulation,
        ...partialSim
      }
    });
  }

  toggleFaultFlag(flagName, value) {
    const currentFlags = this.state.simulation.faultFlags;
    const newFlags = {
      ...currentFlags,
      [flagName]: value !== undefined ? value : !currentFlags[flagName]
    };
    this.setState({
      simulation: {
        ...this.state.simulation,
        faultFlags: newFlags
      }
    });
    this.addLog(
      newFlags[flagName] ? "WARN" : "INFO",
      `Fault flag '${flagName}' is now ${newFlags[flagName] ? 'ENABLED' : 'DISABLED'}.`,
      "Dynamic chaos injection altered pipeline parameters."
    );
  }

  addLog(level, message, details = "") {
    const newLog = {
      id: Date.now() + Math.random().toString(36).substring(2, 6),
      timestamp: new Date().toLocaleTimeString(),
      level, // 'INFO' | 'WARN' | 'ERROR' | 'EXEC'
      message,
      details
    };

    const updatedLogs = [newLog, ...this.state.telemetryLogs.slice(0, 99)]; // keep latest 100
    this.setState({ telemetryLogs: updatedLogs });
  }

  clearLogs() {
    this.setState({ telemetryLogs: [] });
  }

  setRagQuery(queryId, page) {
    this.setState({
      ragState: {
        ...this.state.ragState,
        activeQueryId: queryId,
        activePage: page || this.state.ragState.activePage,
        selectedCitation: null
      }
    });
    this.addLog("EXEC", `Citation RAG switched query to: ${queryId}`, `Loaded associated clinical protocol groundings.`);
  }

  setRagPage(pageNum) {
    this.setState({
      ragState: {
        ...this.state.ragState,
        activePage: pageNum
      }
    });
  }

  setSelectedCitation(citation) {
    this.setState({
      ragState: {
        ...this.state.ragState,
        selectedCitation: citation
      }
    });
    if (citation) {
      this.addLog("INFO", `Citation grounded: [${citation.label}]`, `Cosine Similarity: ${citation.cosineScore} | Latency: ${citation.retrievalLatency}`);
    }
  }

  setHoveredBbox(bboxId) {
    this.setState({
      ragState: {
        ...this.state.ragState,
        hoveredBboxId: bboxId
      }
    });
  }

  setSimilarityThreshold(val) {
    this.setState({
      ragState: {
        ...this.state.ragState,
        similarityThreshold: val
      }
    });
  }

  setK8sRps(rps) {
    // Dynamic calculate target pods based on RPS
    // 500 RPS per pod capacity target
    const currentCpu = Math.min(98, Math.max(15, Math.round(15 + (rps / 5000) * 80)));
    const targetPods = Math.min(8, Math.max(1, Math.ceil(rps / 550)));
    
    this.setState({
      k8sState: {
        ...this.state.k8sState,
        rps,
        currentCpu,
        activePods: targetPods
      }
    });
  }

  setK8sSpan(spanId) {
    this.setState({
      k8sState: {
        ...this.state.k8sState,
        selectedSpanId: spanId
      }
    });
  }

  toggleK8sChaos() {
    const nextChaos = !this.state.k8sState.chaosActive;
    this.setState({
      k8sState: {
        ...this.state.k8sState,
        chaosActive: nextChaos
      }
    });
    if (nextChaos) {
      this.addLog("ERROR", "K8s Chaos: Injected OOMKilled event on pod agent-runtime-worker-7f9b8c-x2", "HPA controller initiating pod restart & replica reschedule.");
    } else {
      this.addLog("INFO", "K8s Chaos: Cluster auto-remediated pod failure.", "Pod returned to Running 1/1 state.");
    }
  }

  setEdgeCvState(partialEdge) {
    this.setState({
      edgeCvState: {
        ...this.state.edgeCvState,
        ...partialEdge
      }
    });
  }
}

const store = new ReactiveStore();


// ==========================================
// SOURCE: js\engine\svgGraphEngine.js
// ==========================================
/**
 * Interactive SVG Graph Engine
 * High-performance Vanilla JS + SVG cubic Bezier curve engine with glowing animated data packets.
 * Supports draggable HTML node cards overlaid on an interactive SVG layer.
 */

class SvgGraphEngine {
  constructor(options = {}) {
    this.container = null;
    this.config = null;
    this.nodesMap = new Map();
    this.edgesMap = new Map();
    this.packets = []; // Active animated packets
    this.animFrameId = null;
    this.onNodeSelect = options.onNodeSelect || (() => {});
    this.selectedNodeId = null;

    // Dragging state
    this.draggedNode = null;
    this.dragOffset = { x: 0, y: 0 };
    this.hasMoved = false;

    // Canvas panning/zoom state
    this.scale = 1.0;
    this.pan = { x: 0, y: 0 };
    this.isPanning = false;
    this.panStart = { x: 0, y: 0 };
  }

  mount(containerEl, config) {
    this.destroy();
    this.container = containerEl;
    this.config = JSON.parse(JSON.stringify(config)); // deep copy config
    this.container.innerHTML = "";
    this.container.classList.add("dag-viewport-container");

    // Create wrapper for panning & scaling
    this.wrapper = document.createElement("div");
    this.wrapper.className = "dag-scene-wrapper";
    this.container.appendChild(this.wrapper);

    // Create SVG Layer
    this.svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    this.svg.setAttribute("class", "dag-svg-layer");
    this.svg.setAttribute("width", "100%");
    this.svg.setAttribute("height", "100%");

    // SVG Defs (Gradients, Filters, Markers)
    this.svg.innerHTML = `
      <defs>
        <filter id="dag-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="dag-glow-lg" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="6" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <linearGradient id="edge-grad-default" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#38BDF8" stop-opacity="0.4" />
          <stop offset="100%" stop-color="#818CF8" stop-opacity="0.7" />
        </linearGradient>
        <linearGradient id="edge-grad-active" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#38BDF8" stop-opacity="0.9" />
          <stop offset="100%" stop-color="#A855F7" stop-opacity="0.9" />
        </linearGradient>
        <linearGradient id="edge-grad-feedback" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#EF4444" stop-opacity="0.7" />
          <stop offset="100%" stop-color="#F59E0B" stop-opacity="0.7" />
        </linearGradient>
      </defs>
      <g class="dag-edges-group"></g>
      <g class="dag-packets-group"></g>
    `;

    this.wrapper.appendChild(this.svg);
    this.edgesGroup = this.svg.querySelector(".dag-edges-group");
    this.packetsGroup = this.svg.querySelector(".dag-packets-group");

    // Create Nodes Layer (HTML Cards)
    this.nodesLayer = document.createElement("div");
    this.nodesLayer.className = "dag-nodes-layer";
    this.wrapper.appendChild(this.nodesLayer);

    // Initialize Nodes & Edges
    this.renderNodes();
    this.renderEdges();

    // Attach interaction listeners
    this.attachEventListeners();

    // Start packet animation loop
    this.startAnimationLoop();

    // Select first node by default if available
    if (this.config.nodes && this.config.nodes.length > 0) {
      this.selectNode(this.config.nodes[0].id);
    }
  }

  renderNodes() {
    this.nodesMap.clear();
    this.config.nodes.forEach((node) => {
      const card = document.createElement("div");
      card.className = `dag-node-card status-${node.status || "idle"} category-${node.category || "default"}`;
      card.id = node.id;
      card.style.transform = `translate3d(${node.x}px, ${node.y}px, 0)`;
      card.style.width = `${node.width || 190}px`;
      card.style.minHeight = `${node.height || 84}px`;

      card.innerHTML = `
        <div class="node-card-inner">
          <div class="node-card-header">
            <div class="node-badge node-cat-${node.category || 'default'}">
              <i data-lucide="${node.icon || 'box'}" class="node-icon"></i>
            </div>
            <div class="node-title-group">
              <div class="node-label">${node.label}</div>
              <div class="node-sublabel">${node.sublabel || ''}</div>
            </div>
            <div class="node-status-indicator"></div>
          </div>
          <div class="node-card-meta">
            <span class="meta-item"><i data-lucide="clock" class="meta-icon"></i> ${node.metrics?.latency || '0.0ms'}</span>
            <span class="meta-badge">${node.metrics?.status || node.category?.toUpperCase() || 'NODE'}</span>
          </div>
        </div>
      `;

      this.nodesLayer.appendChild(card);
      this.nodesMap.set(node.id, {
        data: node,
        element: card,
        x: node.x,
        y: node.y,
        width: node.width || 190,
        height: node.height || 84
      });
    });

    if (window.lucide) {
      window.lucide.createIcons({ root: this.nodesLayer });
    }
  }

  renderEdges() {
    this.edgesGroup.innerHTML = "";
    this.edgesMap.clear();

    this.config.edges.forEach((edge) => {
      const sourceNode = this.nodesMap.get(edge.source);
      const targetNode = this.nodesMap.get(edge.target);
      if (!sourceNode || !targetNode) return;

      const pathData = this.calculateBezierPath(sourceNode, targetNode, edge.isFeedback);

      // Background hit path
      const hitPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
      hitPath.setAttribute("d", pathData);
      hitPath.setAttribute("class", "dag-edge-hit-area");

      // Visual edge path
      const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
      path.setAttribute("d", pathData);
      path.setAttribute("class", `dag-edge-path ${edge.isFeedback ? 'is-feedback' : ''}`);
      path.setAttribute("id", `edge-path-${edge.id}`);
      path.setAttribute("stroke", edge.isFeedback ? "url(#edge-grad-feedback)" : "url(#edge-grad-default)");

      // Edge label (if present)
      let labelEl = null;
      if (edge.label) {
        labelEl = document.createElementNS("http://www.w3.org/2000/svg", "text");
        labelEl.setAttribute("class", "dag-edge-label");
        const centerPoint = this.getPathMidpoint(sourceNode, targetNode, edge.isFeedback);
        labelEl.setAttribute("x", centerPoint.x);
        labelEl.setAttribute("y", centerPoint.y - 7);
        labelEl.textContent = edge.label;
      }

      this.edgesGroup.appendChild(hitPath);
      this.edgesGroup.appendChild(path);
      if (labelEl) this.edgesGroup.appendChild(labelEl);

      this.edgesMap.set(edge.id, {
        data: edge,
        pathEl: path,
        hitEl: hitPath,
        labelEl,
        source: sourceNode,
        target: targetNode
      });
    });
  }

  calculateBezierPath(source, target, isFeedback = false) {
    const sRight = { x: source.x + source.width, y: source.y + source.height / 2 };
    const tLeft = { x: target.x, y: target.y + target.height / 2 };

    if (isFeedback) {
      // Loopback curve running above or below the node rows
      const sTop = { x: source.x + source.width / 2, y: source.y };
      const tTop = { x: target.x + target.width / 2, y: target.y };
      const arcHeight = Math.min(sTop.y, tTop.y) - 120;
      return `M ${sTop.x} ${sTop.y} C ${sTop.x} ${arcHeight}, ${tTop.x} ${arcHeight}, ${tTop.x} ${tTop.y}`;
    }

    const deltaX = Math.abs(tLeft.x - sRight.x);
    const curvature = Math.max(deltaX * 0.5, 40);

    const cp1x = sRight.x + curvature;
    const cp1y = sRight.y;
    const cp2x = tLeft.x - curvature;
    const cp2y = tLeft.y;

    return `M ${sRight.x} ${sRight.y} C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${tLeft.x} ${tLeft.y}`;
  }

  getPathMidpoint(source, target, isFeedback = false) {
    if (isFeedback) {
      const sTop = { x: source.x + source.width / 2, y: source.y };
      const tTop = { x: target.x + target.width / 2, y: target.y };
      const arcHeight = Math.min(sTop.y, tTop.y) - 120;
      return { x: (sTop.x + tTop.x) / 2, y: arcHeight + 15 };
    }
    const sRight = { x: source.x + source.width, y: source.y + source.height / 2 };
    const tLeft = { x: target.x, y: target.y + target.height / 2 };
    return {
      x: (sRight.x + tLeft.x) / 2,
      y: (sRight.y + tLeft.y) / 2
    };
  }

  updateEdgePaths() {
    this.edgesMap.forEach((edgeObj) => {
      const { data, pathEl, hitEl, labelEl, source, target } = edgeObj;
      const pathData = this.calculateBezierPath(source, target, data.isFeedback);
      pathEl.setAttribute("d", pathData);
      hitEl.setAttribute("d", pathData);

      if (labelEl) {
        const centerPoint = this.getPathMidpoint(source, target, data.isFeedback);
        labelEl.setAttribute("x", centerPoint.x);
        labelEl.setAttribute("y", centerPoint.y - 7);
      }
    });
  }

  selectNode(nodeId) {
    this.selectedNodeId = nodeId;
    const nodeObj = this.nodesMap.get(nodeId);

    // Update styling
    this.nodesMap.forEach((n, id) => {
      if (id === nodeId) {
        n.element.classList.add("is-selected");
      } else {
        n.element.classList.remove("is-selected");
      }
    });

    if (nodeObj) {
      this.onNodeSelect(nodeObj.data);
    }
  }

  setNodeStatus(nodeId, status, metricsUpdates = {}) {
    const nodeObj = this.nodesMap.get(nodeId);
    if (!nodeObj) return;

    nodeObj.data.status = status;
    if (metricsUpdates) {
      nodeObj.data.metrics = { ...nodeObj.data.metrics, ...metricsUpdates };
    }

    // Update classes
    nodeObj.element.className = `dag-node-card status-${status} category-${nodeObj.data.category || 'default'} ${this.selectedNodeId === nodeId ? 'is-selected' : ''}`;

    // Update metrics UI
    const latencyEl = nodeObj.element.querySelector(".meta-item");
    const statusEl = nodeObj.element.querySelector(".meta-badge");
    if (latencyEl && nodeObj.data.metrics?.latency) {
      latencyEl.innerHTML = `<i data-lucide="clock" class="meta-icon"></i> ${nodeObj.data.metrics.latency}`;
    }
    if (statusEl && (nodeObj.data.metrics?.status || status)) {
      statusEl.textContent = nodeObj.data.metrics?.status || status.toUpperCase();
    }

    if (window.lucide) {
      window.lucide.createIcons({ root: nodeObj.element });
    }
  }

  resetAllNodes() {
    this.nodesMap.forEach((nodeObj, id) => {
      this.setNodeStatus(id, "idle", { latency: "0.0ms", status: "IDLE" });
    });
    this.edgesMap.forEach((edgeObj) => {
      edgeObj.pathEl.classList.remove("is-active", "is-error");
    });
    this.packets = [];
    this.packetsGroup.innerHTML = "";
  }

  highlightEdge(edgeId, state = "active") {
    const edgeObj = this.edgesMap.get(edgeId);
    if (!edgeObj) return;

    if (state === "active") {
      edgeObj.pathEl.classList.add("is-active");
      edgeObj.pathEl.classList.remove("is-error");
    } else if (state === "error") {
      edgeObj.pathEl.classList.add("is-error");
    } else {
      edgeObj.pathEl.classList.remove("is-active", "is-error");
    }
  }

  sendPacket(edgeId, options = {}) {
    const edgeObj = this.edgesMap.get(edgeId);
    if (!edgeObj) return;

    const color = options.color || (edgeObj.data.isFeedback ? "#EF4444" : "#38BDF8");
    const speed = options.speed || 0.015;
    const size = options.size || 5;

    // Create SVG Circle for packet
    const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttribute("r", size);
    circle.setAttribute("fill", color);
    circle.setAttribute("filter", "url(#dag-glow)");
    circle.setAttribute("class", "dag-packet-particle");
    this.packetsGroup.appendChild(circle);

    this.packets.push({
      circle,
      pathEl: edgeObj.pathEl,
      progress: 0,
      speed,
      onComplete: options.onComplete || (() => {}),
      color
    });
  }

  startAnimationLoop() {
    let lastTime = performance.now();

    const loop = (currentTime) => {
      const dt = (currentTime - lastTime) / 16.67; // normalized delta
      lastTime = currentTime;

      for (let i = this.packets.length - 1; i >= 0; i--) {
        const pkt = this.packets[i];
        pkt.progress += pkt.speed * Math.max(0.5, Math.min(2.0, dt));

        if (pkt.progress >= 1.0) {
          // Packet finished journey
          if (pkt.circle && pkt.circle.parentNode) {
            pkt.circle.parentNode.removeChild(pkt.circle);
          }
          const cb = pkt.onComplete;
          this.packets.splice(i, 1);
          if (cb) cb();
        } else {
          // Update position along path
          const pathLen = pkt.pathEl.getTotalLength();
          const point = pkt.pathEl.getPointAtLength(pkt.progress * pathLen);
          pkt.circle.setAttribute("cx", point.x);
          pkt.circle.setAttribute("cy", point.y);
        }
      }

      this.animFrameId = requestAnimationFrame(loop);
    };

    this.animFrameId = requestAnimationFrame(loop);
  }

  attachEventListeners() {
    // Node Card Dragging & Selection
    this.nodesLayer.addEventListener("mousedown", (e) => {
      const card = e.target.closest(".dag-node-card");
      if (!card) return;

      const nodeId = card.id;
      const nodeObj = this.nodesMap.get(nodeId);
      if (!nodeObj) return;

      this.selectNode(nodeId);
      this.draggedNode = nodeObj;
      this.hasMoved = false;

      const rect = card.getBoundingClientRect();
      this.dragOffset.x = (e.clientX - rect.left) / this.scale;
      this.dragOffset.y = (e.clientY - rect.top) / this.scale;

      e.preventDefault();
    });

    window.addEventListener("mousemove", (e) => {
      if (!this.draggedNode) return;

      this.hasMoved = true;
      const containerRect = this.container.getBoundingClientRect();
      
      const newX = (e.clientX - containerRect.left - this.pan.x) / this.scale - this.dragOffset.x;
      const newY = (e.clientY - containerRect.top - this.pan.y) / this.scale - this.dragOffset.y;

      this.draggedNode.x = Math.max(10, Math.min(2400, newX));
      this.draggedNode.y = Math.max(10, Math.min(1200, newY));

      this.draggedNode.element.style.transform = `translate3d(${this.draggedNode.x}px, ${this.draggedNode.y}px, 0)`;
      this.updateEdgePaths();
    });

    window.addEventListener("mouseup", () => {
      if (this.draggedNode) {
        this.draggedNode = null;
      }
    });
  }

  destroy() {
    if (this.animFrameId) {
      cancelAnimationFrame(this.animFrameId);
      this.animFrameId = null;
    }
    this.packets = [];
    this.nodesMap.clear();
    this.edgesMap.clear();
    if (this.container) {
      this.container.innerHTML = "";
    }
  }
}


// ==========================================
// SOURCE: js\views\agentRuntimeView.js
// ==========================================
/**
 * Mode 1: Agent Runtime View
 * Multi-agent orchestration runtime with FastAPI, Redis token bucket, LangGraph supervisor,
 * Qdrant hybrid vector RAG, eBPF isolated sandbox, vLLM inference, and AIFA guardrail validation.
 */


class AgentRuntimeView {
  constructor() {
    this.container = null;
    this.graphEngine = null;
    this.currentStep = 0;
    this.isRunning = false;
    this.stepTimeout = null;
  }

  mount(viewportEl, controlDockEl) {
    this.container = viewportEl;
    this.container.innerHTML = `
      <div class="view-header-bar">
        <div class="view-title-group">
          <span class="view-mode-tag">MODE 01</span>
          <h2 class="view-title">Async Multi-Agent Orchestration Runtime</h2>
          <span class="view-subtitle">FastAPI • Redis Token-Bucket • LangGraph • Qdrant • vLLM</span>
        </div>
        <div class="view-action-group">
          <span class="badge-pill bg-indigo"><i data-lucide="cpu" class="pill-icon"></i> LangGraph</span>
          <span class="badge-pill bg-cyan"><i data-lucide="layers" class="pill-icon"></i> Parallel Tools</span>
        </div>
      </div>
      <div id="agent-graph-canvas" class="dag-canvas-container"></div>
    `;

    // Mount SVG Graph Engine
    const canvasEl = this.container.querySelector("#agent-graph-canvas");
    this.graphEngine = new SvgGraphEngine({
      onNodeSelect: (nodeData) => {
        store.selectNode(nodeData);
      }
    });

    this.graphEngine.mount(canvasEl, dagConfigs.agentRuntime);

    // Mount Left Control Dock
    this.renderControlDock(controlDockEl);

    if (window.lucide) {
      window.lucide.createIcons({ root: this.container });
    }
  }

  renderControlDock(controlDockEl) {
    const simState = store.getState().simulation;

    controlDockEl.innerHTML = `
      <div class="dock-section">
        <div class="dock-section-title">
          <i data-lucide="play-circle" class="dock-icon"></i>
          <span>RUNTIME TRANSPORT</span>
        </div>
        <div class="transport-btn-grid">
          <button id="btn-run-flow" class="btn-transport btn-primary">
            <i data-lucide="play" class="btn-icon"></i>
            <span>${this.isRunning ? "Pause" : "Run Flow"}</span>
          </button>
          <button id="btn-step-flow" class="btn-transport btn-secondary" ${this.isRunning ? "disabled" : ""}>
            <i data-lucide="skip-forward" class="btn-icon"></i>
            <span>Step</span>
          </button>
          <button id="btn-reset-flow" class="btn-transport btn-danger">
            <i data-lucide="rotate-ccw" class="btn-icon"></i>
            <span>Reset</span>
          </button>
        </div>
      </div>

      <div class="dock-section">
        <div class="dock-section-title">
          <i data-lucide="zap-off" class="dock-icon"></i>
          <span>CHAOS & FAULT INJECTION</span>
        </div>
        <div class="toggle-list">
          <label class="toggle-card">
            <input type="checkbox" id="toggle-inject-loop" ${simState.faultFlags.injectLoop ? "checked" : ""}>
            <div class="toggle-meta">
              <span class="toggle-label text-rose">Recursion Loop & Circuit Breaker</span>
              <span class="toggle-sub">Injects circular tool call; tests supervisor halt</span>
            </div>
          </label>

          <label class="toggle-card">
            <input type="checkbox" id="toggle-token-throttle" ${simState.faultFlags.tokenThrottle ? "checked" : ""}>
            <div class="toggle-meta">
              <span class="toggle-label text-amber">Redis Rate-Limit Spike (HTTP 429)</span>
              <span class="toggle-sub">Simulates token bucket depletion & retry backoff</span>
            </div>
          </label>

          <label class="toggle-card">
            <input type="checkbox" id="toggle-streaming" ${simState.faultFlags.streamingMode ? "checked" : ""}>
            <div class="toggle-meta">
              <span class="toggle-label text-cyan">SSE Token Micro-Streaming</span>
              <span class="toggle-sub">Rapid packet pulsing from vLLM to egress</span>
            </div>
          </label>
        </div>
      </div>

      <div class="dock-section">
        <div class="dock-section-title">
          <i data-lucide="activity" class="dock-icon"></i>
          <span>PIPELINE TELEMETRY</span>
        </div>
        <div class="metrics-mini-grid">
          <div class="metric-mini-card">
            <span class="metric-mini-label">E2E Latency</span>
            <span class="metric-mini-val text-emerald" id="val-e2e-latency">135.5 ms</span>
          </div>
          <div class="metric-mini-card">
            <span class="metric-mini-label">Throughput</span>
            <span class="metric-mini-val text-cyan">4,200 RPS</span>
          </div>
          <div class="metric-mini-card">
            <span class="metric-mini-label">Memory Footprint</span>
            <span class="metric-mini-val text-purple">1.2 GB</span>
          </div>
          <div class="metric-mini-card">
            <span class="metric-mini-label">Active State</span>
            <span class="metric-mini-val text-indigo" id="val-agent-state">IDLE</span>
          </div>
        </div>
      </div>
    `;

    if (window.lucide) {
      window.lucide.createIcons({ root: controlDockEl });
    }

    // Bind Controls
    controlDockEl.querySelector("#btn-run-flow").addEventListener("click", () => this.toggleRun());
    controlDockEl.querySelector("#btn-step-flow").addEventListener("click", () => this.executeStep());
    controlDockEl.querySelector("#btn-reset-flow").addEventListener("click", () => this.resetFlow());

    controlDockEl.querySelector("#toggle-inject-loop").addEventListener("change", (e) => {
      store.toggleFaultFlag("injectLoop", e.target.checked);
    });

    controlDockEl.querySelector("#toggle-token-throttle").addEventListener("change", (e) => {
      store.toggleFaultFlag("tokenThrottle", e.target.checked);
    });

    controlDockEl.querySelector("#toggle-streaming").addEventListener("change", (e) => {
      store.toggleFaultFlag("streamingMode", e.target.checked);
    });
  }

  toggleRun() {
    if (this.isRunning) {
      this.pauseFlow();
    } else {
      this.startFlow();
    }
  }

  startFlow() {
    this.isRunning = true;
    this.updateRunButton();
    store.addLog("EXEC", "Agent Runtime pipeline started execution.", "Dispatched request req_88f92a11 through FastAPI gateway.");
    
    const stateEl = document.querySelector("#val-agent-state");
    if (stateEl) stateEl.textContent = "RUNNING";

    this.runNextStep();
  }

  pauseFlow() {
    this.isRunning = false;
    clearTimeout(this.stepTimeout);
    this.updateRunButton();
    const stateEl = document.querySelector("#val-agent-state");
    if (stateEl) stateEl.textContent = "PAUSED";
    store.addLog("INFO", "Agent Runtime flow execution paused.", `Stopped at step ${this.currentStep}.`);
  }

  resetFlow() {
    this.isRunning = false;
    clearTimeout(this.stepTimeout);
    this.currentStep = 0;
    this.updateRunButton();
    this.graphEngine.resetAllNodes();

    const stateEl = document.querySelector("#val-agent-state");
    if (stateEl) stateEl.textContent = "IDLE";

    store.addLog("INFO", "Agent Runtime pipeline reset to initial state.", "All buffers cleared.");
  }

  updateRunButton() {
    const btn = document.querySelector("#btn-run-flow");
    const stepBtn = document.querySelector("#btn-step-flow");
    if (btn) {
      btn.innerHTML = `<i data-lucide="${this.isRunning ? "pause" : "play"}" class="btn-icon"></i> <span>${this.isRunning ? "Pause" : "Run Flow"}</span>`;
    }
    if (stepBtn) {
      stepBtn.disabled = this.isRunning;
    }
    if (window.lucide) {
      window.lucide.createIcons({ root: document.querySelector(".transport-btn-grid") });
    }
  }

  runNextStep() {
    if (!this.isRunning) return;
    this.executeStep(() => {
      if (this.currentStep < 7 && this.isRunning) {
        this.stepTimeout = setTimeout(() => this.runNextStep(), 850);
      } else {
        this.isRunning = false;
        this.updateRunButton();
        const stateEl = document.querySelector("#val-agent-state");
        if (stateEl) stateEl.textContent = "COMPLETED";
      }
    });
  }

  executeStep(onComplete) {
    const faultFlags = store.getState().simulation.faultFlags;
    this.currentStep++;

    switch (this.currentStep) {
      case 1:
        // Ingress Gateway
        this.graphEngine.setNodeStatus("node-ingress", "running", { latency: "2.1ms", status: "PROCESSING" });
        store.addLog("INFO", "[Ingress] Received HTTP POST /v1/chat/completions/agentic", "Bearer JWT validated, client assigned req_88f92a11.");
        
        setTimeout(() => {
          this.graphEngine.setNodeStatus("node-ingress", "success", { latency: "4.2ms", status: "200 OK" });
          this.graphEngine.highlightEdge("e1", "active");
          this.graphEngine.sendPacket("e1", {
            color: "#38BDF8",
            speed: 0.025,
            onComplete: () => {
              if (onComplete) onComplete();
            }
          });
        }, 300);
        break;

      case 2:
        // Redis Rate Limiter
        if (faultFlags.tokenThrottle) {
          this.graphEngine.setNodeStatus("node-ratelimit", "error", { latency: "1.2ms", status: "429 THROTTLED" });
          this.graphEngine.highlightEdge("e1", "error");
          store.addLog("WARN", "[RateLimiter] HTTP 429 Too Many Requests: Token bucket empty!", "Client exceeded 500 req/min quota. Exponential backoff triggered.");
          this.pauseFlow();
          return;
        }

        this.graphEngine.setNodeStatus("node-ratelimit", "running", { latency: "0.4ms", status: "INSPECTING" });
        store.addLog("INFO", "[RateLimiter] Redis Token-Bucket passed.", "Remaining: 488/500 tokens in current 60s sliding window.");
        
        setTimeout(() => {
          this.graphEngine.setNodeStatus("node-ratelimit", "success", { latency: "0.8ms", status: "ALLOW" });
          this.graphEngine.highlightEdge("e2", "active");
          this.graphEngine.sendPacket("e2", {
            color: "#6366F1",
            speed: 0.025,
            onComplete: () => {
              if (onComplete) onComplete();
            }
          });
        }, 250);
        break;

      case 3:
        // LangGraph Supervisor
        this.graphEngine.setNodeStatus("node-supervisor", "running", { latency: "6.8ms", status: "ROUTING" });
        store.addLog("INFO", "[Supervisor] LangGraph state graph evaluating intent...", "Target intent: CLINICAL_TRIAL_EVALUATION. Routing parallel tool workers.");
        
        setTimeout(() => {
          this.graphEngine.setNodeStatus("node-supervisor", "success", { latency: "14.6ms", status: "PARALLEL_DISPATCH" });
          this.graphEngine.highlightEdge("e3", "active");
          this.graphEngine.highlightEdge("e4", "active");

          let finishedPackets = 0;
          const checkDone = () => {
            finishedPackets++;
            if (finishedPackets >= 2 && onComplete) onComplete();
          };

          this.graphEngine.sendPacket("e3", { color: "#A855F7", speed: 0.022, onComplete: checkDone });
          this.graphEngine.sendPacket("e4", { color: "#10B981", speed: 0.022, onComplete: checkDone });
        }, 350);
        break;

      case 4:
        // Concurrent RAG + Sandbox
        this.graphEngine.setNodeStatus("node-rag", "running", { latency: "12ms", status: "HNSW_SEARCH" });
        this.graphEngine.setNodeStatus("node-sandbox", "running", { latency: "18ms", status: "EBPF_EXEC" });
        store.addLog("INFO", "[Qdrant] Hybrid dense/sparse HNSW search in progress...", "Matched 4 chunks in clinical_trials_oncology_v3.");
        store.addLog("INFO", "[Sandbox] Ephemeral gVisor container computing Kaplan-Meier CI...", "Drop-all capabilities profile active.");

        setTimeout(() => {
          this.graphEngine.setNodeStatus("node-rag", "success", { latency: "22.4ms", status: "4 CHUNKS" });
          this.graphEngine.setNodeStatus("node-sandbox", "success", { latency: "38.1ms", status: "CODE 0 OK" });
          this.graphEngine.highlightEdge("e5", "active");
          this.graphEngine.highlightEdge("e6", "active");

          let finished = 0;
          const checkDone = () => {
            finished++;
            if (finished >= 2 && onComplete) onComplete();
          };

          this.graphEngine.sendPacket("e5", { color: "#A855F7", speed: 0.024, onComplete: checkDone });
          this.graphEngine.sendPacket("e6", { color: "#10B981", speed: 0.024, onComplete: checkDone });
        }, 400);
        break;

      case 5:
        // vLLM Inference
        this.graphEngine.setNodeStatus("node-llm", "running", { latency: "20ms TTFT", status: "GENERATING" });
        store.addLog("INFO", "[vLLM] Continuous batching inference scheduled on Llama-3.3-70B.", "Prompt tokens: 894 | Generating response tokens.");

        setTimeout(() => {
          this.graphEngine.setNodeStatus("node-llm", "success", { latency: "42.8ms TTFT", status: "318 TOKENS" });
          this.graphEngine.highlightEdge("e7", "active");

          if (faultFlags.streamingMode) {
            // Send rapid burst of packets
            for (let i = 0; i < 5; i++) {
              setTimeout(() => {
                this.graphEngine.sendPacket("e7", { color: "#38BDF8", speed: 0.035 });
              }, i * 80);
            }
          }

          this.graphEngine.sendPacket("e7", {
            color: "#6366F1",
            speed: 0.022,
            onComplete: () => {
              if (onComplete) onComplete();
            }
          });
        }, 450);
        break;

      case 6:
        // AIFA & Safety Guardrail
        this.graphEngine.setNodeStatus("node-guardrail", "running", { latency: "5.5ms", status: "AUDITING" });

        if (faultFlags.injectLoop) {
          // Fault: Hallucination or infinite loop detected -> feedback to supervisor!
          store.addLog("ERROR", "[Guardrail] Policy violation detected: Loop limit exceeded or grounding drift!", "Triggering LangGraph supervisor circuit breaker.");
          setTimeout(() => {
            this.graphEngine.setNodeStatus("node-guardrail", "error", { latency: "14ms", status: "INTERCEPTED" });
            this.graphEngine.highlightEdge("e-feedback", "error");
            this.graphEngine.sendPacket("e-feedback", {
              color: "#EF4444",
              speed: 0.018,
              onComplete: () => {
                this.graphEngine.setNodeStatus("node-supervisor", "error", { latency: "HALT", status: "CIRCUIT_BREAKER" });
                store.addLog("WARN", "[Supervisor] Circuit breaker engaged: execution halted to prevent infinite LLM recursion loop.", "Total state iterations: 8/8.");
                this.pauseFlow();
              }
            });
          }, 350);
          return;
        }

        store.addLog("INFO", "[Guardrail] All checks passed: PII clean, citation grounded (0.98), AIFA SmPC aligned.", "Approved for stream egress.");
        setTimeout(() => {
          this.graphEngine.setNodeStatus("node-guardrail", "success", { latency: "11.2ms", status: "PASSED 100%" });
          this.graphEngine.highlightEdge("e8", "active");
          this.graphEngine.sendPacket("e8", {
            color: "#10B981",
            speed: 0.025,
            onComplete: () => {
              if (onComplete) onComplete();
            }
          });
        }, 300);
        break;

      case 7:
        // SSE Stream Egress
        this.graphEngine.setNodeStatus("node-egress", "success", { latency: "1.2ms", status: "STREAM DONE" });
        store.addLog("INFO", "[Egress] Final SSE stream frame emitted to client.", "E2E Latency: 135.5ms | OpenTelemetry trace logged.");
        if (onComplete) onComplete();
        break;

      default:
        this.resetFlow();
        break;
    }
  }

  destroy() {
    clearTimeout(this.stepTimeout);
    this.isRunning = false;
    if (this.graphEngine) {
      this.graphEngine.destroy();
      this.graphEngine = null;
    }
  }
}


// ==========================================
// SOURCE: js\views\ragCitationView.js
// ==========================================
/**
 * Mode 2: Citation RAG Lab View
 * Document Grounding & Attribution Engine with interactive PDF bounding boxes,
 * sentence-level citation pills, bi-directional hover/click grounding, and embedding vector similarity telemetry.
 */


class RagCitationView {
  constructor() {
    this.container = null;
    this.currentQueryIndex = 0;
    this.unsubscribeStore = null;
  }

  mount(viewportEl, controlDockEl) {
    this.container = viewportEl;
    const initialQuery = clinicalDocData.queries[this.currentQueryIndex];
    store.setRagQuery(initialQuery.id, initialQuery.citations[0]?.page || 4);

    this.renderLayout();
    this.renderControlDock(controlDockEl);
    this.attachInteractions();

    // Select the first citation chunk to populate the inspector initially
    if (initialQuery.citations && initialQuery.citations.length > 0) {
      this.selectCitation(initialQuery.citations[0]);
    }

    if (window.lucide) {
      window.lucide.createIcons({ root: this.container });
    }
  }

  renderLayout() {
    const ragState = store.getState().ragState;
    const currentQuery = clinicalDocData.queries.find(q => q.id === ragState.activeQueryId) || clinicalDocData.queries[0];
    const pageData = clinicalDocData.pages[ragState.activePage] || clinicalDocData.pages[4];

    this.container.innerHTML = `
      <div class="view-header-bar">
        <div class="view-title-group">
          <span class="view-mode-tag">MODE 02</span>
          <h2 class="view-title">Citation RAG Grounding & Attribution Lab</h2>
          <span class="view-subtitle">Spatial Bounding Boxes • HNSW Dense Vectors • NLI Attribution</span>
        </div>
        <div class="view-action-group">
          <span class="badge-pill bg-purple"><i data-lucide="crosshair" class="pill-icon"></i> Spatial BBox</span>
          <span class="badge-pill bg-emerald"><i data-lucide="check-check" class="pill-icon"></i> Verified Grounding</span>
        </div>
      </div>

      <div class="rag-lab-split-view">
        <!-- LEFT SUBPANE: Mock Clinical Document PDF Viewer -->
        <div class="doc-viewer-panel">
          <div class="doc-viewer-toolbar">
            <div class="doc-file-info">
              <i data-lucide="file-text" class="text-indigo"></i>
              <span class="doc-file-title">${clinicalDocData.documentMeta.protocolId}</span>
              <span class="doc-file-badge">CONFIDENTIAL CLINICAL PROTOCOL</span>
            </div>
            <div class="doc-page-nav">
              <button class="btn-page-step" id="btn-prev-page" ${ragState.activePage <= 2 ? "disabled" : ""}><i data-lucide="chevron-left"></i></button>
              <span class="page-counter">Page <strong>${ragState.activePage}</strong> of 28</span>
              <button class="btn-page-step" id="btn-next-page" ${ragState.activePage >= 6 ? "disabled" : ""}><i data-lucide="chevron-right"></i></button>
            </div>
          </div>

          <div class="doc-page-canvas-wrapper" id="doc-scroll-container">
            <div class="doc-paper-sheet" id="doc-sheet">
              <div class="doc-watermark">CLINICAL STUDY PROTOCOL — FOR REGULATORY SUBMISSION ONLY</div>
              
              <div class="doc-header-block">
                <div class="doc-sponsor">${clinicalDocData.documentMeta.sponsor}</div>
                <div class="doc-protocol-title">${clinicalDocData.documentMeta.title}</div>
                <div class="doc-protocol-meta">${clinicalDocData.documentMeta.phase} • Date: ${clinicalDocData.documentMeta.date}</div>
              </div>

              <div class="doc-section-divider"></div>
              
              <div class="doc-content-body" id="doc-page-content">
                ${this.renderDocumentPage(pageData, currentQuery)}
              </div>
            </div>
          </div>
        </div>

        <!-- RIGHT SUBPANE: Generated Synthesis & Citation Attribution -->
        <div class="rag-synthesis-panel">
          <div class="synthesis-header">
            <div class="synthesis-title-row">
              <i data-lucide="sparkles" class="text-cyan"></i>
              <span class="synthesis-heading">Grounded Clinical Synthesis</span>
            </div>
            <span class="badge-grounded"><i data-lucide="shield-check"></i> 100% Attribution Verified</span>
          </div>

          <div class="query-prompt-box">
            <span class="query-prefix"><i data-lucide="help-circle"></i> Clinical Query:</span>
            <p class="query-text">${currentQuery.question}</p>
          </div>

          <div class="synthesis-body-card">
            <div class="synthesis-label">Synthesized Response with Interactive Grounded Citations</div>
            <div class="synthesis-text" id="synthesis-content">
              ${currentQuery.generatedAnswer}
            </div>
            <div class="synthesis-hint">
              <i data-lucide="mouse-pointer" class="text-cyan"></i>
              <span>Hover or click any citation pill to isolate the exact bounding box and inspect vector telemetry.</span>
            </div>
          </div>

          <div class="citation-cards-list">
            <div class="citation-list-title">Retrieved Source Chunks & Attribution Vectors</div>
            <div class="citation-items" id="citation-cards-container">
              ${this.renderCitationCards(currentQuery.citations)}
            </div>
          </div>
        </div>
      </div>
    `;

    if (window.lucide) {
      window.lucide.createIcons({ root: this.container });
    }
  }

  renderDocumentPage(pageData, currentQuery) {
    if (!pageData) return `<div class="doc-empty">Page content not available.</div>`;

    return pageData.lines.map((line) => {
      if (line.type === "header") {
        return `<h3 class="doc-section-h3">${line.text}</h3>`;
      }
      if (line.type === "meta") {
        return `<div class="doc-meta-line">${line.text}</div>`;
      }
      if (line.type === "table") {
        const isMatched = currentQuery.citations.some(c => c.bboxId === line.id);
        return `
          <div class="doc-table-wrapper bbox-grounding-target ${isMatched ? 'is-grounded-chunk' : ''}" id="${line.id}" data-bbox-id="${line.id}">
            <div class="doc-table-caption">${line.title}</div>
            <table class="doc-clinical-table">
              <thead>
                <tr>${line.headers.map(h => `<th>${h}</th>`).join('')}</tr>
              </thead>
              <tbody>
                ${line.rows.map(row => `<tr>${row.map(cell => `<td>${cell}</td>`).join('')}</tr>`).join('')}
              </tbody>
            </table>
            <div class="bbox-attribution-tag"><i data-lucide="crosshair"></i> Spatial Bounding Box [Table Chunk]</div>
          </div>
        `;
      }
      if (line.type === "paragraph") {
        const isMatched = currentQuery.citations.some(c => c.bboxId === line.id);
        return `
          <div class="doc-paragraph bbox-grounding-target ${isMatched ? 'is-grounded-chunk' : ''}" id="${line.id}" data-bbox-id="${line.id}">
            <p>${line.text}</p>
            <div class="bbox-attribution-tag"><i data-lucide="crosshair"></i> Chunk Vector Bounding Box</div>
          </div>
        `;
      }
      if (line.type === "footer") {
        return `<div class="doc-footer-line">${line.text}</div>`;
      }
      return "";
    }).join("");
  }

  renderCitationCards(citations) {
    const ragState = store.getState().ragState;
    const threshold = ragState.similarityThreshold || 0.85;

    return citations.map((citation, idx) => {
      const isAboveThreshold = citation.cosineScore >= threshold;
      return `
        <div class="citation-card-item ${isAboveThreshold ? '' : 'is-below-threshold'}" data-chunk-id="${citation.chunkId}" data-bbox-id="${citation.bboxId}">
          <div class="citation-card-header">
            <span class="citation-pill-tag">${citation.label}</span>
            <span class="citation-score-badge ${isAboveThreshold ? 'score-high' : 'score-low'}">
              <i data-lucide="activity"></i> Cosine: ${citation.cosineScore.toFixed(3)}
            </span>
          </div>
          <div class="citation-section-title">${citation.section}</div>
          <p class="citation-excerpt">"${citation.excerpt}"</p>
          <div class="citation-meta-row">
            <span><i data-lucide="clock"></i> Latency: ${citation.retrievalLatency}</span>
            <span><i data-lucide="file-code"></i> Tokens: ${citation.tokens}</span>
            <span><i data-lucide="map-pin"></i> Page ${citation.page}</span>
          </div>
        </div>
      `;
    }).join("");
  }

  renderControlDock(controlDockEl) {
    const ragState = store.getState().ragState;

    controlDockEl.innerHTML = `
      <div class="dock-section">
        <div class="dock-section-title">
          <i data-lucide="file-search" class="dock-icon"></i>
          <span>CLINICAL QUERY SELECTOR</span>
        </div>
        <div class="query-select-group">
          ${clinicalDocData.queries.map((q, idx) => `
            <button class="btn-query-select ${q.id === ragState.activeQueryId ? 'is-active' : ''}" data-query-id="${q.id}">
              <div class="query-btn-title">${q.title}</div>
              <div class="query-btn-sub">${q.citations.length} Verified Grounded Chunks</div>
            </button>
          `).join('')}
        </div>
      </div>

      <div class="dock-section">
        <div class="dock-section-title">
          <i data-lucide="sliders" class="dock-icon"></i>
          <span>VECTOR RETRIEVAL THRESHOLD</span>
        </div>
        <div class="slider-control-card">
          <div class="slider-header">
            <span class="slider-label">Cosine Similarity Cutoff</span>
            <span class="slider-value text-purple" id="val-sim-threshold">${(ragState.similarityThreshold).toFixed(2)}</span>
          </div>
          <input type="range" id="slider-threshold" min="0.70" max="0.98" step="0.01" value="${ragState.similarityThreshold}" class="custom-range-slider">
          <div class="slider-scale-labels">
            <span>0.70 (Broad)</span>
            <span>0.85 (Recommended)</span>
            <span>0.98 (Strict)</span>
          </div>
        </div>
      </div>

      <div class="dock-section">
        <div class="dock-section-title">
          <i data-lucide="database" class="dock-icon"></i>
          <span>VECTOR DB TELEMETRY</span>
        </div>
        <div class="metrics-mini-grid">
          <div class="metric-mini-card">
            <span class="metric-mini-label">Index Type</span>
            <span class="metric-mini-val text-cyan">HNSW Dense</span>
          </div>
          <div class="metric-mini-card">
            <span class="metric-mini-label">Dimensions</span>
            <span class="metric-mini-val text-indigo">1,536 dim</span>
          </div>
          <div class="metric-mini-card">
            <span class="metric-mini-label">Avg Retrieval</span>
            <span class="metric-mini-val text-emerald">20.4 ms</span>
          </div>
          <div class="metric-mini-card">
            <span class="metric-mini-label">Attribution</span>
            <span class="metric-mini-val text-purple">100% Grounded</span>
          </div>
        </div>
      </div>
    `;

    if (window.lucide) {
      window.lucide.createIcons({ root: controlDockEl });
    }

    // Bind Query Buttons
    controlDockEl.querySelectorAll(".btn-query-select").forEach((btn) => {
      btn.addEventListener("click", () => {
        const queryId = btn.getAttribute("data-query-id");
        const queryObj = clinicalDocData.queries.find(q => q.id === queryId);
        if (queryObj) {
          store.setRagQuery(queryId, queryObj.citations[0]?.page || 4);
          this.renderLayout();
          this.renderControlDock(controlDockEl);
          this.attachInteractions();
          if (queryObj.citations && queryObj.citations.length > 0) {
            this.selectCitation(queryObj.citations[0]);
          }
        }
      });
    });

    // Bind Threshold Slider
    const slider = controlDockEl.querySelector("#slider-threshold");
    const valDisplay = controlDockEl.querySelector("#val-sim-threshold");
    slider.addEventListener("input", (e) => {
      const val = parseFloat(e.target.value);
      valDisplay.textContent = val.toFixed(2);
      store.setSimilarityThreshold(val);

      // Re-render citation cards threshold state
      const currentQuery = clinicalDocData.queries.find(q => q.id === store.getState().ragState.activeQueryId);
      if (currentQuery) {
        const container = this.container.querySelector("#citation-cards-container");
        if (container) {
          container.innerHTML = this.renderCitationCards(currentQuery.citations);
          if (window.lucide) window.lucide.createIcons({ root: container });
          this.attachCardInteractions();
        }
      }
    });
  }

  attachInteractions() {
    this.attachPillInteractions();
    this.attachBboxInteractions();
    this.attachCardInteractions();
    this.attachPageNav();
  }

  attachPillInteractions() {
    const pills = this.container.querySelectorAll(".citation-pill");
    pills.forEach((pill) => {
      const chunkId = pill.getAttribute("data-chunk-id");
      const bboxId = pill.getAttribute("data-bbox");
      const pageNum = parseInt(pill.getAttribute("data-page"), 10);

      pill.addEventListener("mouseenter", () => {
        this.highlightBbox(bboxId, true);
        pill.classList.add("is-hovered");
      });

      pill.addEventListener("mouseleave", () => {
        this.highlightBbox(bboxId, false);
        pill.classList.remove("is-hovered");
      });

      pill.addEventListener("click", () => {
        if (pageNum && pageNum !== store.getState().ragState.activePage) {
          store.setRagPage(pageNum);
          this.renderLayout();
          this.attachInteractions();
        }

        const currentQuery = clinicalDocData.queries.find(q => q.id === store.getState().ragState.activeQueryId);
        const citation = currentQuery?.citations.find(c => c.chunkId === chunkId);
        if (citation) {
          this.selectCitation(citation);
          this.scrollToBbox(bboxId);
        }
      });
    });
  }

  attachBboxInteractions() {
    const targets = this.container.querySelectorAll(".bbox-grounding-target");
    targets.forEach((target) => {
      const bboxId = target.getAttribute("data-bbox-id");

      target.addEventListener("mouseenter", () => {
        target.classList.add("is-hovered");
        this.highlightPill(bboxId, true);
      });

      target.addEventListener("mouseleave", () => {
        target.classList.remove("is-hovered");
        this.highlightPill(bboxId, false);
      });

      target.addEventListener("click", () => {
        const currentQuery = clinicalDocData.queries.find(q => q.id === store.getState().ragState.activeQueryId);
        const citation = currentQuery?.citations.find(c => c.bboxId === bboxId);
        if (citation) {
          this.selectCitation(citation);
        }
      });
    });
  }

  attachCardInteractions() {
    const cards = this.container.querySelectorAll(".citation-card-item");
    cards.forEach((card) => {
      const chunkId = card.getAttribute("data-chunk-id");
      const bboxId = card.getAttribute("data-bbox-id");

      card.addEventListener("mouseenter", () => {
        this.highlightBbox(bboxId, true);
        this.highlightPill(bboxId, true);
      });

      card.addEventListener("mouseleave", () => {
        this.highlightBbox(bboxId, false);
        this.highlightPill(bboxId, false);
      });

      card.addEventListener("click", () => {
        const currentQuery = clinicalDocData.queries.find(q => q.id === store.getState().ragState.activeQueryId);
        const citation = currentQuery?.citations.find(c => c.chunkId === chunkId);
        if (citation) {
          this.selectCitation(citation);
          this.scrollToBbox(bboxId);
        }
      });
    });
  }

  attachPageNav() {
    const prevBtn = this.container.querySelector("#btn-prev-page");
    const nextBtn = this.container.querySelector("#btn-next-page");

    if (prevBtn) {
      prevBtn.addEventListener("click", () => {
        const curPage = store.getState().ragState.activePage;
        if (curPage > 2) {
          store.setRagPage(curPage - 2);
          this.renderLayout();
          this.attachInteractions();
        }
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener("click", () => {
        const curPage = store.getState().ragState.activePage;
        if (curPage < 6) {
          store.setRagPage(curPage + 2);
          this.renderLayout();
          this.attachInteractions();
        }
      });
    }
  }

  highlightBbox(bboxId, active) {
    if (!bboxId) return;
    const el = this.container.querySelector(`#${bboxId}`);
    if (el) {
      if (active) {
        el.classList.add("is-active-bbox");
      } else {
        el.classList.remove("is-active-bbox");
      }
    }
  }

  highlightPill(bboxId, active) {
    if (!bboxId) return;
    const pills = this.container.querySelectorAll(`.citation-pill[data-bbox="${bboxId}"]`);
    pills.forEach((pill) => {
      if (active) {
        pill.classList.add("is-hovered-from-bbox");
      } else {
        pill.classList.remove("is-hovered-from-bbox");
      }
    });
  }

  scrollToBbox(bboxId) {
    const el = this.container.querySelector(`#${bboxId}`);
    const scrollContainer = this.container.querySelector("#doc-scroll-container");
    if (el && scrollContainer) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
      el.classList.add("is-pulse-highlight");
      setTimeout(() => el.classList.remove("is-pulse-highlight"), 1800);
    }
  }

  selectCitation(citation) {
    store.setSelectedCitation(citation);

    // Update active highlight in document and citation card list
    this.container.querySelectorAll(".bbox-grounding-target").forEach(b => b.classList.remove("is-selected-bbox"));
    const bboxEl = this.container.querySelector(`#${citation.bboxId}`);
    if (bboxEl) bboxEl.classList.add("is-selected-bbox");

    this.container.querySelectorAll(".citation-card-item").forEach(c => c.classList.remove("is-selected"));
    const cardEl = this.container.querySelector(`.citation-card-item[data-chunk-id="${citation.chunkId}"]`);
    if (cardEl) cardEl.classList.add("is-selected");

    // Send formatted inspection data to the Right Inspector
    const inspectorPayload = {
      id: citation.chunkId,
      label: `Citation: ${citation.label}`,
      sublabel: citation.section,
      category: "rag-citation",
      metrics: {
        cosine_similarity: citation.cosineScore.toFixed(4),
        retrieval_latency: citation.retrievalLatency,
        token_count: `${citation.tokens} tokens`,
        page_anchor: `Page ${citation.page}`
      },
      payload: {
        citation_reference: citation.label,
        document_id: clinicalDocData.documentMeta.protocolId,
        section_heading: citation.section,
        cosine_similarity_score: citation.cosineScore,
        embedding_dimension: 1536,
        vector_query_type: "HNSW_COSINE_HYBRID",
        retrieval_latency_ms: parseFloat(citation.retrievalLatency),
        raw_text_chunk: citation.excerpt,
        nli_grounding_evaluation: {
          entailment_probability: 0.984,
          contradiction_probability: 0.003,
          neutral_probability: 0.013,
          verdict: "FAITHFUL_GROUNDING"
        }
      },
      code: `# Vector Search Retrieval & Bounding Box Attribution\nfrom qdrant_client import AsyncQdrantClient, models\n\nasync def retrieve_grounded_chunks(query_text: str, threshold: float = ${store.getState().ragState.similarityThreshold}):\n    query_vector = await openai_embedder.create_embedding(query_text)\n    results = await qdrant_client.query_points_async(\n        collection_name="clinical_trials_oncology_v3",\n        query=query_vector,\n        score_threshold=threshold,\n        limit=4,\n        with_payload=True\n    )\n    # Map chunk bounding boxes for spatial grounding in PDF UI\n    return [\n        {\n            "chunk_id": pt.id,\n            "score": pt.score,\n            "text": pt.payload["text"],\n            "page": pt.payload["page"],\n            "bbox": pt.payload["bbox_coords"]\n        }\n        for pt in results.points\n    ]`
    };

    store.selectNode(inspectorPayload);
  }

  destroy() {
    if (this.unsubscribeStore) {
      this.unsubscribeStore();
      this.unsubscribeStore = null;
    }
  }
}


// ==========================================
// SOURCE: js\views\veevaAifaView.js
// ==========================================
/**
 * Mode 3: Veeva & AIFA Pipeline View
 * Pharma Enterprise Multi-Agent Regulatory Compliance Bridge:
 * Veeva PromoMats -> LayoutLM OCR -> Claim Decomposer -> AIFA Regulatory Engine -> SmPC Truth Engine -> 21 CFR Part 11 -> Salesforce.
 */


class VeevaAifaView {
  constructor() {
    this.container = null;
    this.graphEngine = null;
    this.currentStep = 0;
    this.isRunning = false;
    this.stepTimeout = null;
    this.selectedScenario = "compliant"; // 'compliant' | 'off-label' | 'missing-warning'
  }

  mount(viewportEl, controlDockEl) {
    this.container = viewportEl;
    this.container.innerHTML = `
      <div class="view-header-bar">
        <div class="view-title-group">
          <span class="view-mode-tag">MODE 03</span>
          <h2 class="view-title">Veeva PromoMats to AIFA Regulatory Pipeline</h2>
          <span class="view-subtitle">Italian Medicines Agency (D.Lgs. 219/06) • SmPC • 21 CFR Part 11 • Salesforce Sync</span>
        </div>
        <div class="view-action-group">
          <span class="badge-pill bg-emerald"><i data-lucide="shield-alert" class="pill-icon"></i> AIFA Art. 119</span>
          <span class="badge-pill bg-purple"><i data-lucide="lock" class="pill-icon"></i> 21 CFR Part 11</span>
        </div>
      </div>
      <div id="veeva-graph-canvas" class="dag-canvas-container"></div>
    `;

    const canvasEl = this.container.querySelector("#veeva-graph-canvas");
    this.graphEngine = new SvgGraphEngine({
      onNodeSelect: (nodeData) => {
        store.selectNode(nodeData);
      }
    });

    this.graphEngine.mount(canvasEl, dagConfigs.veevaAifa);

    this.renderControlDock(controlDockEl);

    if (window.lucide) {
      window.lucide.createIcons({ root: this.container });
    }
  }

  renderControlDock(controlDockEl) {
    controlDockEl.innerHTML = `
      <div class="dock-section">
        <div class="dock-section-title">
          <i data-lucide="play-circle" class="dock-icon"></i>
          <span>COMPLIANCE AUDIT TRANSPORT</span>
        </div>
        <div class="transport-btn-grid">
          <button id="btn-run-veeva" class="btn-transport btn-primary">
            <i data-lucide="play" class="btn-icon"></i>
            <span>${this.isRunning ? "Pause" : "Run Audit"}</span>
          </button>
          <button id="btn-step-veeva" class="btn-transport btn-secondary" ${this.isRunning ? "disabled" : ""}>
            <i data-lucide="skip-forward" class="btn-icon"></i>
            <span>Step</span>
          </button>
          <button id="btn-reset-veeva" class="btn-transport btn-danger">
            <i data-lucide="rotate-ccw" class="btn-icon"></i>
            <span>Reset</span>
          </button>
        </div>
      </div>

      <div class="dock-section">
        <div class="dock-section-title">
          <i data-lucide="file-check" class="dock-icon"></i>
          <span>REGULATORY AUDIT SCENARIO</span>
        </div>
        <div class="scenario-radio-group">
          <label class="scenario-radio-card ${this.selectedScenario === 'compliant' ? 'is-active' : ''}">
            <input type="radio" name="veeva-scenario" value="compliant" ${this.selectedScenario === 'compliant' ? 'checked' : ''}>
            <div class="scenario-radio-body">
              <div class="scenario-name text-emerald">1. Fully Compliant Asset</div>
              <div class="scenario-desc">All claims strictly match SmPC 4.1. Fast-track automated sync.</div>
            </div>
          </label>

          <label class="scenario-radio-card ${this.selectedScenario === 'off-label' ? 'is-active' : ''}">
            <input type="radio" name="veeva-scenario" value="off-label" ${this.selectedScenario === 'off-label' ? 'checked' : ''}>
            <div class="scenario-radio-body">
              <div class="scenario-name text-rose">2. Off-Label Indication Claim</div>
              <div class="scenario-desc">AIFA Art. 119 violation: Exceeds approved SmPC indication. Locks sync.</div>
            </div>
          </label>

          <label class="scenario-radio-card ${this.selectedScenario === 'missing-warning' ? 'is-active' : ''}">
            <input type="radio" name="veeva-scenario" value="missing-warning" ${this.selectedScenario === 'missing-warning' ? 'checked' : ''}>
            <div class="scenario-radio-body">
              <div class="scenario-name text-amber">3. Missing Fair Balance</div>
              <div class="scenario-desc">Omits mandatory Grade 3 neutropenia risk disclosure box.</div>
            </div>
          </label>
        </div>
      </div>

      <div class="dock-section">
        <div class="dock-section-title">
          <i data-lucide="clipboard-check" class="dock-icon"></i>
          <span>AIFA STATUTORY CHECKLIST</span>
        </div>
        <div class="checklist-items" id="aifa-checklist">
          <div class="check-item status-pending" id="chk-art-119-1">
            <i data-lucide="circle" class="check-icon"></i>
            <span>Art. 119(1) SmPC Scope Match</span>
          </div>
          <div class="check-item status-pending" id="chk-art-119-3">
            <i data-lucide="circle" class="check-icon"></i>
            <span>Art. 119(3) Price & Posology</span>
          </div>
          <div class="check-item status-pending" id="chk-fair-balance">
            <i data-lucide="circle" class="check-icon"></i>
            <span>Fair Balance Risk/Benefit Ratio</span>
          </div>
          <div class="check-item status-pending" id="chk-cfr-11">
            <i data-lucide="circle" class="check-icon"></i>
            <span>21 CFR Part 11 Audit Hash</span>
          </div>
        </div>
      </div>
    `;

    if (window.lucide) {
      window.lucide.createIcons({ root: controlDockEl });
    }

    // Bind Controls
    controlDockEl.querySelector("#btn-run-veeva").addEventListener("click", () => this.toggleRun());
    controlDockEl.querySelector("#btn-step-veeva").addEventListener("click", () => this.executeStep());
    controlDockEl.querySelector("#btn-reset-veeva").addEventListener("click", () => this.resetFlow());

    controlDockEl.querySelectorAll("input[name='veeva-scenario']").forEach((radio) => {
      radio.addEventListener("change", (e) => {
        this.selectedScenario = e.target.value;
        this.resetFlow();
        this.renderControlDock(controlDockEl);
        store.addLog("INFO", `Switched Veeva/AIFA Scenario to: [${this.selectedScenario.toUpperCase()}]`, "Pipeline parameters reconfigured.");
      });
    });
  }

  toggleRun() {
    if (this.isRunning) {
      this.pauseFlow();
    } else {
      this.startFlow();
    }
  }

  startFlow() {
    this.isRunning = true;
    this.updateRunButton();
    store.addLog("EXEC", "Veeva PromoMats compliance audit initiated.", `Target jurisdiction: Italy AIFA | Scenario: ${this.selectedScenario}`);
    this.runNextStep();
  }

  pauseFlow() {
    this.isRunning = false;
    clearTimeout(this.stepTimeout);
    this.updateRunButton();
    store.addLog("INFO", "Compliance audit flow paused.", `Stopped at step ${this.currentStep}.`);
  }

  resetFlow() {
    this.isRunning = false;
    clearTimeout(this.stepTimeout);
    this.currentStep = 0;
    this.updateRunButton();
    this.graphEngine.resetAllNodes();

    // Reset checklist items
    const checklist = document.querySelector("#aifa-checklist");
    if (checklist) {
      checklist.querySelectorAll(".check-item").forEach((item) => {
        item.className = "check-item status-pending";
        item.querySelector(".check-icon").outerHTML = `<i data-lucide="circle" class="check-icon"></i>`;
      });
      if (window.lucide) window.lucide.createIcons({ root: checklist });
    }

    store.addLog("INFO", "Veeva/AIFA compliance pipeline reset.", "Awaiting new digital asset webhook.");
  }

  updateRunButton() {
    const btn = document.querySelector("#btn-run-veeva");
    const stepBtn = document.querySelector("#btn-step-veeva");
    if (btn) {
      btn.innerHTML = `<i data-lucide="${this.isRunning ? "pause" : "play"}" class="btn-icon"></i> <span>${this.isRunning ? "Pause" : "Run Audit"}</span>`;
    }
    if (stepBtn) {
      stepBtn.disabled = this.isRunning;
    }
    if (window.lucide) {
      window.lucide.createIcons({ root: document.querySelector(".transport-btn-grid") });
    }
  }

  runNextStep() {
    if (!this.isRunning) return;
    this.executeStep(() => {
      if (this.currentStep < 6 && this.isRunning) {
        this.stepTimeout = setTimeout(() => this.runNextStep(), 850);
      } else {
        this.isRunning = false;
        this.updateRunButton();
      }
    });
  }

  setChecklistItem(id, status) { // status: 'pass' | 'fail' | 'warn'
    const item = document.querySelector(`#${id}`);
    if (!item) return;

    if (status === "pass") {
      item.className = "check-item status-pass";
      item.querySelector(".check-icon").outerHTML = `<i data-lucide="check-circle-2" class="check-icon text-emerald"></i>`;
    } else if (status === "fail") {
      item.className = "check-item status-fail";
      item.querySelector(".check-icon").outerHTML = `<i data-lucide="x-circle" class="check-icon text-rose"></i>`;
    } else if (status === "warn") {
      item.className = "check-item status-warn";
      item.querySelector(".check-icon").outerHTML = `<i data-lucide="alert-triangle" class="check-icon text-amber"></i>`;
    }

    if (window.lucide) window.lucide.createIcons({ root: item });
  }

  executeStep(onComplete) {
    this.currentStep++;

    switch (this.currentStep) {
      case 1:
        // Ingestion
        this.graphEngine.setNodeStatus("v-webhook", "running", { latency: "4.2ms", status: "WEBHOOK" });
        store.addLog("INFO", "[Veeva Vault] Ingestion webhook received: VV-DOC-908234-IT", "Staged for Italian market HCP distribution.");
        
        setTimeout(() => {
          this.graphEngine.setNodeStatus("v-webhook", "success", { latency: "12ms", status: "STAGED" });
          this.graphEngine.highlightEdge("ve1", "active");
          this.graphEngine.sendPacket("ve1", {
            color: "#38BDF8",
            speed: 0.025,
            onComplete: () => { if (onComplete) onComplete(); }
          });
        }, 300);
        break;

      case 2:
        // LayoutLM OCR
        this.graphEngine.setNodeStatus("v-ocr", "running", { latency: "24ms", status: "PARSING_PDF" });
        store.addLog("INFO", "[LayoutLM] Deconstructing multi-page brochure layout and typography...", "Classified headlines, medical tables, and mandatory warning blocks.");

        setTimeout(() => {
          this.graphEngine.setNodeStatus("v-ocr", "success", { latency: "88ms", status: "14 CLAIMS" });
          this.graphEngine.highlightEdge("ve2", "active");
          this.graphEngine.sendPacket("ve2", {
            color: "#818CF8",
            speed: 0.025,
            onComplete: () => { if (onComplete) onComplete(); }
          });
        }, 350);
        break;

      case 3:
        // Claim Decomposer Agent
        this.graphEngine.setNodeStatus("v-claim-decomposer", "running", { latency: "12ms", status: "ATOMIC_SPLIT" });
        store.addLog("INFO", "[Decomposer Agent] Disaggregating into 22 atomic clinical assertions...", "Mapping assertions to target SmPC sections (4.1 Indications, 4.8 Adverse Effects).");

        setTimeout(() => {
          this.graphEngine.setNodeStatus("v-claim-decomposer", "success", { latency: "34ms", status: "22 CLAIMS" });
          this.graphEngine.highlightEdge("ve3", "active");
          this.graphEngine.highlightEdge("ve4", "active");

          let finished = 0;
          const checkDone = () => {
            finished++;
            if (finished >= 2 && onComplete) onComplete();
          };

          this.graphEngine.sendPacket("ve3", { color: "#A855F7", speed: 0.022, onComplete: checkDone });
          this.graphEngine.sendPacket("ve4", { color: "#10B981", speed: 0.022, onComplete: checkDone });
        }, 350);
        break;

      case 4:
        // Parallel AIFA Rules + SmPC Verifier
        this.graphEngine.setNodeStatus("v-aifa-rules", "running", { latency: "10ms", status: "EVAL_ART_119" });
        this.graphEngine.setNodeStatus("v-smpc-verifier", "running", { latency: "15ms", status: "NLI_ALIGN" });

        setTimeout(() => {
          if (this.selectedScenario === "off-label") {
            // Off-label violation!
            this.graphEngine.setNodeStatus("v-aifa-rules", "error", { latency: "26ms", status: "VIOLATION" });
            this.graphEngine.setNodeStatus("v-smpc-verifier", "error", { latency: "31ms", status: "CONTRADICTION" });
            this.setChecklistItem("chk-art-119-1", "fail");
            this.setChecklistItem("chk-art-119-3", "pass");
            this.setChecklistItem("chk-fair-balance", "pass");

            store.addLog("ERROR", "[AIFA Violation] D.Lgs. 219/06 Art. 119(1) Breach: Unapproved indication claim!", "Claim 'Also approved as 1st-line monotherapy in triple-negative breast cancer' exceeds SmPC Section 4.1.");
          } else if (this.selectedScenario === "missing-warning") {
            // Missing warning
            this.graphEngine.setNodeStatus("v-aifa-rules", "warning", { latency: "26ms", status: "WARN_DISCLOSURE" });
            this.graphEngine.setNodeStatus("v-smpc-verifier", "success", { latency: "31ms", status: "MATCH_OK" });
            this.setChecklistItem("chk-art-119-1", "pass");
            this.setChecklistItem("chk-art-119-3", "pass");
            this.setChecklistItem("chk-fair-balance", "warn");

            store.addLog("WARN", "[AIFA Warning] Fair Balance Discrepancy: Grade 3 neutropenia black-box disclaimer missing in promotional summary.", "Requires mandatory disclosure insertion.");
          } else {
            // Fully compliant
            this.graphEngine.setNodeStatus("v-aifa-rules", "success", { latency: "26ms", status: "COMPLIANT" });
            this.graphEngine.setNodeStatus("v-smpc-verifier", "success", { latency: "31ms", status: "MATCH 100%" });
            this.setChecklistItem("chk-art-119-1", "pass");
            this.setChecklistItem("chk-art-119-3", "pass");
            this.setChecklistItem("chk-fair-balance", "pass");

            store.addLog("INFO", "[AIFA Rules] All 18 statutory checks satisfied under Italian D.Lgs. 219/06.", "Zero unapproved claims detected.");
          }

          this.graphEngine.highlightEdge("ve5", "active");
          this.graphEngine.highlightEdge("ve6", "active");

          let finished = 0;
          const checkDone = () => {
            finished++;
            if (finished >= 2 && onComplete) onComplete();
          };

          this.graphEngine.sendPacket("ve5", { color: this.selectedScenario === "off-label" ? "#EF4444" : "#A855F7", speed: 0.022, onComplete: checkDone });
          this.graphEngine.sendPacket("ve6", { color: this.selectedScenario === "off-label" ? "#EF4444" : "#10B981", speed: 0.022, onComplete: checkDone });
        }, 400);
        break;

      case 5:
        // Compliance Arbiter Gate
        this.graphEngine.setNodeStatus("v-decision-gate", "running", { latency: "3ms", status: "EVALUATING" });

        setTimeout(() => {
          if (this.selectedScenario === "off-label") {
            this.graphEngine.setNodeStatus("v-decision-gate", "error", { latency: "6ms", status: "LOCKED_HITL" });
            this.setChecklistItem("chk-cfr-11", "fail");
            store.addLog("ERROR", "[Compliance Gate] REJECTED & LOCKED: Dispatched high-priority alert to Medical Director queue.", "Salesforce and Veeva Vault public release blocked.");
            this.pauseFlow();
            return;
          }

          this.graphEngine.setNodeStatus("v-decision-gate", "success", { latency: "6ms", status: "APPROVED" });
          this.setChecklistItem("chk-cfr-11", "pass");
          store.addLog("INFO", "[Compliance Gate] Automated Sign-off Granted: Generating immutable 21 CFR Part 11 audit record.", "Dispatching to enterprise CRM bridge.");

          this.graphEngine.highlightEdge("ve7", "active");
          this.graphEngine.highlightEdge("ve8", "active");

          let finished = 0;
          const checkDone = () => {
            finished++;
            if (finished >= 2 && onComplete) onComplete();
          };

          this.graphEngine.sendPacket("ve7", { color: "#38BDF8", speed: 0.024, onComplete: checkDone });
          this.graphEngine.sendPacket("ve8", { color: "#10B981", speed: 0.024, onComplete: checkDone });
        }, 350);
        break;

      case 6:
        // Final Sync & Immutable Ledger
        this.graphEngine.setNodeStatus("v-audit-trail", "success", { latency: "9ms", status: "SHA256 SIGNED" });
        this.graphEngine.setNodeStatus("v-salesforce-sync", "success", { latency: "44ms", status: "FIELD ACTIVE" });
        store.addLog("INFO", "[Audit Ledger] 21 CFR Part 11 Cryptographic Record committed: sha256:7a9f190bc412...", "HSM signature valid.");
        store.addLog("INFO", "[Salesforce Sync] Successfully pushed verified asset to 84 field medical reps in Italy.", "Deposit authorization number watermark appended.");
        if (onComplete) onComplete();
        break;

      default:
        this.resetFlow();
        break;
    }
  }

  destroy() {
    clearTimeout(this.stepTimeout);
    this.isRunning = false;
    if (this.graphEngine) {
      this.graphEngine.destroy();
      this.graphEngine = null;
    }
  }
}


// ==========================================
// SOURCE: js\views\k8sOtelView.js
// ==========================================
/**
 * Mode 4: K8s HPA & OTel Traces View
 * Kubernetes Horizontal Pod Autoscaler (HPA) simulator with dynamic RPS scaling,
 * live Pod card grid, chaos pod termination, and OpenTelemetry Distributed Trace Gantt Waterfall.
 */


class K8sOtelView {
  constructor() {
    this.container = null;
    this.controlDock = null;
    this.unsubscribeStore = null;

    this.spansData = [
      {
        id: "span-1",
        name: "gateway.http_request",
        service: "fastapi-gateway",
        startMs: 0,
        durationMs: 135.5,
        color: "#38BDF8",
        attributes: {
          "http.method": "POST",
          "http.route": "/v1/chat/completions/agentic",
          "http.status_code": 200,
          "http.client_ip": "10.244.0.12",
          "net.peer.name": "ingress-controller.prod",
          "span.kind": "SERVER"
        }
      },
      {
        id: "span-2",
        name: "auth.jwt_validation",
        service: "auth-middleware",
        startMs: 2.1,
        durationMs: 4.2,
        color: "#818CF8",
        attributes: {
          "auth.algorithm": "RS256",
          "auth.issuer": "https://auth.internal.corp",
          "auth.subject": "usr_99214_oncology_lead",
          "auth.valid": true
        }
      },
      {
        id: "span-3",
        name: "redis.rate_limiter",
        service: "redis-cluster",
        startMs: 6.5,
        durationMs: 1.8,
        color: "#F59E0B",
        attributes: {
          "db.system": "redis",
          "db.statement": "EVALSHA token_bucket.lua 1 ratelimit:usr_99214 500 60",
          "rate_limit.allowed": true,
          "rate_limit.remaining": 488
        }
      },
      {
        id: "span-4",
        name: "langgraph.orchestrator",
        service: "agent-supervisor",
        startMs: 8.5,
        durationMs: 14.6,
        color: "#6366F1",
        attributes: {
          "langgraph.state.step": 1,
          "langgraph.state.max_steps": 8,
          "langgraph.intent": "CLINICAL_TRIAL_EVALUATION",
          "langgraph.dispatch_mode": "PARALLEL_TOOL_CALL"
        }
      },
      {
        id: "span-5",
        name: "vector_db.qdrant_query",
        service: "qdrant-vector-db",
        startMs: 23.5,
        durationMs: 22.4,
        color: "#A855F7",
        attributes: {
          "db.system": "qdrant",
          "qdrant.collection": "clinical_trials_oncology_v3",
          "qdrant.search_type": "HNSW_DENSE_HYBRID",
          "qdrant.top_k": 4,
          "qdrant.max_score": 0.942
        }
      },
      {
        id: "span-6",
        name: "sandbox.tool_execution",
        service: "ebpf-sandbox-runner",
        startMs: 24.1,
        durationMs: 38.1,
        color: "#10B981",
        attributes: {
          "sandbox.runtime": "gVisor (runsc) / eBPF",
          "sandbox.command": "python -c 'import numpy as np; ...'",
          "sandbox.exit_code": 0,
          "sandbox.memory_bytes": 25690112
        }
      },
      {
        id: "span-7",
        name: "llm.vllm_generation",
        service: "vllm-cluster-gpu",
        startMs: 62.5,
        durationMs: 58.4,
        color: "#EC4899",
        attributes: {
          "llm.model": "meta-llama/Llama-3.3-70B-Instruct-AWQ",
          "llm.usage.prompt_tokens": 894,
          "llm.usage.completion_tokens": 318,
          "llm.latency.ttft_ms": 42.8,
          "llm.throughput.tokens_per_sec": 68.2
        }
      },
      {
        id: "span-8",
        name: "guardrail.aifa_audit",
        service: "safety-guardrail",
        startMs: 121.2,
        durationMs: 11.2,
        color: "#F43F5E",
        attributes: {
          "guardrail.regulatory_body": "AIFA_D.Lgs.219/06",
          "guardrail.hallucination_score": 0.02,
          "guardrail.smpc_compliant": true,
          "guardrail.decision": "PASSED"
        }
      },
      {
        id: "span-9",
        name: "otel.trace_exporter",
        service: "jaeger-collector",
        startMs: 133.0,
        durationMs: 2.2,
        color: "#06B6D4",
        attributes: {
          "otel.status_code": "OK",
          "otel.spans_count": 9,
          "otel.export_protocol": "gRPC / OTLP"
        }
      }
    ];
  }

  mount(viewportEl, controlDockEl) {
    this.container = viewportEl;
    this.controlDock = controlDockEl;

    this.renderLayout();
    this.renderControlDock();
    this.attachInteractions();

    this.selectSpan(this.spansData[0]);

    if (window.lucide) {
      window.lucide.createIcons({ root: this.container });
    }
  }

  renderLayout() {
    const k8sState = store.getState().k8sState;

    this.container.innerHTML = `
      <div class="view-header-bar">
        <div class="view-title-group">
          <span class="view-mode-tag">MODE 04</span>
          <h2 class="view-title">Kubernetes HPA & OpenTelemetry Distributed Tracing</h2>
          <span class="view-subtitle">Dynamic Replicas • Pod Health • Gantt Waterfall</span>
        </div>
        <div class="view-action-group">
          <span class="badge-pill bg-cyan"><i data-lucide="server" class="pill-icon"></i> K8s HPA v1.30</span>
          <span class="badge-pill bg-purple"><i data-lucide="git-commit" class="pill-icon"></i> OTel 1.25</span>
        </div>
      </div>

      <div class="k8s-otel-workspace">
        <!-- TOP: Kubernetes Cluster HPA & Pod Grid -->
        <div class="k8s-pod-section">
          <div class="k8s-section-header">
            <div class="k8s-title-group">
              <i data-lucide="layers" class="dock-icon"></i>
              <span class="k8s-heading">HorizontalPodAutoscaler: <code>agent-runtime-worker</code></span>
            </div>
            <div class="k8s-stats-badges">
              <span class="badge-k8s">Namespace: <code>ai-platform</code></span>
              <span class="badge-k8s">Target: <code>${k8sState.targetCpu}% CPU</code></span>
              <span class="badge-k8s text-emerald">Replicas: <strong>${k8sState.activePods} / ${k8sState.maxPods}</strong></span>
            </div>
          </div>

          <div class="pod-cards-grid" id="pod-grid-container">
            ${this.renderPodCards()}
          </div>
        </div>

        <!-- BOTTOM: OpenTelemetry Trace Gantt Waterfall -->
        <div class="otel-trace-section">
          <div class="otel-trace-header">
            <div class="otel-title-group">
              <i data-lucide="git-branch" class="text-purple"></i>
              <span class="otel-heading">Distributed Trace Waterfall: <code>POST /v1/chat/completions/agentic</code></span>
              <span class="trace-id-pill">Trace ID: <code>4bf92f3577b3...</code></span>
            </div>
            <div class="otel-meta-tags">
              <span class="trace-meta-tag"><i data-lucide="clock"></i> 135.5ms</span>
              <span class="trace-meta-tag"><i data-lucide="hash"></i> 9 Spans</span>
              <span class="trace-meta-tag text-emerald"><i data-lucide="check-circle-2"></i> 200 OK</span>
            </div>
          </div>

          <div class="trace-waterfall-container">
            <div class="waterfall-time-ruler">
              <span class="ruler-label-blank">Service / Span Operation</span>
              <span class="ruler-tick">0ms</span>
              <span class="ruler-tick">25ms</span>
              <span class="ruler-tick">50ms</span>
              <span class="ruler-tick">75ms</span>
              <span class="ruler-tick">100ms</span>
              <span class="ruler-tick">125ms</span>
            </div>

            <div class="waterfall-spans-list" id="spans-list-container">
              ${this.renderWaterfallSpans()}
            </div>
          </div>
        </div>
      </div>
    `;

    if (window.lucide) {
      window.lucide.createIcons({ root: this.container });
    }
  }

  renderPodCards() {
    const k8sState = store.getState().k8sState;
    const podList = [];

    for (let i = 1; i <= k8sState.activePods; i++) {
      const isCrashed = k8sState.chaosActive && i === 2;
      const podCpu = isCrashed ? 99 : Math.max(12, Math.min(95, Math.round(k8sState.currentCpu + (Math.sin(i * 1.5) * 10))));
      const podMem = isCrashed ? 984 : Math.round(340 + i * 42);

      podList.push(`
        <div class="pod-card ${isCrashed ? 'is-crashed' : 'is-healthy'}" id="pod-item-${i}">
          <div class="pod-card-top">
            <div class="pod-name-group">
              <i data-lucide="${isCrashed ? 'alert-octagon' : 'cpu'}" class="pod-icon ${isCrashed ? 'text-rose' : 'text-cyan'}"></i>
              <span class="pod-name">worker-0${i}</span>
            </div>
            <span class="pod-status-badge ${isCrashed ? 'badge-rose' : 'badge-emerald'}">
              ${isCrashed ? "OOMKilled" : "Running 1/1"}
            </span>
          </div>

          <div class="pod-metrics-bars">
            <div class="pod-metric-row">
              <div class="flex justify-between">
                <span class="metric-label">CPU Usage</span>
                <span class="metric-label text-mono">${podCpu}%</span>
              </div>
              <div class="metric-bar-bg">
                <div class="metric-bar-fill ${podCpu > 80 ? 'fill-rose' : 'fill-cyan'}" style="width: ${podCpu}%"></div>
              </div>
            </div>
            <div class="pod-metric-row">
              <div class="flex justify-between">
                <span class="metric-label">Memory</span>
                <span class="metric-label text-mono">${podMem} MB</span>
              </div>
              <div class="metric-bar-bg">
                <div class="metric-bar-fill fill-purple" style="width: ${Math.min(100, (podMem / 1024) * 100)}%"></div>
              </div>
            </div>
          </div>

          <div class="pod-card-footer">
            <span>Node: ip-10-0-${10 + i}</span>
            <span>Restarts: ${isCrashed ? '3' : '0'}</span>
          </div>
        </div>
      `);
    }

    return podList.join("");
  }

  renderWaterfallSpans() {
    const totalDuration = 145.0; // max scale width ms
    const k8sState = store.getState().k8sState;

    return this.spansData.map((span) => {
      const isSelected = span.id === k8sState.selectedSpanId;
      const leftPct = (span.startMs / totalDuration) * 100;
      const widthPct = Math.max(1.8, (span.durationMs / totalDuration) * 100);
      const isShort = widthPct < 14;

      return `
        <div class="trace-span-row ${isSelected ? 'is-selected' : ''}" data-span-id="${span.id}">
          <div class="span-label-col">
            <span class="span-service-badge" style="border-left: 2px solid ${span.color};">${span.service}</span>
            <span class="span-operation-name" title="${span.name}">${span.name}</span>
          </div>
          <div class="span-bar-track">
            <div class="span-bar-fill" style="left: ${leftPct}%; width: ${widthPct}%; background-color: ${span.color}">
              ${!isShort ? `<span class="span-duration-label">${span.durationMs.toFixed(1)}ms</span>` : ''}
            </div>
            ${isShort ? `<span class="span-duration-label text-mono" style="position: absolute; left: calc(${leftPct + widthPct}% + 6px); color: #94A3B8; font-size: 8.5px;">${span.durationMs.toFixed(1)}ms</span>` : ''}
          </div>
        </div>
      `;
    }).join("");
  }

  renderControlDock() {
    const k8sState = store.getState().k8sState;

    this.controlDock.innerHTML = `
      <div class="dock-section">
        <div class="dock-section-title">
          <i data-lucide="gauge" class="dock-icon"></i>
          <span>GATEWAY LOAD GENERATOR (RPS)</span>
        </div>
        <div class="slider-control-card">
          <div class="slider-header">
            <span class="slider-label">Throughput</span>
            <span class="slider-value text-cyan" id="val-rps-display">${k8sState.rps} RPS</span>
          </div>
          <input type="range" id="slider-rps" min="50" max="5000" step="50" value="${k8sState.rps}" class="custom-range-slider">
          <div class="slider-scale-labels">
            <span>50 RPS</span>
            <span>2.5k</span>
            <span>5k RPS</span>
          </div>
        </div>
      </div>

      <div class="dock-section">
        <div class="dock-section-title">
          <i data-lucide="activity" class="dock-icon"></i>
          <span>HPA SCALING TELEMETRY</span>
        </div>
        <div class="metrics-mini-grid">
          <div class="metric-mini-card">
            <span class="metric-mini-label">Cluster CPU</span>
            <span class="metric-mini-val ${k8sState.currentCpu > 70 ? 'text-rose' : 'text-emerald'}" id="val-cpu-gauge">${k8sState.currentCpu}%</span>
          </div>
          <div class="metric-mini-card">
            <span class="metric-mini-label">Target Max</span>
            <span class="metric-mini-val text-amber">70% CPU</span>
          </div>
          <div class="metric-mini-card">
            <span class="metric-mini-label">Active Pods</span>
            <span class="metric-mini-val text-indigo" id="val-pods-count">${k8sState.activePods} Pods</span>
          </div>
          <div class="metric-mini-card">
            <span class="metric-mini-label">Headroom</span>
            <span class="metric-mini-val text-cyan">${(k8sState.activePods * 550) - k8sState.rps} RPS</span>
          </div>
        </div>
      </div>

      <div class="dock-section">
        <div class="dock-section-title">
          <i data-lucide="zap-off" class="dock-icon"></i>
          <span>CHAOS RESILIENCE TEST</span>
        </div>
        <button id="btn-pod-chaos" class="btn-transport ${k8sState.chaosActive ? 'btn-danger' : 'btn-secondary'} w-full">
          <i data-lucide="${k8sState.chaosActive ? 'rotate-ccw' : 'flame'}" class="btn-icon"></i>
          <span>${k8sState.chaosActive ? "Restore Terminated Pod" : "Simulate Pod OOMKill"}</span>
        </button>
        <p class="dock-hint-text">Triggers kernel cgroup OOMKilled signal on worker pod to test HPA self-healing resilience.</p>
      </div>
    `;

    if (window.lucide) {
      window.lucide.createIcons({ root: this.controlDock });
    }

    const rpsSlider = this.controlDock.querySelector("#slider-rps");
    rpsSlider.addEventListener("input", (e) => {
      const rps = parseInt(e.target.value, 10);
      store.setK8sRps(rps);
      this.updateClusterView();
    });

    const chaosBtn = this.controlDock.querySelector("#btn-pod-chaos");
    chaosBtn.addEventListener("click", () => {
      store.toggleK8sChaos();
      this.updateClusterView();
      this.renderControlDock();
    });
  }

  updateClusterView() {
    const k8sState = store.getState().k8sState;

    const rpsDisplay = this.controlDock.querySelector("#val-rps-display");
    const cpuDisplay = this.controlDock.querySelector("#val-cpu-gauge");
    const podsDisplay = this.controlDock.querySelector("#val-pods-count");
    if (rpsDisplay) rpsDisplay.textContent = `${k8sState.rps} RPS`;
    if (cpuDisplay) {
      cpuDisplay.textContent = `${k8sState.currentCpu}%`;
      cpuDisplay.className = `metric-mini-val ${k8sState.currentCpu > 70 ? 'text-rose' : 'text-emerald'}`;
    }
    if (podsDisplay) podsDisplay.textContent = `${k8sState.activePods} Pods`;

    const podGrid = this.container.querySelector("#pod-grid-container");
    if (podGrid) {
      podGrid.innerHTML = this.renderPodCards();
      if (window.lucide) window.lucide.createIcons({ root: podGrid });
    }
  }

  attachInteractions() {
    const spansList = this.container.querySelector("#spans-list-container");
    if (!spansList) return;

    spansList.querySelectorAll(".trace-span-row").forEach((row) => {
      row.addEventListener("click", () => {
        const spanId = row.getAttribute("data-span-id");
        const span = this.spansData.find(s => s.id === spanId);
        if (span) {
          this.selectSpan(span);
        }
      });
    });
  }

  selectSpan(span) {
    store.setK8sSpan(span.id);

    this.container.querySelectorAll(".trace-span-row").forEach((row) => {
      if (row.getAttribute("data-span-id") === span.id) {
        row.classList.add("is-selected");
      } else {
        row.classList.remove("is-selected");
      }
    });

    const inspectorPayload = {
      id: span.id,
      label: `Span: ${span.name}`,
      sublabel: `Service: ${span.service}`,
      category: "otel-span",
      metrics: {
        duration: `${span.durationMs.toFixed(1)}ms`,
        service: span.service,
        status: "STATUS_CODE_OK",
        start_offset: `+${span.startMs.toFixed(1)}ms`
      },
      payload: {
        trace_id: "4bf92f3577b34da6a3ce929d0e0e4736",
        span_id: span.id.replace("span-", "000000000000000"),
        parent_span_id: span.id === "span-1" ? null : "0000000000000001",
        name: span.name,
        service_name: span.service,
        duration_ms: span.durationMs,
        attributes: span.attributes
      },
      code: `# OpenTelemetry Instrumentation for ${span.service}\nfrom opentelemetry import trace\nfrom opentelemetry.trace import Status, StatusCode\n\ntracer = trace.get_tracer("${span.service}", "1.25.0")\n\nwith tracer.start_as_current_span("${span.name}") as current_span:\n${Object.entries(span.attributes).map(([k, v]) => `    current_span.set_attribute("${k}", ${JSON.stringify(v)})`).join('\n')}\n    current_span.set_status(Status(StatusCode.OK))`
    };

    store.selectNode(inspectorPayload);
  }

  destroy() {
    if (this.unsubscribeStore) {
      this.unsubscribeStore();
      this.unsubscribeStore = null;
    }
  }
}


// ==========================================
// SOURCE: js\views\resumeView.js
// ==========================================
/**
 * Mode 5: Executive Resume & CamcomAI Edge CV View
 * Official Executive Profile for Jayantha BS (Senior Software Engineer — AI Platforms, Multi-Agent Runtimes & Backend Systems)
 * Integrated with CamcomAI AICAMERA 15 FPS Real-Time Inspection & Orientation Classification Simulator.
 */


class ResumeView {
  constructor() {
    this.container = null;
    this.controlDock = null;
    this.canvas = null;
    this.ctx = null;
    this.animationId = null;

    // 15 FPS locked loop timing
    this.fps = 15;
    this.frameInterval = 1000 / this.fps; // 66.67 ms
    this.lastFrameTime = performance.now();
    this.frameCount = 0;
    this.isPlaying = true;

    // Moving inspection canvas state
    this.scanOffset = 0;
    this.defects = [
      { id: "DEF-01", type: "Quarter Panel Dent", x: 130, y: 110, width: 170, height: 50, confidence: 96.4, color: "#F59E0B", severity: "CRITICAL" },
      { id: "DEF-02", type: "Bumper Surface Scratch", x: 360, y: 150, width: 150, height: 80, confidence: 98.2, color: "#EF4444", severity: "HIGH" },
      { id: "DEF-03", type: "Door Paint Scuff", x: 180, y: 220, width: 110, height: 55, confidence: 92.5, color: "#38BDF8", severity: "MEDIUM" },
      { id: "DEF-04", type: "Windshield Micro Crack", x: 410, y: 65, width: 130, height: 48, confidence: 89.8, color: "#A855F7", severity: "HIGH" }
    ];

    this.selectedDefectId = "DEF-01";
  }

  mount(viewportEl, controlDockEl) {
    this.container = viewportEl;
    this.controlDock = controlDockEl;

    this.renderLayout();
    this.renderControlDock();
    this.initCanvasSimulation();
    this.selectDefect(this.defects[0]);

    if (window.lucide) {
      window.lucide.createIcons({ root: this.container });
    }
  }

  renderLayout() {
    this.container.innerHTML = `
      <div class="view-header-bar">
        <div class="view-title-group">
          <span class="view-mode-tag">MODE 05</span>
          <h2 class="view-title">Executive Engineering Profile & AICAMERA Edge CV</h2>
          <span class="view-subtitle">Jayantha BS • Senior Software Engineer • AI Platforms, Multi-Agent Runtimes & Backend Systems</span>
        </div>
        <div class="view-action-group">
          <a href="${resumeData.profile.pdfResumePath}" download="Jayantha_BS_Resume.pdf" class="btn-nav-action btn-pdf-highlight">
            <i data-lucide="download" class="pill-icon"></i> Download PDF Resume
          </a>
        </div>
      </div>

      <div class="resume-scroll-container">
        <!-- TOP: HERO BIOGRAPHY & IMPACT METRICS -->
        <div class="resume-hero-banner">
          <div class="hero-header-row">
            <div class="hero-identity">
              <h1 class="hero-name">${resumeData.profile.name}</h1>
              <div class="hero-title">${resumeData.profile.role.toUpperCase()} • <span class="text-indigo">${resumeData.profile.specialization}</span></div>
              <div class="hero-location-row">
                <span><i data-lucide="map-pin"></i> ${resumeData.profile.location}</span>
                <span><i data-lucide="phone"></i> ${resumeData.profile.phone}</span>
                <span><i data-lucide="mail"></i> ${resumeData.profile.email}</span>
                <span class="status-live-chip"><span class="pulse-dot"></span> ${resumeData.profile.statusBadge}</span>
              </div>
            </div>
            <div class="hero-contact-actions">
              <a href="mailto:${resumeData.profile.email}" class="btn-hero-contact">
                <i data-lucide="mail"></i> Email
              </a>
              <a href="${resumeData.profile.linkedin}" target="_blank" rel="noopener noreferrer" class="btn-hero-contact">
                <i data-lucide="linkedin"></i> LinkedIn
              </a>
              <a href="tel:${resumeData.profile.phone.replace(/\s+/g, '')}" class="btn-hero-contact">
                <i data-lucide="phone"></i> Call
              </a>
            </div>
          </div>

          <div class="summary-card-inner">
            <div class="summary-label text-dim text-mono" style="font-size: 9.5px; font-weight: 700; margin-bottom: 4px;">PROFESSIONAL SUMMARY</div>
            <p class="hero-summary-text">${resumeData.profile.summary}</p>
          </div>

          <!-- HERO IMPACT METRICS GRID -->
          <div class="hero-stats-row">
            ${resumeData.heroStats.map(stat => `
              <div class="hero-stat-card border-accent-${stat.accent}">
                <div class="stat-card-top">
                  <span class="stat-card-val text-${stat.accent}">${stat.value}</span>
                  <i data-lucide="${stat.icon}" class="stat-card-icon text-${stat.accent}"></i>
                </div>
                <div class="stat-card-label">${stat.label}</div>
                <div class="stat-card-sub">${stat.subtext}</div>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- MIDDLE: CAMCOMAI AICAMERA 15FPS EDGE CV SIMULATOR -->
        <div class="edge-cv-section-wrapper">
          <div class="edge-cv-header-row">
            <div class="edge-cv-title-group">
              <span class="badge-pill bg-indigo"><i data-lucide="camera" class="pill-icon"></i> CamcomAI Platform</span>
              <h3 class="edge-cv-heading">AICAMERA: Real-Time 15 FPS Vehicle Inspection & Telemetry Capture</h3>
              <span class="edge-cv-subtext">Browser MediaDevices API • In-House Orientation Classifier • Precise GPS Audit Stream</span>
            </div>
            <div class="edge-cv-live-badge">
              <span class="fps-meter-chip"><i data-lucide="activity"></i> <strong id="live-fps-val">15.0</strong> FPS LOCKED</span>
              <span class="latency-chip"><i data-lucide="clock"></i> <strong>58.4</strong> ms / 66.7 ms</span>
            </div>
          </div>

          <div class="edge-cv-dual-pane">
            <!-- Inspection Canvas Feed -->
            <div class="edge-cv-canvas-box">
              <canvas id="edge-cv-canvas" width="600" height="340" class="edge-canvas"></canvas>
              <div class="canvas-overlay-hud">
                <div class="hud-top">
                  <span class="hud-tag">STREAM: AICAMERA_FRONT_45_DEG (15 FPS MediaDevices)</span>
                  <span class="hud-tag">FRAME: <span id="hud-frame-counter">000000</span></span>
                </div>
                <div class="hud-bottom">
                  <span class="hud-tag">ORIENTATION: SIDE_LEFT_FRONT (CONFIRMED 97.4%)</span>
                  <span class="hud-tag">GPS: 12.9716° N, 77.5946° E (GEO-VERIFIED)</span>
                </div>
              </div>
            </div>

            <!-- Frame Latency Budget & Defect Registry -->
            <div class="edge-cv-telemetry-box">
              <div class="edge-box-title">Per-Frame Telemetry Budget Breakdown (&lt;66.67ms Target)</div>
              <div class="latency-budget-bar">
                ${resumeData.camcomEdgeSpecs.stages.map(st => `
                  <div class="budget-segment" style="width: ${(st.budgetMs / 66.67) * 100}%; background-color: ${st.color}" title="${st.name}: ${st.budgetMs}ms"></div>
                `).join('')}
              </div>
              <div class="budget-legend">
                ${resumeData.camcomEdgeSpecs.stages.map(st => `
                  <div class="legend-item">
                    <span class="legend-color-dot" style="background-color: ${st.color}"></span>
                    <span class="legend-name">${st.name}</span>
                    <span class="legend-ms text-mono">${st.budgetMs}ms</span>
                  </div>
                `).join('')}
              </div>

              <div class="edge-box-title mt-4">Detected Vehicle Anomalies (Click to Inspect)</div>
              <div class="edge-defects-list" id="defect-items-container">
                ${this.renderDefectList()}
              </div>
            </div>
          </div>
        </div>

        <!-- BOTTOM: DETAILED CAREER EXPERIENCE & COMPETENCIES -->
        <div class="resume-details-grid">
          <!-- Left: Experience Timeline -->
          <div class="resume-experience-col">
            <h3 class="section-title"><i data-lucide="briefcase"></i> Professional Architecture Experience</h3>
            <div class="experience-timeline">
              ${resumeData.experience.map(exp => `
                <div class="timeline-entry">
                  <div class="timeline-dot"></div>
                  <div class="timeline-header">
                    <div>
                      <h4 class="timeline-role">${exp.role}</h4>
                      <div class="timeline-company text-indigo">${exp.company} • ${exp.location}</div>
                    </div>
                    <span class="timeline-period">${exp.period}</span>
                  </div>
                  <p class="timeline-summary">${exp.summary}</p>
                  
                  ${exp.subsections ? exp.subsections.map(sub => `
                    <div class="experience-subsection mt-2">
                      <div class="sub-heading text-cyan text-mono" style="font-size: 10px; font-weight: 700; letter-spacing: 0.04em;">${sub.heading}</div>
                      <ul class="timeline-bullets mt-1">
                        ${sub.points.map(pt => `<li>${pt}</li>`).join('')}
                      </ul>
                    </div>
                  `).join('') : ''}

                  <div class="timeline-stack-chips mt-2">
                    ${exp.stack.map(st => `<span class="stack-chip">${st}</span>`).join('')}
                  </div>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Right: Technical Skills & Education -->
          <div class="resume-competencies-col">
            <h3 class="section-title"><i data-lucide="cpu"></i> Core Technical Competencies</h3>
            <div class="competencies-stack">
              ${resumeData.coreCompetencies.map(cat => `
                <div class="competency-card">
                  <div class="comp-card-header">
                    <i data-lucide="${cat.icon}" class="text-cyan"></i>
                    <span class="comp-card-title">${cat.category}</span>
                  </div>
                  <div class="comp-chips-cloud">
                    ${cat.skills.map(sk => `<span class="comp-chip">${sk}</span>`).join('')}
                  </div>
                </div>
              `).join('')}
            </div>

            <h3 class="section-title mt-6"><i data-lucide="layers"></i> Technical Skills Directory</h3>
            <div class="competencies-stack">
              ${resumeData.technicalSkillsCategories.map(cat => `
                <div class="competency-card">
                  <div class="comp-card-header">
                    <span class="comp-card-title text-indigo" style="font-size: 10.5px;">${cat.name}</span>
                  </div>
                  <div class="comp-chips-cloud">
                    ${cat.items.map(item => `<span class="comp-chip" style="font-size: 9.5px;">${item}</span>`).join('')}
                  </div>
                </div>
              `).join('')}
            </div>

            <h3 class="section-title mt-6"><i data-lucide="graduation-cap"></i> Education</h3>
            <div class="certifications-list">
              ${resumeData.education.map(edu => `
                <div class="cert-item">
                  <i data-lucide="award" class="text-emerald"></i>
                  <div>
                    <div class="cert-name">${edu.degree}</div>
                    <div class="cert-issuer">${edu.institution} • ${edu.period}</div>
                    <div class="text-dim text-mono" style="font-size: 9px; margin-top: 2px;">${edu.location}</div>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      </div>
    `;

    if (window.lucide) {
      window.lucide.createIcons({ root: this.container });
    }
  }

  renderDefectList() {
    return this.defects.map(def => {
      const isSelected = def.id === this.selectedDefectId;
      return `
        <div class="defect-list-item ${isSelected ? 'is-selected' : ''}" data-defect-id="${def.id}">
          <div class="defect-item-left">
            <span class="defect-badge-dot" style="background-color: ${def.color}"></span>
            <span class="defect-item-type">${def.type}</span>
          </div>
          <div class="defect-item-right">
            <span class="defect-conf-pill" style="color: ${def.color}">${def.confidence}%</span>
            <span class="defect-sev-tag">${def.severity}</span>
          </div>
        </div>
      `;
    }).join("");
  }

  renderControlDock() {
    this.controlDock.innerHTML = `
      <div class="dock-section">
        <div class="dock-section-title">
          <i data-lucide="sliders" class="dock-icon"></i>
          <span>AICAMERA CONTROLS</span>
        </div>
        <div class="transport-btn-grid">
          <button id="btn-toggle-cv" class="btn-transport btn-primary">
            <i data-lucide="pause" class="btn-icon"></i>
            <span>Pause Stream</span>
          </button>
          <button id="btn-trigger-flaw" class="btn-transport btn-secondary">
            <i data-lucide="alert-triangle" class="btn-icon"></i>
            <span>Simulate Flaw</span>
          </button>
        </div>
      </div>

      <div class="dock-section">
        <div class="dock-section-title">
          <i data-lucide="filter" class="dock-icon"></i>
          <span>CONFIDENCE THRESHOLD</span>
        </div>
        <div class="slider-control-card">
          <div class="slider-header">
            <span class="slider-label">Detection Cutoff</span>
            <span class="slider-value text-indigo" id="val-cv-conf">85%</span>
          </div>
          <input type="range" id="slider-cv-conf" min="70" max="98" step="1" value="85" class="custom-range-slider">
          <div class="slider-scale-labels">
            <span>70% (High Recall)</span>
            <span>85% (Optimal)</span>
            <span>98%</span>
          </div>
        </div>
      </div>

      <div class="dock-section">
        <div class="dock-section-title">
          <i data-lucide="video" class="dock-icon"></i>
          <span>BROWSER STREAM TELEMETRY</span>
        </div>
        <div class="metrics-mini-grid">
          <div class="metric-mini-card">
            <span class="metric-mini-label">Stream API</span>
            <span class="metric-mini-val text-cyan">MediaDevices</span>
          </div>
          <div class="metric-mini-card">
            <span class="metric-mini-label">Locked FPS</span>
            <span class="metric-mini-val text-emerald">15.0 FPS</span>
          </div>
          <div class="metric-mini-card">
            <span class="metric-mini-label">Frame Budget</span>
            <span class="metric-mini-val text-indigo">66.67 ms</span>
          </div>
          <div class="metric-mini-card">
            <span class="metric-mini-label">Actual Latency</span>
            <span class="metric-mini-val text-purple">58.4 ms</span>
          </div>
        </div>
      </div>

      <div class="dock-section">
        <div class="dock-section-title">
          <i data-lucide="user-check" class="dock-icon"></i>
          <span>EXECUTIVE CANDIDATE</span>
        </div>
        <p class="dock-hint-text">Jayantha BS • 6+ years experience architecting multi-agent LangGraph runtimes, AIFA regulatory engines, and CamcomAI 15 FPS vision platform.</p>
      </div>
    `;

    if (window.lucide) {
      window.lucide.createIcons({ root: this.controlDock });
    }

    const toggleBtn = this.controlDock.querySelector("#btn-toggle-cv");
    toggleBtn.addEventListener("click", () => {
      this.isPlaying = !this.isPlaying;
      toggleBtn.innerHTML = `<i data-lucide="${this.isPlaying ? 'pause' : 'play'}" class="btn-icon"></i> <span>${this.isPlaying ? 'Pause Stream' : 'Resume Stream'}</span>`;
      if (window.lucide) window.lucide.createIcons({ root: toggleBtn });
      store.addLog("INFO", `CamcomAI 15 FPS Stream ${this.isPlaying ? 'RESUMED' : 'PAUSED'}.`);
    });

    const triggerFlawBtn = this.controlDock.querySelector("#btn-trigger-flaw");
    triggerFlawBtn.addEventListener("click", () => {
      const newDefect = {
        id: `DEF-0${this.defects.length + 1}`,
        type: "Structural Fender Impact",
        x: Math.round(110 + Math.random() * 340),
        y: Math.round(75 + Math.random() * 150),
        width: 135,
        height: 65,
        confidence: 97.4,
        color: "#EF4444",
        severity: "CRITICAL"
      };
      this.defects.push(newDefect);
      this.selectDefect(newDefect);
      this.updateDefectList();
      store.addLog("ERROR", `[CamcomAI AICAMERA] Injected flaw detected: ${newDefect.type} (${newDefect.confidence}%)`, `Coordinate bounding box: [x:${newDefect.x}, y:${newDefect.y}]. Geo-audit verified.`);
    });

    const sliderConf = this.controlDock.querySelector("#slider-cv-conf");
    const valConf = this.controlDock.querySelector("#val-cv-conf");
    sliderConf.addEventListener("input", (e) => {
      const val = parseInt(e.target.value, 10);
      valConf.textContent = `${val}%`;
    });
  }

  initCanvasSimulation() {
    this.canvas = this.container.querySelector("#edge-cv-canvas");
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext("2d");

    this.attachDefectInteractions();

    const loop = (timestamp) => {
      const elapsed = timestamp - this.lastFrameTime;

      if (this.isPlaying && elapsed >= this.frameInterval) {
        this.lastFrameTime = timestamp - (elapsed % this.frameInterval);
        this.renderCanvasFrame();
        this.frameCount++;

        const counterEl = this.container.querySelector("#hud-frame-counter");
        if (counterEl) {
          counterEl.textContent = String(this.frameCount).padStart(6, "0");
        }
      }

      this.animationId = requestAnimationFrame(loop);
    };

    this.animationId = requestAnimationFrame(loop);
  }

  renderCanvasFrame() {
    if (!this.ctx || !this.canvas) return;
    const w = this.canvas.width;
    const h = this.canvas.height;

    // 1. Clear background (simulated vehicle camera feed)
    this.ctx.fillStyle = "#0a0e17";
    this.ctx.fillRect(0, 0, w, h);

    // 2. Perspective grid
    this.ctx.strokeStyle = "rgba(255, 255, 255, 0.04)";
    this.ctx.lineWidth = 1;
    for (let x = 0; x < w; x += 35) {
      this.ctx.beginPath();
      this.ctx.moveTo(x, 0);
      this.ctx.lineTo(x, h);
      this.ctx.stroke();
    }
    for (let y = 0; y < h; y += 35) {
      this.ctx.beginPath();
      this.ctx.moveTo(0, y);
      this.ctx.lineTo(w, y);
      this.ctx.stroke();
    }

    // 3. Animated vertical laser scan line
    this.scanOffset = (this.scanOffset + 3.0) % w;
    this.ctx.strokeStyle = "rgba(56, 189, 248, 0.55)";
    this.ctx.lineWidth = 2;
    this.ctx.shadowColor = "#38BDF8";
    this.ctx.shadowBlur = 8;
    this.ctx.beginPath();
    this.ctx.moveTo(this.scanOffset, 0);
    this.ctx.lineTo(this.scanOffset, h);
    this.ctx.stroke();
    this.ctx.shadowBlur = 0;

    // 4. Vehicle silhouette contour
    this.ctx.strokeStyle = "rgba(99, 102, 241, 0.3)";
    this.ctx.lineWidth = 2;
    this.ctx.beginPath();
    this.ctx.roundRect(45, 35, w - 90, h - 70, 16);
    this.ctx.stroke();

    // Orientation Guide Brackets (CamcomAI In-House Vehicle-Side Classification)
    this.ctx.strokeStyle = "#10B981";
    this.ctx.lineWidth = 2;
    // Top-Left corner guide
    this.ctx.beginPath();
    this.ctx.moveTo(20, 40);
    this.ctx.lineTo(20, 20);
    this.ctx.lineTo(40, 20);
    this.ctx.stroke();
    // Top-Right corner guide
    this.ctx.beginPath();
    this.ctx.moveTo(w - 40, 20);
    this.ctx.lineTo(w - 20, 20);
    this.ctx.lineTo(w - 20, 40);
    this.ctx.stroke();
    // Bottom-Left corner guide
    this.ctx.beginPath();
    this.ctx.moveTo(20, h - 40);
    this.ctx.lineTo(20, h - 20);
    this.ctx.lineTo(40, h - 20);
    this.ctx.stroke();
    // Bottom-Right corner guide
    this.ctx.beginPath();
    this.ctx.moveTo(w - 40, h - 20);
    this.ctx.lineTo(w - 20, h - 20);
    this.ctx.lineTo(w - 20, h - 40);
    this.ctx.stroke();

    // 5. Active anomaly bounding boxes
    const sliderConf = this.controlDock.querySelector("#slider-cv-conf");
    const cutoff = sliderConf ? parseInt(sliderConf.value, 10) : 85;

    this.defects.forEach((def) => {
      if (def.confidence < cutoff) return;

      const isSelected = def.id === this.selectedDefectId;

      this.ctx.strokeStyle = def.color;
      this.ctx.lineWidth = isSelected ? 2.5 : 1.5;
      this.ctx.shadowColor = def.color;
      this.ctx.shadowBlur = isSelected ? 10 : 4;
      this.ctx.strokeRect(def.x, def.y, def.width, def.height);
      this.ctx.shadowBlur = 0;

      // Label background pill
      this.ctx.fillStyle = def.color;
      this.ctx.fillRect(def.x, def.y - 18, Math.min(def.width + 16, 170), 18);

      // Label text
      this.ctx.fillStyle = "#ffffff";
      this.ctx.font = "bold 9.5px 'JetBrains Mono', monospace";
      this.ctx.fillText(`${def.id} ${def.type.substring(0, 14)} (${def.confidence}%)`, def.x + 4, def.y - 5);
    });
  }

  attachDefectInteractions() {
    this.updateDefectList();

    if (this.canvas) {
      this.canvas.addEventListener("click", (e) => {
        const rect = this.canvas.getBoundingClientRect();
        const scaleX = this.canvas.width / rect.width;
        const scaleY = this.canvas.height / rect.height;
        const clickX = (e.clientX - rect.left) * scaleX;
        const clickY = (e.clientY - rect.top) * scaleY;

        for (let i = this.defects.length - 1; i >= 0; i--) {
          const def = this.defects[i];
          if (
            clickX >= def.x &&
            clickX <= def.x + def.width &&
            clickY >= def.y &&
            clickY <= def.y + def.height
          ) {
            this.selectDefect(def);
            break;
          }
        }
      });
    }
  }

  updateDefectList() {
    const container = this.container.querySelector("#defect-items-container");
    if (!container) return;

    container.innerHTML = this.renderDefectList();
    container.querySelectorAll(".defect-list-item").forEach((item) => {
      item.addEventListener("click", () => {
        const defId = item.getAttribute("data-defect-id");
        const def = this.defects.find(d => d.id === defId);
        if (def) {
          this.selectDefect(def);
        }
      });
    });
  }

  selectDefect(def) {
    this.selectedDefectId = def.id;
    this.updateDefectList();

    const inspectorPayload = {
      id: def.id,
      label: `Anomaly: ${def.type}`,
      sublabel: `CamcomAI AICAMERA Platform (15 FPS Video)`,
      category: "cv-defect",
      metrics: {
        confidence: `${def.confidence}%`,
        severity: def.severity,
        frame_latency: "58.4ms",
        stream_protocol: "MediaDevices_15FPS"
      },
      payload: {
        defect_id: def.id,
        classification: def.type,
        model_confidence: `${def.confidence}%`,
        severity_rating: def.severity,
        orientation_alignment: "SIDE_LEFT_FRONT",
        gps_audit: "12.9716° N, 77.5946° E",
        inspection_platform: "CamcomAI AICAMERA / CVAS Microservice",
        turnaround_impact: "Up to 95% reduction in manual inspection turnaround",
        bounding_box: {
          x_min: def.x,
          y_min: def.y,
          width: def.width,
          height: def.height
        }
      },
      code: `// CamcomAI Browser MediaDevices 15 FPS Video Streaming & Geolocation Capture\nasync function initializeAICameraStream() {\n    const stream = await navigator.mediaDevices.getUserMedia({\n        video: { width: 1920, height: 1080, frameRate: { ideal: 15, max: 15 } },\n        audio: false\n    });\n    \n    // Capture synchronized GPS coordinates for audit-verified inspections\n    navigator.geolocation.getCurrentPosition((pos) => {\n        auditTelemetryBuffer.push({\n            timestamp: Date.now(),\n            coords: { lat: pos.coords.latitude, lng: pos.coords.longitude },\n            orientationVerdict: 'SIDE_LEFT_FRONT'\n        });\n    });\n}`
    };

    store.selectNode(inspectorPayload);
  }

  destroy() {
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
      this.animationId = null;
    }
  }
}


// ==========================================
// SOURCE: js\app.js
// ==========================================
/**
 * Jayantha BS - Interactive Engineering Portfolio
 * Application Bootstrapper, Mode Router, Telemetry Terminal & Right Inspector Manager
 */


class App {
  constructor() {
    this.activeView = null;
    this.viewportEl = document.querySelector("#center-viewport");
    this.dockScrollEl = document.querySelector("#dock-controls-container");
    this.logsBodyEl = document.querySelector("#terminal-logs-container");
    this.inspectorDrawerEl = document.querySelector("#right-inspector-drawer");

    this.views = {
      "agent-runtime": AgentRuntimeView,
      "rag-citation": RagCitationView,
      "veeva-aifa": VeevaAifaView,
      "k8s-otel": K8sOtelView,
      "resume": ResumeView
    };
  }

  init() {
    this.initNavbarModes();
    this.initLiveClock();
    this.initTelemetryTerminal();
    this.initInspectorDrawer();
    this.initKeyboardShortcuts();

    // Check URL hash for direct deep-linking
    const hash = window.location.hash.replace("#", "");
    const initialMode = this.views[hash] ? hash : "agent-runtime";
    this.switchMode(initialMode, false);

    window.addEventListener("hashchange", () => {
      const h = window.location.hash.replace("#", "");
      if (this.views[h] && store.getState().activeMode !== h) {
        this.switchMode(h, false);
      }
    });

    if (window.lucide) {
      window.lucide.createIcons();
    }
  }

  initNavbarModes() {
    const navButtons = document.querySelectorAll(".nav-mode-btn");
    navButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        const targetMode = btn.getAttribute("data-mode");
        if (targetMode) {
          this.switchMode(targetMode, true);
        }
      });
    });
  }

  switchMode(mode, updateHash = true) {
    if (!this.views[mode]) return;

    // Destroy previous view if present
    if (this.activeView && typeof this.activeView.destroy === "function") {
      this.activeView.destroy();
    }

    // Update store
    store.setMode(mode);

    // Update Navbar buttons active state
    document.querySelectorAll(".nav-mode-btn").forEach((btn) => {
      if (btn.getAttribute("data-mode") === mode) {
        btn.classList.add("is-active");
      } else {
        btn.classList.remove("is-active");
      }
    });

    if (updateHash) {
      window.location.hash = mode;
    }

    // Mount view class
    const ViewClass = this.views[mode];
    this.activeView = new ViewClass();
    this.activeView.mount(this.viewportEl, this.dockScrollEl);

    if (window.lucide) {
      window.lucide.createIcons({ root: document.body });
    }
  }

  initLiveClock() {
    const updateTime = () => {
      const now = new Date();
      const utcString = now.toUTCString().split(" ")[4];
      const clockEl = document.querySelector("#nav-live-clock");
      if (clockEl) {
        clockEl.textContent = `${utcString} UTC`;
      }
    };
    updateTime();
    setInterval(updateTime, 1000);
  }

  initTelemetryTerminal() {
    const renderLogs = (logs) => {
      if (!this.logsBodyEl) return;
      this.logsBodyEl.innerHTML = logs.map((log) => `
        <div class="terminal-log-row">
          <span class="log-time">${log.timestamp}</span>
          <span class="log-tag log-tag-${log.level}">${log.level}</span>
          <div class="log-content">
            ${log.message}
            ${log.details ? `<span class="log-details">${log.details}</span>` : ""}
          </div>
        </div>
      `).join("");

      // Auto-scroll to latest log
      this.logsBodyEl.scrollTop = this.logsBodyEl.scrollHeight;
    };

    // Initial render
    renderLogs(store.getState().telemetryLogs);

    // Subscribe to log updates
    store.subscribeKey("telemetryLogs", (newLogs) => {
      renderLogs(newLogs);
    });

    // Clear logs button
    const clearBtn = document.querySelector("#btn-clear-terminal");
    if (clearBtn) {
      clearBtn.addEventListener("click", () => {
        store.clearLogs();
        store.addLog("INFO", "Telemetry log terminal cleared.");
      });
    }
  }

  initInspectorDrawer() {
    // Tab switching
    const tabButtons = document.querySelectorAll(".inspector-tab-btn");
    tabButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        tabButtons.forEach(b => b.classList.remove("is-active"));
        btn.classList.add("is-active");
        const tab = btn.getAttribute("data-tab");
        store.setInspectorTab(tab);
        this.renderInspectorContent();
      });
    });

    // Subscribe to selected node changes
    store.subscribeKey("selectedNode", () => {
      this.renderInspectorContent();
    });

    // Copy Button
    const copyBtn = document.querySelector("#btn-copy-inspector");
    if (copyBtn) {
      copyBtn.addEventListener("click", () => {
        const node = store.getState().selectedNode;
        const currentTab = store.getState().selectedInspectorTab;
        if (!node) return;

        let textToCopy = "";
        if (currentTab === "code") {
          textToCopy = node.code || "";
        } else if (currentTab === "metrics") {
          textToCopy = JSON.stringify(node.metrics || {}, null, 2);
        } else {
          textToCopy = JSON.stringify(node.payload || {}, null, 2);
        }

        navigator.clipboard.writeText(textToCopy).then(() => {
          this.showToast("Copied to clipboard!");
        }).catch(() => {
          this.showToast("Copied to clipboard");
        });
      });
    }
  }

  renderInspectorContent() {
    const node = store.getState().selectedNode;
    const currentTab = store.getState().selectedInspectorTab;

    const titleEl = document.querySelector("#inspector-node-title");
    const subEl = document.querySelector("#inspector-node-sub");
    const catBadge = document.querySelector("#inspector-category-badge");
    const bodyEl = document.querySelector("#inspector-tab-content");

    if (!node) {
      if (titleEl) titleEl.textContent = "No Element Selected";
      if (subEl) subEl.textContent = "Click any node, bounding box, pod, or span to inspect";
      if (catBadge) catBadge.textContent = "STANDBY";
      if (bodyEl) bodyEl.innerHTML = `<div class="p-4 text-dim text-center">Select any component in the workspace to inspect its payload, code snippet, and execution metrics.</div>`;
      return;
    }

    if (titleEl) titleEl.textContent = node.label || node.id;
    if (subEl) subEl.textContent = node.sublabel || `ID: ${node.id}`;
    if (catBadge) catBadge.textContent = (node.category || "ELEMENT").toUpperCase();

    if (!bodyEl) return;

    if (currentTab === "code") {
      bodyEl.innerHTML = `
        <div class="code-viewer-container">
          <pre class="code-viewer-block"><code>${this.escapeHtml(node.code || "# No code snippet defined for this node.")}</code></pre>
        </div>
      `;
    } else if (currentTab === "metrics") {
      const metrics = node.metrics || {};
      bodyEl.innerHTML = `
        <div class="inspector-metrics-grid">
          ${Object.entries(metrics).map(([k, v]) => `
            <div class="inspector-metric-card">
              <div class="metric-card-title">${k.replace(/_/g, " ")}</div>
              <div class="metric-card-value text-cyan">${v}</div>
            </div>
          `).join("")}
        </div>
        <div class="code-viewer-container mt-4">
          <div class="p-2 text-dim text-mono" style="font-size: 10px;">RAW METRICS TELEMETRY SCHEMA</div>
          <pre class="code-viewer-block"><code>${this.syntaxHighlightJson(metrics)}</code></pre>
        </div>
      `;
    } else if (currentTab === "state") {
      bodyEl.innerHTML = `
        <div class="code-viewer-container">
          <div class="p-2 text-dim text-mono" style="font-size: 10px;">INTERNAL RUNTIME STATE RECORD</div>
          <pre class="code-viewer-block"><code>${this.syntaxHighlightJson({
            node_id: node.id,
            status: node.status || "ACTIVE",
            category: node.category,
            sim_state: store.getState().simulation
          })}</code></pre>
        </div>
      `;
    } else {
      // Default: Payload JSON
      bodyEl.innerHTML = `
        <div class="code-viewer-container">
          <pre class="code-viewer-block"><code>${this.syntaxHighlightJson(node.payload || {})}</code></pre>
        </div>
      `;
    }
  }

  escapeHtml(str) {
    return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }

  syntaxHighlightJson(jsonObj) {
    if (typeof jsonObj !== "string") {
      jsonObj = JSON.stringify(jsonObj, null, 2);
    }
    jsonObj = jsonObj.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

    return jsonObj.replace(
      /("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g,
      (match) => {
        let cls = "json-number";
        if (/^"/.test(match)) {
          if (/:$/.test(match)) {
            cls = "json-key";
          } else {
            cls = "json-string";
          }
        } else if (/true|false/.test(match)) {
          cls = "json-boolean";
        } else if (/null/.test(match)) {
          cls = "json-null";
        }
        return `<span class="${cls}">${match}</span>`;
      }
    );
  }

  showToast(message) {
    const toast = document.querySelector("#toast-notification");
    if (!toast) return;
    toast.querySelector("#toast-message").textContent = message;
    toast.classList.add("is-visible");
    setTimeout(() => {
      toast.classList.remove("is-visible");
    }, 2200);
  }

  initKeyboardShortcuts() {
    window.addEventListener("keydown", (e) => {
      // Only handle if not typing in an input
      if (["INPUT", "TEXTAREA"].includes(e.target.tagName)) return;

      if (e.key === "1") this.switchMode("agent-runtime");
      if (e.key === "2") this.switchMode("rag-citation");
      if (e.key === "3") this.switchMode("veeva-aifa");
      if (e.key === "4") this.switchMode("k8s-otel");
      if (e.key === "5") this.switchMode("resume");

      if (e.key === " ") {
        e.preventDefault();
        // Toggle play in active view if available
        if (this.activeView && typeof this.activeView.toggleRun === "function") {
          this.activeView.toggleRun();
        }
      }

      if (e.key.toLowerCase() === "r") {
        if (this.activeView && typeof this.activeView.resetFlow === "function") {
          this.activeView.resetFlow();
        }
      }
    });
  }
}

// Bootstrap application on DOMContentLoaded
window.addEventListener("DOMContentLoaded", () => {
  const app = new App();
  app.init();
});
