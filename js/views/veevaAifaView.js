/**
 * Mode 3: Veeva & AIFA Pipeline View
 * Pharma Enterprise Multi-Agent Regulatory Compliance Bridge:
 * Veeva PromoMats -> LayoutLM OCR -> Claim Decomposer -> AIFA Regulatory Engine -> SmPC Truth Engine -> 21 CFR Part 11 -> Salesforce.
 */

import { store } from "../state/store.js";
import { dagConfigs } from "../data/dagConfigs.js";
import { SvgGraphEngine } from "../engine/svgGraphEngine.js";

export class VeevaAifaView {
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
