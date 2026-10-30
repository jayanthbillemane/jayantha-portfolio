/**
 * Mode 5: Executive Resume & CamcomAI Edge CV View
 * Official Executive Profile for Jayantha BS (Senior Software Engineer — AI Platforms, Multi-Agent Runtimes & Backend Systems)
 * Integrated with CamcomAI AICAMERA 15 FPS Real-Time Inspection & Orientation Classification Simulator.
 */

import { store } from "../state/store.js";
import { resumeData } from "../data/resumeData.js";

export class ResumeView {
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
