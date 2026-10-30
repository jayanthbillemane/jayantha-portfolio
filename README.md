# Jayantha BS — Interactive Architecture Engineering Portfolio (GitHub Pages Edition)

> **Senior Software Engineer — AI Platforms, Multi-Agent Runtimes & Distributed Backend Systems**  
> *Zero-Build Architecture • Native ES6 Modules • SVG Cubic Bezier Engine • Bounding-Box Grounding • 15 FPS CamcomAI Edge CV*

---

## ⚡ Overview & Architectural Philosophy

This portfolio is built as an interactive **Linear / LangSmith Dark Engineering Console** adhering strictly to **Zero-Build constraints**:
- **Zero build steps**: No npm, Webpack, Vite, Node.js, or compilation required.
- **Pure Web Standards**: Semantic HTML5, CSS3 Custom Properties (Variables), Vanilla ES6+ JavaScript Modules (`type="module"`), Interactive SVG, and CDN-loaded micro-utilities (Tailwind Play CDN, Lucide Icons).
- **GitHub Pages Ready**: Includes `.nojekyll` and clean relative asset resolution for instant static hosting.

---

## 🚀 The 5 Interactive Console Modes

### 1. `[01] Agent Runtime DAG` (`#agent-runtime`)
- **Architecture**: Asynchronous multi-agent execution pipeline.
  - FastAPI Ingress Gateway -> Redis Token-Bucket (HTTP 429 limiter) -> LangGraph Supervisor -> Concurrent Qdrant Vector Retrieval + Isolated eBPF Python Sandbox -> vLLM Continuous Batching LLM -> AIFA Safety Guardrails -> SSE Stream Egress.
- **Interactivity**:
  - Live transport controls (`Run Flow`, `Step`, `Reset`).
  - Animated glowing SVG data packets moving along cubic Bezier paths via `stroke-dasharray` and `getPointAtLength()`.
  - Chaos injection toggles: Recursion loop detection & circuit breaker, Redis token bucket throttling (HTTP 429), and SSE micro-token streaming.
  - Draggable node cards with dynamic curve recalculation and real-time status pulses.

### 2. `[02] Citation RAG Lab` (`#rag-citation`)
- **Architecture**: Spatial Bounding-Box Grounding & Attribution Engine for clinical trial protocols (EMERALD-301 Phase III Study).
- **Interactivity**:
  - **Left Subpane**: Interactive mock clinical trial PDF viewer with headers, Kaplan-Meier tables, and spatial bounding boxes.
  - **Right Subpane**: Grounded answer with interactive citation pills (`[Doc 1, p.4, §3.2]`, `[Table 3.4 Cohort B]`).
  - **Bi-directional Grounding**: Hovering or clicking a citation pill pulses and auto-scrolls to the exact excerpt bounding box; hovering a bounding box highlights the citation sentence and displays embedding cosine similarity (`0.942`), token count, and retrieval latency in the Live Inspector.
  - Dynamic Cosine Similarity threshold slider (`0.70` to `0.98`) filtering retrieved chunks in real time.

### 3. `[03] Veeva & AIFA Pipeline` (`#veeva-aifa`)
- **Architecture**: Life sciences enterprise regulatory compliance bridge.
  - Veeva PromoMats Webhook -> LayoutLM OCR -> Claim Decomposer Agent -> Italian Medicines Agency (AIFA D.Lgs. 219/06 Art. 119) Rule Validator & SmPC Monograph Verifier -> Compliance Arbiter Gate -> 21 CFR Part 11 Cryptographic Audit Trail -> Salesforce Health Cloud / Veeva Vault sync.
- **Interactivity**:
  - Scenario switcher: Compliant Oncology Brochure vs. Off-Label Indication Claim (triggers AIFA Art. 119(1) regulatory lock & routes to Human-in-the-Loop Medical Director) vs. Missing Fair Balance Disclosure.
  - Statutory compliance checklist with real-time pass/fail validation.

### 4. `[04] K8s HPA & OTel Traces` (`#k8s-otel`)
- **Architecture**: Kubernetes Horizontal Pod Autoscaler & OpenTelemetry Distributed Tracing console.
- **Interactivity**:
  - **RPS Slider**: Interactive throughput generator (`50 RPS` to `5,000 RPS`) with live CPU utilization gauge and automatic pod scaling ($N = \min(8, \max(1, \lceil \text{RPS} / 550 \rceil))$).
  - **Dynamic Pod Grid**: Responsive pod cards with health status, CPU/Memory telemetry bars, node IPs, and container restarts.
  - **Pod Chaos Injection**: Simulates Linux kernel cgroup `OOMKilled` event, triggering K8s replica reschedule and self-healing.
  - **OpenTelemetry Gantt Waterfall**: Interactive multi-span trace (`gateway.http_request`, `qdrant_query`, `vllm_generation`, `aifa_audit`) with span attributes, timing bars, and duration tags.

### 5. `[05] Executive Resume & Edge CV` (`#resume`)
- **Architecture**: Executive career profile for Jayantha BS + CamcomAI 15 FPS Real-Time Edge CV Inspection Simulator.
- **Interactivity**:
  - **Profile & Impact Metrics**: 4,200+ RPS sustained throughput, <68ms p99 latency, 15 FPS edge video runtime, 99.4% AIFA precision, 10M+ vision frames.
  - **15 FPS Edge CV Simulator**: HTML5 Canvas running at locked 15 FPS simulating industrial vehicle inspection on NVIDIA Jetson AGX Xavier.
  - Animated scanline, defect tracking overlays (`Deep Scratch`, `Body Panel Dent`, `Paint Blister`, `Micro Crack`), live FPS counter, and per-frame latency budget breakdown (`58.4ms / 66.67ms`).
  - Single-click flaw injection and confidence cutoff slider.
  - Comprehensive career timeline, competency matrix, and downloadable standard PDF resume.

---

## ⌨️ Global Keyboard Shortcuts

| Shortcut | Action |
|---|---|
| `1` | Switch to Mode 1: Agent Runtime DAG |
| `2` | Switch to Mode 2: Citation RAG Lab |
| `3` | Switch to Mode 3: Veeva & AIFA Pipeline |
| `4` | Switch to Mode 4: K8s HPA & OTel Traces |
| `5` | Switch to Mode 5: Executive Resume & Edge CV |
| `Space` | Run / Pause simulation transport |
| `R` | Reset simulation state |
| `C` | Clear telemetry logs terminal |

---

## 📁 Repository Structure

```text
/
├── index.html                   # Single-page console shell & entry point
├── .nojekyll                    # Disables Jekyll processing on GitHub Pages
├── README.md                    # System documentation & deployment guide
├── assets/
│   └── Jayantha_BS_Resume.pdf   # Downloadable standard PDF resume
├── css/
│   ├── styles.css               # Theme variables, glassmorphism, 3-pane layout
│   └── components.css           # DAG nodes, glowing SVG paths, pod cards, Gantt spans
└── js/
    ├── app.js                   # Application bootstrapper, mode router & inspector
    ├── state/
    │   └── store.js             # Pub/Sub Reactive Store (Vanilla JS Zustand alternative)
    ├── data/
    │   ├── resumeData.js        # Detailed profile, experience, skills, and metrics
    │   ├── dagConfigs.js        # Nodes, edges, payloads, and Python snippets
    │   └── clinicalDocData.js   # Mock clinical protocol text, chunks, and bboxes
    ├── engine/
    │   └── svgGraphEngine.js    # Vanilla JS + SVG Bezier engine & packet animator
    └── views/
        ├── agentRuntimeView.js  # Mode 1: Agent Runtime DAG
        ├── ragCitationView.js   # Mode 2: Citation RAG Lab
        ├── veevaAifaView.js     # Mode 3: Veeva & AIFA Pipeline
        ├── k8sOtelView.js       # Mode 4: K8s HPA & OTel Traces
        └── resumeView.js        # Mode 5: Executive Resume & Edge CV
```

---

## 💻 Local Quickstart

Because this is a zero-build application, you can serve it with any static web server:

```bash
# Using Python 3
python -m http.server 8000

# Or using npx serve
npx serve .

# Or using PHP
php -S localhost:8000
```

Open `http://localhost:8000` in your modern browser (Chrome, Edge, Safari, Firefox).

---

## 🌐 GitHub Pages Deployment Guide

1. Push this repository to GitHub:
   ```bash
   git remote add origin https://github.com/<your-username>/<your-repo>.git
   git branch -M main
   git push -u origin main
   ```
2. In your GitHub repository:
   - Navigate to **Settings** -> **Pages**.
   - Under **Build and deployment** -> **Source**, select **Deploy from a branch**.
   - Select branch: `main` and folder: `/ (root)`.
   - Click **Save**.
3. Your interactive portfolio will be live at `https://<your-username>.github.io/<your-repo>/` within 60 seconds!
