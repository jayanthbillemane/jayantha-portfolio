/**
 * Mode 4: K8s HPA & OTel Traces View
 * Kubernetes Horizontal Pod Autoscaler (HPA) simulator with dynamic RPS scaling,
 * live Pod card grid, chaos pod termination, and OpenTelemetry Distributed Trace Gantt Waterfall.
 */

import { store } from "../state/store.js";

export class K8sOtelView {
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
