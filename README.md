# Day 05 — Career Evidence Engine

**100 Days of Data Science · Day 05**

**Live product:** https://day05-career-evidence-engine.vercel.app  
**Repository:** https://github.com/omparekh54-lgtm/day05-career-evidence-engine

Career Evidence Engine is a privacy-first resume-to-role intelligence product built around one rule:

> **Tailor aggressively, but never invent experience.**

A user uploads a PDF/DOCX/TXT resume, pastes a job description, and receives an evidence matrix that traces every requirement back to exact source-resume text. The product separates true coverage, weak evidence, terminology gaps, learnable skill gaps and potential formal blockers. It then creates a portfolio-proof plan and exportable application pack without silently fabricating skills, employers, metrics or leadership claims.

## Why this is not just another ATS scorer

Most resume tools collapse everything into a single opaque “match score” and then encourage keyword insertion. Career Evidence Engine treats the resume as an evidence base. A requirement is only strong when the source text supports it. Missing evidence stays missing. Formal blockers are surfaced instead of rewritten away. The output tells the applicant **what is true, what is weak, what terminology can safely be aligned, and what proof should be built next**.

## Primary workflow

Upload PDF/DOCX/TXT → extract resume locally → paste target job description → parse must/preferred/responsibility statements → match each requirement to source evidence → classify gaps → inspect exact provenance → test rewritten bullets for claim risk → build portfolio proof plan → export application pack.

## NLP methodology

- Job-description lines are parsed into requirement candidates using semantic/keyword signals.
- A curated skill taxonomy extracts explicit technical/domain skills.
- Requirement-to-resume evidence uses TF-IDF sentence similarity plus explicit skill overlap.
- Weighted coverage prioritizes must-have requirements over preferred ones.
- Gap classifier distinguishes: covered, evidence gap, terminology gap, learnable gap and potential hard blocker.
- Claim-risk checks compare rewritten bullets back to the source resume and treat new quantified/leadership claims conservatively.
- An adversarial test specifically verifies that a copied source bullet cannot hide a newly invented percentage result and still be marked supported.

## Confidence & honesty layer

- **Known:** exact resume and job-description text.
- **NLP estimate:** sentence/evidence similarity.
- **Heuristic:** requirement importance and gap classification.
- **Not claimed:** probability of getting an interview or job.

## Privacy

Resume PDF/DOCX/TXT extraction and analysis happen in the browser. There is no application database or server-side persistence of uploaded resume text in this portfolio build.

## Input support

- PDF — text extraction through PDF.js. Scanned/image-only PDFs are not OCRed.
- DOCX — browser-side raw-text extraction through Mammoth.
- TXT — direct browser text read.
- Job description — pasted text.

## Product UX

Clear upload/paste onboarding, optional sample role, evidence-first dashboard, recruiter 30-second scan, requirement drilldown, source-proof cards, claim-risk detector, ATS structure checks, portfolio-proof planner, exportable application pack, responsive layout and reduced-motion support.

## Verified production checks

- 5 / 5 NLP and evidence-integrity tests pass locally.
- Explicit skill extraction verified.
- Requirement-type parsing verified.
- Potential formal blocker preservation verified.
- Unsupported quantified leadership claims verified.
- Adversarial mostly-copied bullet + invented `40%` metric verified as unsupported.
- Next.js 16 production compilation passed on Vercel.
- TypeScript checking passed on Vercel.
- Production deployment state is `READY`.
- Public production root returns HTTP 200.
- Current Vercel runtime scan reports no runtime errors.

The first cloud builds also exposed real integration issues before release: a React type dependency conflict, a missing Mammoth browser declaration, a PDF.js API mismatch and TypeScript test-import configuration. These were fixed explicitly rather than bypassing dependency or type checks.

## Tests

Run `npm test` and `npm run build`.

## Honest limitations

- This is deterministic NLP/TF-IDF, not a large language model.
- Requirement classification is heuristic and users should inspect the underlying job text.
- PDF extraction works for text PDFs, not scanned resumes requiring OCR.
- ATS checks are structural heuristics, not a vendor-specific ATS emulator.
- A high evidence-coverage score does not predict hiring outcomes.
- The tool will not manufacture missing experience; learnable gaps require real skill-building before they can become resume claims.