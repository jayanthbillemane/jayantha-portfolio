/**
 * Jayantha BS - Interactive Engineering Portfolio
 * Application Bootstrapper, Mode Router, Telemetry Terminal & Right Inspector Manager
 */

import { store } from "./state/store.js";
import { AgentRuntimeView } from "./views/agentRuntimeView.js";
import { RagCitationView } from "./views/ragCitationView.js";
import { VeevaAifaView } from "./views/veevaAifaView.js";
import { K8sOtelView } from "./views/k8sOtelView.js";
import { ResumeView } from "./views/resumeView.js";

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
