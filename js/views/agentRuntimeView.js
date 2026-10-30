/**
 * Mode 1: Agent Runtime View
 * Multi-agent orchestration runtime with FastAPI, Redis token bucket, LangGraph supervisor,
 * Qdrant hybrid vector RAG, eBPF isolated sandbox, vLLM inference, and AIFA guardrail validation.
 */

import { store } from "../state/store.js";
import { dagConfigs } from "../data/dagConfigs.js";
import { SvgGraphEngine } from "../engine/svgGraphEngine.js";

export class AgentRuntimeView {
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
