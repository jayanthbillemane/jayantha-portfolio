/**
 * Interactive SVG Graph Engine
 * High-performance Vanilla JS + SVG cubic Bezier curve engine with glowing animated data packets.
 * Supports draggable HTML node cards overlaid on an interactive SVG layer.
 */

export class SvgGraphEngine {
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
