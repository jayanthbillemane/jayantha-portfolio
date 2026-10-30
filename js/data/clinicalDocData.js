/**
 * Clinical Trial Protocol & Grounded Citation Data
 * Powers Mode 2: Citation RAG Lab (Document Grounding & Attribution Engine)
 */

export const clinicalDocData = {
  documentMeta: {
    title: "Phase III Multicenter Study: Efficacy & Safety Evaluation of BNT-412 in Refractory Solid Tumors",
    protocolId: "EMERALD-301 (NCT04812344)",
    sponsor: "BioNexus Therapeutics & Global Oncology Consortium",
    phase: "Phase III Double-Blind Randomized Controlled Trial",
    date: "August 2026",
    status: "FINAL REGULATORY SUBMISSION"
  },

  queries: [
    {
      id: "query-pfs",
      title: "Primary Endpoint: Progression-Free Survival (Cohort B)",
      question: "What was the progression-free survival (PFS) hazard ratio and median duration in Cohort B compared to control?",
      generatedAnswer: `In the randomized Phase III EMERALD-301 trial, Cohort B patients receiving the BNT-412 combination therapy demonstrated a statistically significant improvement in progression-free survival (PFS) compared to the standard-of-care control arm. The median PFS reached 14.8 months (95% CI: 13.1–16.4) in the BNT-412 arm versus 8.2 months (95% CI: 7.1–9.4) in the control group <span class="citation-pill" data-chunk-id="chunk-pfs-1" data-page="4" data-bbox="bbox-pfs-1">[Doc 1, p.4, §3.2]</span>. This corresponds to an unstratified hazard ratio (HR) of 0.64 (95% CI: 0.51–0.81, stratified log-rank p < 0.0001), representing a 36% relative reduction in the risk of disease progression or mortality <span class="citation-pill" data-chunk-id="chunk-pfs-2" data-page="4" data-bbox="bbox-pfs-2">[Table 3.4 Cohort B]</span>. Subgroup analysis confirmed consistent PFS benefit across PD-L1 TPS strata (>1% vs <1%) and prior platinum resistance history <span class="citation-pill" data-chunk-id="chunk-pfs-3" data-page="4" data-bbox="bbox-pfs-3">[Doc 1, p.4, §3.2.4]</span>.`,
      citations: [
        {
          chunkId: "chunk-pfs-1",
          bboxId: "bbox-pfs-1",
          page: 4,
          label: "Doc 1, p.4, §3.2",
          section: "Section 3.2 Primary Efficacy Outcomes",
          cosineScore: 0.942,
          retrievalLatency: "18.4ms",
          tokens: 142,
          excerpt: "Patients randomized to Cohort B receiving BNT-412 exhibited a median progression-free survival (mPFS) of 14.8 months (95% CI: 13.1-16.4) versus 8.2 months (95% CI: 7.1-9.4) in the comparator control cohort."
        },
        {
          chunkId: "chunk-pfs-2",
          bboxId: "bbox-pfs-2",
          page: 4,
          label: "Table 3.4 Cohort B",
          section: "Table 3.4: Kaplan-Meier Survival Analysis",
          cosineScore: 0.918,
          retrievalLatency: "21.0ms",
          tokens: 98,
          excerpt: "Hazard Ratio (HR) = 0.64 (95% Confidence Interval: 0.51 - 0.81); Stratified Log-Rank p-value < 0.0001. Relative hazard reduction: 36.0%."
        },
        {
          chunkId: "chunk-pfs-3",
          bboxId: "bbox-pfs-3",
          page: 4,
          label: "Doc 1, p.4, §3.2.4",
          section: "Section 3.2.4 Biomarker Subgroup Interaction",
          cosineScore: 0.875,
          retrievalLatency: "24.6ms",
          tokens: 110,
          excerpt: "Forest plot interaction test indicated persistent PFS benefit across PD-L1 expression levels (TPS >= 50% HR: 0.59; TPS 1-49% HR: 0.66; TPS < 1% HR: 0.71; p-interaction = 0.42)."
        }
      ]
    },
    {
      id: "query-safety",
      title: "Safety Profile: Grade 3/4 Adverse Events & Toxicity",
      question: "Summarize the incidence of Grade 3/4 treatment-emergent adverse events and protocol dose interruption guidelines.",
      generatedAnswer: `Treatment with BNT-412 was generally well-tolerated with an adverse event profile consistent with target pathway inhibition. Grade 3 or 4 treatment-emergent adverse events (TEAEs) occurred in 41.2% of patients in the active investigational arm compared to 28.5% in the control cohort <span class="citation-pill" data-chunk-id="chunk-safe-1" data-page="6" data-bbox="bbox-safe-1">[Doc 1, p.6, §5.1]</span>. The most frequent Grade 3/4 events were reversible neutropenia (24.1%), fatigue (8.3%), and elevated AST/ALT transaminases (6.5%) <span class="citation-pill" data-chunk-id="chunk-safe-2" data-page="6" data-bbox="bbox-safe-2">[Table 5.2 Safety Summary]</span>. In cases of Grade 3 febrile neutropenia, the protocol mandates immediate dose withholding until absolute neutrophil count (ANC) recovers to >= 1,000/mcL, followed by a one-level dose reduction to 40mg daily <span class="citation-pill" data-chunk-id="chunk-safe-3" data-page="6" data-bbox="bbox-safe-3">[Doc 1, p.6, §5.3.1]</span>. Permanent treatment discontinuation due to drug-related toxicity was reported in only 3.8% of patients.`,
      citations: [
        {
          chunkId: "chunk-safe-1",
          bboxId: "bbox-safe-1",
          page: 6,
          label: "Doc 1, p.6, §5.1",
          section: "Section 5.1 Safety and Tolerability Overview",
          cosineScore: 0.938,
          retrievalLatency: "19.2ms",
          tokens: 125,
          excerpt: "Grade 3 or higher treatment-emergent adverse events (TEAEs) were documented in 41.2% (n=168/408) of BNT-412 subjects versus 28.5% (n=116/407) in the standard comparator arm."
        },
        {
          chunkId: "chunk-safe-2",
          bboxId: "bbox-safe-2",
          page: 6,
          label: "Table 5.2 Safety Summary",
          section: "Table 5.2: Incidence of Common Laboratory Abnormalities",
          cosineScore: 0.904,
          retrievalLatency: "22.5ms",
          tokens: 154,
          excerpt: "Neutropenia Gr 3/4: 24.1% (active) vs 4.2% (control). Asthenia/Fatigue Gr 3: 8.3% vs 6.1%. Hepatic transaminase elevations (AST/ALT > 5x ULN): 6.5% vs 2.1%."
        },
        {
          chunkId: "chunk-safe-3",
          bboxId: "bbox-safe-3",
          page: 6,
          label: "Doc 1, p.6, §5.3.1",
          section: "Section 5.3.1 Dose Modification & Withholding Protocol",
          cosineScore: 0.889,
          retrievalLatency: "20.1ms",
          tokens: 130,
          excerpt: "Upon detection of Grade 3 hematologic toxicity, dosing must be suspended immediately. Re-initiation at reduced dose (Dose Level -1: 40 mg PO qd) is permitted only after ANC recovery to >= 1,000/uL and platelets >= 75,000/uL."
        }
      ]
    },
    {
      id: "query-biomarker",
      title: "Inclusion Criteria: Biomarker & Prior Immunotherapy",
      question: "What are the biomarker inclusion criteria regarding PD-L1 expression and prior checkpoint inhibitor regimens?",
      generatedAnswer: `Eligible subjects must possess histologically confirmed locally advanced unresectable or metastatic carcinoma with documented disease progression following 1 to 3 prior systemic regimens <span class="citation-pill" data-chunk-id="chunk-bio-1" data-page="2" data-bbox="bbox-bio-1">[Doc 1, p.2, §2.1]</span>. Tumor tissue must exhibit confirmed PD-L1 Tumor Proportion Score (TPS) >= 1% as determined by the central Dako 22C3 IHC pharmDx companion diagnostic assay <span class="citation-pill" data-chunk-id="chunk-bio-2" data-page="2" data-bbox="bbox-bio-2">[Doc 1, p.2, §2.2]</span>. Prior exposure to anti-PD-1 or anti-PD-L1 monoclonal antibodies is permitted provided the patient demonstrated a documented primary treatment response of >= 12 weeks before disease recurrence, and a minimum 28-day washout period has elapsed prior to Cycle 1 Day 1 <span class="citation-pill" data-chunk-id="chunk-bio-3" data-page="2" data-bbox="bbox-bio-3">[Doc 1, p.2, §2.3.4]</span>.`,
      citations: [
        {
          chunkId: "chunk-bio-1",
          bboxId: "bbox-bio-1",
          page: 2,
          label: "Doc 1, p.2, §2.1",
          section: "Section 2.1 Study Population & Disease Criteria",
          cosineScore: 0.951,
          retrievalLatency: "17.9ms",
          tokens: 118,
          excerpt: "Adults aged >= 18 years with histologically or cytologically confirmed metastatic or unresectable locally advanced solid malignancy refractory to standard chemotherapeutic lines (1 to 3 prior lines)."
        },
        {
          chunkId: "chunk-bio-2",
          bboxId: "bbox-bio-2",
          page: 2,
          label: "Doc 1, p.2, §2.2",
          section: "Section 2.2 Companion Diagnostic Requirements",
          cosineScore: 0.927,
          retrievalLatency: "21.3ms",
          tokens: 102,
          excerpt: "Central laboratory confirmation of PD-L1 expression (TPS >= 1%) on archival or fresh core needle biopsy using the FDA-approved Dako 22C3 pharmDx assay."
        },
        {
          chunkId: "chunk-bio-3",
          bboxId: "bbox-bio-3",
          page: 2,
          label: "Doc 1, p.2, §2.3.4",
          section: "Section 2.3.4 Prior Immunotherapy Washout Rules",
          cosineScore: 0.892,
          retrievalLatency: "23.4ms",
          tokens: 140,
          excerpt: "Prior anti-PD-(L)1 therapy allowed if best overall response was >= stable disease for at least 12 weeks. Washout window of at least 28 days or 5 drug half-lives is mandatory prior to randomization."
        }
      ]
    }
  ],

  // Mock pages containing realistic formatted clinical text and bounding box positions
  pages: {
    2: {
      pageNumber: 2,
      sectionTitle: "PROTOCOL SECTION 2: PATIENT ELIGIBILITY & INCLUSION CRITERIA",
      lines: [
        { type: "header", text: "2. PATIENT ELIGIBILITY AND STRATIFICATION" },
        { type: "meta", text: "Protocol EMERALD-301 | Revision 4.2 | Confidential | Page 2 of 28" },
        {
          type: "paragraph",
          id: "bbox-bio-1",
          text: "2.1 Target Patient Population: Candidates eligible for enrollment must be adult male or female patients (>= 18 years of age) with histologically or cytologically confirmed metastatic or unresectable locally advanced solid malignancy refractory to standard chemotherapeutic lines (1 to 3 prior systemic regimens). Measurable lesion presence per RECIST v1.1 guidelines is mandatory at baseline radiological screening.",
          bbox: { top: 18, left: 6, width: 88, height: 16 }
        },
        {
          type: "paragraph",
          id: "bbox-bio-2",
          text: "2.2 Biomarker & Diagnostic Qualification: Submission of formal tissue blocks or fresh core-biopsy specimens is required. Central laboratory confirmation of PD-L1 expression (TPS >= 1%) on archival or fresh core needle biopsy using the FDA-approved Dako 22C3 pharmDx assay must be documented prior to randomization. Patients harboring known EGFR activating mutations or ALK translocations must have received prior targeted TKI therapy.",
          bbox: { top: 38, left: 6, width: 88, height: 18 }
        },
        {
          type: "paragraph",
          id: "bbox-bio-3",
          text: "2.3.4 Prior Immunotherapy Washout Guidelines: Prior anti-PD-(L)1 therapy is allowed if best overall response was >= stable disease for at least 12 weeks. A mandatory washout window of at least 28 days or 5 drug elimination half-lives (whichever is longer) must elapse between the last dose of immunotherapy and Cycle 1 Day 1. Full resolution of all immune-related adverse events to Grade <= 1 is required.",
          bbox: { top: 60, left: 6, width: 88, height: 18 }
        },
        {
          type: "footer",
          text: "BNT-412 Global Clinical Protocol | BioNexus Therapeutics | Registered with AIFA and EMA Under EudraCT 2024-001928-11"
        }
      ]
    },
    4: {
      pageNumber: 4,
      sectionTitle: "PROTOCOL SECTION 3: EFFICACY ANALYSIS & SURVIVAL OUTCOMES",
      lines: [
        { type: "header", text: "3. EFFICACY ASSESSMENTS: PRIMARY ENDPOINT" },
        { type: "meta", text: "Protocol EMERALD-301 | Revision 4.2 | Confidential | Page 4 of 28" },
        {
          type: "paragraph",
          id: "bbox-pfs-1",
          text: "3.2 Primary Efficacy Outcomes: At the pre-specified interim analysis cutoff, patients randomized to Cohort B receiving BNT-412 exhibited a median progression-free survival (mPFS) of 14.8 months (95% CI: 13.1–16.4) versus 8.2 months (95% CI: 7.1–9.4) in the comparator control cohort. The progression-free survival rate at 12 months was 58.4% in the investigational arm compared with 31.2% in the control arm.",
          bbox: { top: 16, left: 6, width: 88, height: 17 }
        },
        {
          type: "table",
          id: "bbox-pfs-2",
          title: "Table 3.4: Kaplan-Meier Survival Analysis in Cohort B (Full Analysis Set)",
          headers: ["Clinical Endpoint", "BNT-412 Arm (N=408)", "Control Arm (N=407)", "Hazard Ratio (95% CI)", "Stratified Log-Rank p"],
          rows: [
            ["Median PFS (months)", "14.8 [13.1, 16.4]", "8.2 [7.1, 9.4]", "0.64 [0.51, 0.81]", "p < 0.0001"],
            ["12-Month PFS Rate", "58.4%", "31.2%", "—", "p < 0.0001"],
            ["Confirmed ORR (%)", "44.6%", "22.8%", "Odds Ratio: 2.74", "p < 0.001"]
          ],
          bbox: { top: 37, left: 6, width: 88, height: 24 }
        },
        {
          type: "paragraph",
          id: "bbox-pfs-3",
          text: "3.2.4 Biomarker Subgroup Interaction: Forest plot interaction test indicated persistent PFS benefit across PD-L1 expression levels (TPS >= 50% HR: 0.59; TPS 1-49% HR: 0.66; TPS < 1% HR: 0.71; p-interaction = 0.42). No significant treatment-by-subgroup interaction was observed for age, geographic region, or prior line count.",
          bbox: { top: 65, left: 6, width: 88, height: 16 }
        },
        {
          type: "footer",
          text: "BNT-412 Global Clinical Protocol | BioNexus Therapeutics | Data independently verified by Blinded Independent Central Review (BICR)"
        }
      ]
    },
    6: {
      pageNumber: 6,
      sectionTitle: "PROTOCOL SECTION 5: SAFETY PROFILE & TOXICITY MANAGEMENT",
      lines: [
        { type: "header", text: "5. SAFETY & TOXICITY INTERVENTION PROTOCOL" },
        { type: "meta", text: "Protocol EMERALD-301 | Revision 4.2 | Confidential | Page 6 of 28" },
        {
          type: "paragraph",
          id: "bbox-safe-1",
          text: "5.1 Safety and Tolerability Overview: Grade 3 or higher treatment-emergent adverse events (TEAEs) were documented in 41.2% (n=168/408) of BNT-412 subjects versus 28.5% (n=116/407) in the standard comparator arm. Serious adverse events (SAEs) occurred in 14.2% of active arm subjects. Drug discontinuation due to adverse events occurred in 3.8% of patients.",
          bbox: { top: 16, left: 6, width: 88, height: 16 }
        },
        {
          type: "table",
          id: "bbox-safe-2",
          title: "Table 5.2: Incidence of Treatment-Emergent Adverse Events (>= 5% Frequency)",
          headers: ["Adverse Event Category", "BNT-412 All Grades", "BNT-412 Gr 3/4", "Control All Grades", "Control Gr 3/4"],
          rows: [
            ["Neutropenia / Leukopenia", "68.4%", "24.1%", "18.2%", "4.2%"],
            ["Asthenia / Fatigue", "42.1%", "8.3%", "38.5%", "6.1%"],
            ["Elevated Hepatic Transaminases", "28.3%", "6.5%", "14.1%", "2.1%"],
            ["Nausea & Vomiting", "22.5%", "1.8%", "20.1%", "1.2%"]
          ],
          bbox: { top: 36, left: 6, width: 88, height: 26 }
        },
        {
          type: "paragraph",
          id: "bbox-safe-3",
          text: "5.3.1 Dose Modification & Withholding Protocol: Upon detection of Grade 3 hematologic toxicity, dosing must be suspended immediately. Re-initiation at reduced dose (Dose Level -1: 40 mg PO qd) is permitted only after ANC recovery to >= 1,000/uL and platelets >= 75,000/uL. Recurrence of Grade 4 toxicity mandates permanent discontinuation from the study protocol.",
          bbox: { top: 66, left: 6, width: 88, height: 16 }
        },
        {
          type: "footer",
          text: "BNT-412 Global Clinical Protocol | BioNexus Therapeutics | Safety review conducted quarterly by Independent Data Monitoring Committee (IDMC)"
        }
      ]
    }
  }
};
