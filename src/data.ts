/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Experience, Project, Education, ResearchPublication, SkillCategory, BlogPost } from './types.ts';

export const PERSONAL_INFO = {
  name: "Shawn (Xuantong) Yan",
  title: "Backend & AI Systems Engineer",
  email: "xtyan@u.northwestern.edu",
  phone: "(773) 273-1585",
  location: "Sunnyvale, CA",
  github: "https://github.com/yanxuantong",
  linkedin: "https://linkedin.com/in/xuantongyan",
  about: "Backend engineer with 3.5 years of experience building and operating internal infrastructure at Amazon and Blinkfire. Experienced across the full AI systems layer, from end-to-end RAG pipelines (ingestion, vector embeddings, and OpenSearch hybrid retrieval) to capacity planning and auto-scaling for global hyperscale events (reducing millions in hosting costs). Enthusiastic about building bulletproof agent infrastructure, on-device AI integration, and scalable distributed systems for production-grade GenAI products."
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: "Programming Languages",
    items: ["Java", "Python", "SQL", "Swift", "JavaScript", "C++", "Scala", "HTML", "CSS"]
  },
  {
    category: "Backend & Frontend",
    items: ["Spring Boot", "REST APIs", "Java Servlets", "Maven", "React", "Node.js", "Express"]
  },
  {
    category: "Cloud & Distributed Systems",
    items: ["AWS (EC2, Lambda, ECS, S3, DynamoDB, Redshift)", "Google Cloud (App Engine, Cloud Logging, Cloud Monitoring)", "Kinesis", "DynamoDB Streams"]
  },
  {
    category: "AI & LLM Systems",
    items: ["Retrieval-Augmented Generation (RAG)", "LLM Integration & Prompt Engineering", "OpenSearch Hybrid Search", "OpenAI API", "Model Control Protocol (MCP)", "YOLO", "U-Net & ResUNet"]
  },
  {
    category: "Workflows & Agentic dev",
    items: ["Claude Code", "Cursor", "Kiro", "Codex", "Agentic Coding Workflows"]
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: "amazon",
    company: "Amazon",
    role: "Software Development Engineer",
    period: "Jul 2023 – Present",
    location: "Sunnyvale, CA",
    active: true,
    bullets: [
      "Co-architected an internal RAG-based assistant over engineering wikis and codebases, deployed as an active Slack bot; designed the hybrid search retrieval pipeline (OpenSearch BM25 + dense neural embedding), owned prompt engineering and ground-truth validation, reducing cross-team query resolution time from hours to minutes.",
      "Architected and built a cloud capacity optimization system at Amazon's internal fleet scale, automating historical peak analysis and demand forecast matching to replace manual AWS reservation adjustments; deployed via multi-rank regional rollout, eliminating 12% persistent over-provisioning during peak global shopping events and saving millions of dollars annually.",
      "Drove as tech lead the consolidation of two legacy internal microservices into a single unified service; designed an online live database migration utilizing the dual-write pattern, safely deprecating 40k+ lines of legacy code with zero system downtime.",
      "Designed and implemented a near real-time audit data pipeline using DynamoDB Streams, AWS Kinesis, Lambda, Scala, and S3, lowering end-to-end data processing latency from days to under 10 minutes to support rapid provisioning.",
      "Served as primary point-of-contact during Amazon Prime Day: orchestrated capacity verification and disaster recovery failure drills, proactively fixing regional fleet configuration bottlenecks and ensuring robust service continuity."
    ],
    technologies: ["Java", "Python", "OpenSearch", "AWS ECS", "S3", "Kinesis", "Lambda", "DynamoDB Streams", "Scala", "Spring Boot"]
  },
  {
    id: "blinkfire",
    company: "Blinkfire Analytics",
    role: "Software Development Engineer",
    period: "Jun 2022 – Jun 2023",
    location: "Chicago, IL",
    bullets: [
      "Developed and optimized core microservices of an AI-driven SaaS advertising analytics dashboard running on a Python stack deployed on Google App Engine, establishing reliable observability and live tracing with Cloud Logging and Cloud Monitoring.",
      "Designed and trained a custom ResUNet-based visual segmentation model in PyTorch for precise brand logo detection and boundary cropping, automating exposure measurements in social and digital video streams."
    ],
    technologies: ["Python", "Google App Engine", "PyTorch", "ResUNet", "GCP Cloud Monitoring", "REST APIs"]
  },
  {
    id: "jd",
    company: "JD.com",
    role: "Software Engineering Intern",
    period: "May 2020 – Aug 2020",
    location: "Beijing, China",
    bullets: [
      "Built a secure backend service managing wide-scale smart warehouse camera feeds with Spring Web MVC, providing real-time RTSP streams, multi-user role management, diagnostic alerts, and system metric exports.",
      "Integrated YOLO and U-Net deep learning models into video capture pipelines, replacing legacy image processing techniques with high-accuracy bounding boxes and object classification."
    ],
    technologies: ["Spring Web MVC", "Java", "YOLO", "U-Net", "REST APIs", "SQL"]
  }
];

export const EDUCATION_HISTORY: Education[] = [
  {
    id: "northwestern",
    school: "Northwestern University",
    degree: "M.S. in Computer Engineering",
    period: "Sep 2021 – Dec 2022",
    location: "Evanston, IL",
    gpa: "3.85 / 4.0"
  },
  {
    id: "northeastern",
    school: "Northeastern University",
    degree: "B.S. in Computer Science and Technology",
    period: "Sep 2017 – Jun 2021",
    location: "Shenyang, China"
  }
];

export const PROJECTS: Project[] = [
  {
    id: "calpal",
    title: "CalPal — Privacy-First AI Calendar for iOS",
    role: "Architect & Lead",
    period: "Mar 2026 – Present",
    bullets: [
      "Created an on-device AI scheduling engine utilizing locally executed Apple Foundation models to parse natural-language intents without external network calls; designed strict JSON response schema outputs to enforce system reliability.",
      "Designed a solid programmatic fallback parsing stack; integrated natively with iOS calendar frameworks via EventKit in swift and SwiftUI.",
      "Leveraged a clean agentic coding workflow using Claude Code for requirements modeling, PRD specification, and testing cycles."
    ],
    technologies: ["Swift", "SwiftUI", "Apple Foundation Models", "EventKit", "Claude Code"]
  },
  {
    id: "medicaldiag",
    title: "Medical Image Diagnosis Software",
    role: "Technical Lead",
    period: "Sep 2020 – Jun 2021",
    bullets: [
      "Co-founded and led technical development of a student-led venture providing GPU-accelerated medical imaging analysis; built a Qt desktop interface using deep learning models (U-Net) to analyze raw 3D CT/MRI scans.",
      "Collaborated on pilot validation studies at 30+ hospitals, generating user feedback that proved a ~2x workflow efficiency gain compared to traditional pixel-by-pixel diagnostic audits; successfully raised pre-seed funding."
    ],
    technologies: ["C++", "Qt", "Python", "U-Net", "PyTorch", "CT/MRI Analytics"]
  }
];

export const RESEARCH_PUBLICATIONS: ResearchPublication[] = [
  {
    id: "research-seg",
    title: "Image Segmentation in Medical Data",
    institution: "Key Laboratory of Intelligent Computing in Medical Image, Northeastern University",
    bullets: [
      "Engineered advanced multi-scale U-Net++ convolutional architectures in PyTorch, boosting overall pulmonary lung segmentation mean IoU by 40% compared to classical baseline implementations.",
      "Collaborated in active hospital networks to validate the model's performance on more than 300 clinical validation samples."
    ],
    publicationInfo: "Xuantong Yan, Yuejiang Wu, W. Tan. 'Segmentation of Pulmonary Parenchyma from Pulmonary CT Based on ResU-Net++ Model.' Journal of Medical Imaging and Health Informatics 11.3 (2021): 760–766. (SCI-Indexed)"
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "principles-for-scaling-enterprise-rag",
    title: "Principles for Scaling Enterprise RAG Assistant Infrastructure",
    description: "Designing end-to-end retrieval, indexing pipelines, and hybrid search architectures over colossal codebase wikis with real-time accuracy and zero latency leaks.",
    date: "2026-04-12",
    readTime: "4 min read",
    tags: ["RAG", "AI Systems", "OpenSearch", "Enterprise Arch"],
    contentMarkdown: `Retrieval-Augmented Generation (RAG) is often perceived as a simple stack: embed documents, store them in a vector database, query them at runtime, and supply them to an LLM context window. 

But when you scale this pattern to thousands of active software engineers querying hundreds of private codebases, system wiki pages, and internal documentation networks, this naive formulation falls apart.

### The Problem: Dense Semantics vs. Keyword Precision

In enterprise wikis, engineering queries often exhibit extreme keyword specifications (e.g., specific class names, error codes, config parameters like \`maxReserveFleetRatio\`) alongside generic conceptual descriptions (e.g., *"How do I adjust reservation forecasts during Prime Day peak?"*). 

- **Dense Embeddings (Vector Search)** excel at answering conceptual questions but often fail on precise keyword matching of identifiers and functions.
- **Sparse Representations (BM25 Keyword Search)** find the exact identifiers but fail to contextualize when terms are slightly paraphrased.

#### Solution: OpenSearch Hybrid Retrieves
To bridge this gap, we constructed an OpenSearch **hybrid search pipeline** combining dense neural embeddings (powered by private-hosted model services) with classical BM25 lexicons. We parameterized the reciprocal rank fusion (RRF) scoring module to dynamically balance scores:

$$\\text{RRF Score}(d) = \\frac{w_{\\text{dense}}}{\\text{rank}_{\\text{dense}}(d)} + \\frac{w_{\\text{sparse}}}{\\text{rank}_{\\text{sparse}}(d)}$$

By fine-tuning $w_{\\text{dense}}$ and $w_{\\text{sparse}}$ against a validation set of historical engineering query-document pairs, we achieved an **18% increase in Top-3 hit-rate**, enabling the system (packaged as a live Slack bot) to resolve complex infrastructure debugging challenges within seconds rather than hours.

### Tackling Context Noise & LLM Delusions

Providing unfiltered documents to your generator LLM causes "lost in the middle" problems and hallucinations. To remedy this:

1. **Sliding-Window Parent/Child Chunking:** We chunk documents into small semantic spans (100–250 tokens) for vector calculation but map them back to larger "parent chunks" (500–1000 tokens) during lookup to preserve context.
2. **Metadata-Driven Grounding Filters:** Each codebase is indexed with custom metadata tags (repository branch, framework, language, environment). Prompt prompt templates are engineered to enforce strict structured boundaries, instructing the model to *ignore* context from outdated branches.

The result is a production RAG system that internal developers can actually rely on, saving hundreds of developer hours weekly.`
  },
  {
    slug: "automated-fleet-capacity-optimization",
    title: "Preventing Fleet Over-Provisioning at Global Scale",
    description: "How combining historical peak sequence matching with adaptive forecasting allows automated AWS cloud allocation to slash massive infrastructure costs without performance risk.",
    date: "2026-03-08",
    readTime: "5 min read",
    tags: ["Capacity Planning", "Cloud Infrastructure", "Systems Engineering", "AWS"],
    contentMarkdown: `Cloud capacity management for hyper-scale events like Amazon Prime Day or black Friday is a high-stakes balancing act:
- **Under-provisioning** leads to regional exhaustion, latency spikes, and catastrophic service failures.
- **Over-provisioning** keeps thousands of excess, idle bare-metal instances running, burning through millions of dollars of unnecessary hosting expenses.

Traditionally, infrastructure teams solved this through high-friction coordination: spreadsheets, manually negotiated static reservation reserves, and overly conservative "just in case" padding.

### The Core Architectural Shift
To automate this, we built an automated, closed-loop fleet optimization pipeline. The core objective is and will always be: **adjust cloud resource reservations dynamically by matching real-time micro-signals against historical seasonal peaks while maintaining a strict 99.99% capacity confidence interval.**

\`\`\`
          +--------------------------+
          |  Demand Forecast Engine  |
          +-------------+------------+
                        |
                        v [Forecast Stream]
  +---------------------+-------------------+
  | Peak Sequence Alignment Controller (RBF) | <--- [Historical Peak Logs]
  +---------------------+-------------------+
                        |
                        v [Optimal Reservation Vector]
          +-------------+------------+
          | AWS Reservation API Sync  | ---> [Auto-adjusted Fleet Capacity]
          +--------------------------+
\`\`\`

### Real-Time Peak Sequence Matching

Instances of peak traffic during sales events follow highly predictable curves, but they vary by market region (US-east vs. EU-west etc.). Rather than relying purely on static regression models, we constructed a **Radial Basis Function (RBF)** model that continuously correlates active, live traffic workloads with historical baseline peak sequences.

The system calculates:

$$\\Delta C = F_t(\\text{forecasted}_t) + \\text{Buffer}_\\varepsilon - R_{\\text{active}}$$

Where $F_t$ is the forecast vector, $\\text{Buffer}_\\varepsilon$ is a safety margin based on historical variance, and $R_{\\text{active}}$ represents currently active reserved allocations.

If $\\Delta C > \\theta$, the scheduler triggers high-velocity auto-scaling requests to the EC2 API. Conversely, if excess capacity persists without a matching forecast signal, the system scales down, terminating redundant reservations.

### Dual-Write Database Migrations: Zero Downtime

An underrated facet of capacity scaling is migrating the underlying databases storing cloud topology state. As tech lead, I facilitated a mission-critical migration consolidating two state storage systems into a unified model structure:

1. **Phase 1 (Dual-Write):** The active API wrote new records simultaneously to both the legacy DynamoDB and a newly prepared table structure. Reads continued to pull exclusively from the old table.
2. **Phase 2 (Backfill):** Offline workers backfilled old, historic records to the new table, resolving keys with the dual-written writes.
3. **Phase 3 (Dry-run/Assert):** Reads were executed from both tables in parallel and compared via continuous assertions. Discrepancies were logged without impacting the client.
4. **Phase 4 (Cutover):** Reads switched to the new table. Legacy tables were deprecated and safely spun down.

Through this carefully engineered strategy, we removed **40,000+ lines of redundant legacy service code** and wiped out 12% persistent over-provisioning with absolutely zero system crash or downtime.`
  },
  {
    slug: "case-for-privacy-first-local-nlp-ios",
    title: "Bringing Generative Intelligence On-Device",
    description: "Architecting local, zero-network AI intent parsing on iOS with Apple Foundation Models, EventKit, and schema-constrained fallback pipelines.",
    date: "2026-01-20",
    readTime: "3 min read",
    tags: ["iOS", "Local AI", "Swift", "Privacy", "Mobile Engineering"],
    contentMarkdown: `Almost every modern AI-powered scheduling app is a thin wrapper over a centralized backend API. While convenient for rapid prototyping, it exposes users to notable risks:

1. **Privacy Invasions:** Sending private calendar logs, calendar contexts, and meeting schedules to a remote server exposes personal routines.
2. **Offline Fragility:** Any fluctuation in internet connection renders scheduling tasks completely useless.
3. **API Cost & Latency:** Ingress networking, token serialization, and heavy model hosting costs quickly exhaust startup budgets.

For our project **CalPal**, we decided on a different route: **complete, on-device generative scheduling.**

### The On-Device Architecture

To design an on-device NLP calendar assistant, we leveraged Apple's local **Foundation Models** framework alongside Swift and EventKit. The native calendar sync must bypass cloud hops altogether, mapping strings directly to database actions locally.

\`\`\`
  "I have a lunch with Alex at Blue Bottle tomorrow at 1 PM"
                             |
                             v
               +-------------+-------------+
               | Apple Local LLM Inference |
               +-------------+-------------+
                             |
              [Outputs Structured JSON Schema]
                             v
               +-------------+-------------+
               |  EventKit Native Bridge   |
               +-------------+-------------+
                             |
                             v
                [New iOS Calendar Event Created]
\`\`\`

### Constraining Outputs to Swift Structs

On-device models are highly compact compared to server-hosted giants and are more vulnerable to outputs that drift from the expected syntax structure. If the model outputs unstructured prose instead of strict JSON, the native calendar parser crashes.

To enforce structured output, we applied localized token-level constraint scoring:

\`\`\`swift
struct CalendarIntent: Codable {
    let title: String
    let date: String // YYYY-MM-DD
    let time: String // HH:mm
    let durationMinutes: Int
    let location: String?
    let attendees: [String]
}
\`\`\`

We passed complete, strict JSON target models directly into the system system instructions, alongside a **Two-Tier Failover Parsing Pipeline**:

1. **Tier 1 (Regex-Based Fallback Parsing):** If local inference produces malformed JSON but contains correct keywords, we use a custom, high-speed Regex scanner to isolate the dates and times.
2. **Tier 2 (EventKit Partial Sync):** If everything else fails, the assistant prompts the user with a pre-filled iOS interactive modal instead of breaking silently.

Using these architectural guidelines, **CalPal** achieves sub-100ms intent classification locally on a modern Apple Silicon device with near-zero power draw, paving the way for truly confidential, responsive mobile AI experiences.`
  }
];
