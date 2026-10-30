/**
 * Mode 2: Citation RAG Lab View
 * Document Grounding & Attribution Engine with interactive PDF bounding boxes,
 * sentence-level citation pills, bi-directional hover/click grounding, and embedding vector similarity telemetry.
 */

import { store } from "../state/store.js";
import { clinicalDocData } from "../data/clinicalDocData.js";

export class RagCitationView {
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
