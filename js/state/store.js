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

export const store = new ReactiveStore();
