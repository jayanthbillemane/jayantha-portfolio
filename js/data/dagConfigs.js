/**
 * DAG Configurations for Interactive Visual Pipelines
 * Mode 1: Agent Runtime DAG (LangGraph, FastAPI, Qdrant, Sandbox, Guardrails)
 * Mode 3: Veeva & AIFA Pipeline DAG (Veeva PromoMats, AIFA Compliance, SmPC, Salesforce)
 */

export const dagConfigs = {
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
