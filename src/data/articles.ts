import { Article } from '../types';

export const articlesData: Article[] = [
  {
    id: 'art-react-memo',
    slug: 'understanding-usememo-usecallback-react',
    title: 'Understanding useMemo and useCallback in Modern React',
    excerpt: 'A rigorous mental model for memoization in React. Learn how JavaScript referential equality triggers re-renders, when memoization provides real performance gains, and when it costs more than it saves.',
    category: 'Web Development',
    tags: ['React', 'Performance', 'Hooks', 'JavaScript', 'Frontend Architecture'],
    author: 'Mansoor Sarookh',
    coverImage: '/src/assets/images/course_infosec_thumb_1791404003280.jpg',
    publishedAt: '2026-03-12',
    updatedAt: '2026-03-24',
    readingTime: 8,
    featured: true,
    tableOfContents: [
      { id: 'the-fundamental-problem', title: 'The Fundamental Problem: Referential Equality', level: 2 },
      { id: 'anatomy-of-usememo', title: 'Anatomy of useMemo: Caching Computed Values', level: 2 },
      { id: 'anatomy-of-usecallback', title: 'Anatomy of useCallback: Preserving Function Identity', level: 2 },
      { id: 'when-to-use-memoization', title: 'When Should You Actually Memoize?', level: 2 },
      { id: 'the-hidden-cost', title: 'The Hidden Cost of Premature Optimization', level: 2 },
      { id: 'summary-rules', title: 'Summary: 4 Rules for Production React', level: 2 },
    ],
    content: `
## The Fundamental Problem: Referential Equality

In JavaScript, primitives like numbers and strings are compared by **value**, while complex structures like objects, arrays, and functions are compared by **reference**.

\`\`\`javascript
// Primitives: Compared by value
5 === 5; // true
"tech" === "tech"; // true

// References: Compared by memory address
{} === {}; // false!
(() => {}) === (() => {}); // false!
\`\`\`

When a React component re-executes its render function, every inline object literal or function declaration is allocated a new reference in memory. If that reference is passed down as a prop to a child component, React observes that prop change and re-evaluates the child.

## Anatomy of useMemo: Caching Computed Values

\`useMemo\` caches the result of an expensive calculation between renders unless its declared dependencies change.

\`\`\`tsx
import React, { useMemo } from 'react';

interface MetricItem {
  id: string;
  score: number;
}

export function AnalyticsSummary({ items, filterQuery }: { items: MetricItem[]; filterQuery: string }) {
  // Expensive calculation cached until items or filterQuery changes
  const computedMetrics = useMemo(() => {
    return items
      .filter(item => item.score > 50)
      .reduce((acc, curr) => acc + Math.pow(curr.score, 1.2), 0);
  }, [items, filterQuery]);

  return (
    <div className="p-4 border rounded-lg">
      <span className="text-sm font-medium">Aggregated Score:</span>
      <span className="font-mono text-lg font-bold">{computedMetrics.toFixed(2)}</span>
    </div>
  );
}
\`\`\`

Notice the contract: the compute function executes synchronously during render. It must remain pure and free from side effects.

## Anatomy of useCallback: Preserving Function Identity

\`useCallback\` does not execute a function; it memoizes the **function definition itself**.

\`\`\`tsx
import React, { useState, useCallback } from 'react';

// Child component wrapped in React.memo
const ExpensiveDataRow = React.memo(({ onSelect, id }: { onSelect: (id: string) => void; id: string }) => {
  return (
    <button onClick={() => onSelect(id)} className="px-3 py-1 bg-slate-100 hover:bg-slate-200 rounded">
      Inspect Node {id}
    </button>
  );
});

export function ParentDashboard() {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  // Without useCallback, this handler creates a new reference on every parent render!
  const handleSelect = useCallback((id: string) => {
    setSelectedId(id);
  }, []);

  return <ExpensiveDataRow id="node-42" onSelect={handleSelect} />;
}
\`\`\`

## When Should You Actually Memoize?

Memoization is not free. Every hook adds overhead: allocating closure arrays, traversing dependency comparisons on every render, and keeping variables in memory.

You should consider memoization when:
1. **Passing callbacks to memoized children**: A child wrapped in \`React.memo\` or an optimized virtual list that skips re-renders if props are reference-identical.
2. **Hook dependency arrays**: A function or object is listed in the dependency array of a downstream \`useEffect\` or custom hook.
3. **Expensive computations**: Complex mathematical transforms, heavy regex parsing, or sorting large arrays ($>1,000$ elements).

## The Hidden Cost of Premature Optimization

Wrapping every primitive getter or trivial click handler in \`useCallback\` bloats the bundle and complicates code readability without saving CPU cycles. Modern V8 JavaScript engines allocate small functions in fractions of a microsecond.

> **Rule of thumb**: Measure before memoizing. Open the React DevTools Profiler, capture interactions, and verify if rendering bottlenecks genuinely exist before scattering hooks.

## Summary: 4 Rules for Production React
1. Don't memoize simple calculations that run in under 0.1ms.
2. Use \`useCallback\` primarily when function references are passed to \`React.memo\` children or effect dependencies.
3. Keep dependency arrays honest and linted via ESLint \`react-hooks/exhaustive-deps\`.
4. Strive for simple, decoupled component trees first; optimize hotspots second.
    `,
    relatedArticles: ['software-engineering-clean-code-principles'],
    relatedVideos: ['react-performance-usememo-usecallback', 'react-fiber-reconciliation-engine'],
    relatedCourses: ['react-deep-dive'],
    relatedProjects: ['devknowledge-graph'],
  },
  {
    id: 'art-zero-trust',
    slug: 'zero-trust-architecture-foundations',
    title: 'Zero-Trust Architecture: Foundations of Modern Information Security',
    excerpt: 'Why the perimeter defense model failed and how modern organizations implement "Never Trust, Always Verify" using micro-segmentation, identity-aware proxies, and mutual TLS.',
    category: 'Cybersecurity',
    tags: ['Cybersecurity', 'Architecture', 'Zero-Trust', 'Networking', 'mTLS'],
    author: 'Mansoor Sarookh',
    coverImage: '/src/assets/images/course_infosec_thumb_1791404003280.jpg',
    publishedAt: '2026-02-18',
    updatedAt: '2026-03-01',
    readingTime: 10,
    featured: true,
    tableOfContents: [
      { id: 'collapse-castle-moat', title: 'The Collapse of Castle-and-Moat Security', level: 2 },
      { id: 'three-pillars', title: 'The Three Core Pillars of Zero-Trust', level: 2 },
      { id: 'identity-aware-proxies', title: 'Identity-Aware Proxies & Contextual Auth', level: 2 },
      { id: 'mtls-encryption', title: 'Mutual TLS (mTLS) for Service-to-Service Defense', level: 2 },
      { id: 'implementation-strategy', title: 'Pragmatic Step-by-Step Implementation', level: 2 },
    ],
    content: `
## The Collapse of Castle-and-Moat Security

Historically, enterprise security resembled a medieval fortress: high walls and a deep moat (firewalls, VPNs). Once inside the internal network, any host could communicate freely with other hosts with minimal friction.

However, modern attack topologies proved this model fatally flawed:
- Compromised remote employee credentials give attackers lateral movement across the entire internal subnet.
- Mobile devices, remote work, and hybrid cloud infrastructures dissolved physical network boundaries.
- Software supply chain compromises inject payloads directly behind firewalls.

## The Three Core Pillars of Zero-Trust

The Zero-Trust framework, standardized by NIST SP 800-207, is anchored by three continuous principles:

1. **Verify Explicitly**: Always authenticate and authorize based on all available data points (user identity, device posture, location, data classification, and anomaly telemetry).
2. **Use Least Privilege Access**: Limit user and service access with Just-In-Time (JIT) and Just-Enough-Access (JEA) permissions.
3. **Assume Breach**: Minimize blast radius by micro-segmenting networks, encrypting end-to-end, and using continuous telemetry to detect anomalies.

## Identity-Aware Proxies & Contextual Auth

In place of blanket VPN access, organizations implement Identity-Aware Proxies (IAP). Every HTTP/gRPC request is intercepted by an edge proxy that validates:
- Is the user session valid and MFA-enforced?
- Is the requesting device compliant with enterprise encryption and patch policies?
- Does the user role possess explicit permission for this specific endpoint?

\`\`\`yaml
# Conceptual Envoy Proxy Zero-Trust Filter
apiVersion: networking.istio.io/v1beta1
kind: AuthorizationPolicy
metadata:
  name: enforce-strict-service-role
  namespace: production
spec:
  selector:
    matchLabels:
      app: payments-service
  action: ALLOW
  rules:
  - from:
    - source:
        principals: ["cluster.local/ns/production/sa/checkout-service-account"]
    to:
    - operation:
        methods: ["POST"]
        paths: ["/v1/charge"]
\`\`\`

## Mutual TLS (mTLS) for Service-to-Service Defense

Zero-Trust requires encrypting and authenticating all internal traffic. With Mutual TLS (mTLS), both the client and server exchange X.509 certificates during the handshake:
- The client verifies the server is genuine (preventing spoofing).
- The server verifies the client's cryptographically signed identity before processing requests.

## Pragmatic Step-by-Step Implementation

1. **Catalog Identities & Assets**: Map all human identities, service accounts, and data stores.
2. **Enforce Strong MFA**: Migrate from SMS codes to FIDO2 / WebAuthn hardware passkeys.
3. **Decommission Blanket VPNs**: Transition internal portals behind Identity-Aware Proxies.
4. **Segment Micro-Networks**: Implement software-defined boundaries in service meshes.
5. **Continuous Audit & Telemetry**: Stream structured audit logs to centralized SIEM analyzers.
    `,
    relatedArticles: ['software-engineering-clean-code-principles'],
    relatedVideos: ['information-security-introduction-threat-models', 'information-security-cryptographic-foundations'],
    relatedCourses: ['information-security'],
    relatedResources: ['security-fundamentals-cheatsheet'],
  },
  {
    id: 'art-distributed-consensus',
    slug: 'distributed-systems-demystified-consensus-cap',
    title: 'Distributed Systems Demystified: Concurrency, Consensus, and the CAP Theorem',
    excerpt: 'How modern clusters coordinate without a single point of failure. Deep dive into state machines, split-brain mitigation, and comparing Paxos with Raft.',
    category: 'Computer Science',
    tags: ['Distributed Systems', 'Computer Science', 'Consensus', 'Raft', 'Concurrency'],
    author: 'Mansoor Sarookh',
    coverImage: '/src/assets/images/course_distributed_thumb_1791404019548.jpg',
    publishedAt: '2026-01-28',
    updatedAt: '2026-02-14',
    readingTime: 12,
    featured: true,
    tableOfContents: [
      { id: 'why-distributed-systems-are-hard', title: 'Why Distributed Systems Are Hard', level: 2 },
      { id: 'cap-theorem-nuance', title: 'The CAP Theorem: Realities Beyond the Triangle', level: 2 },
      { id: 'replicated-state-machines', title: 'Replicated State Machines', level: 2 },
      { id: 'how-raft-works', title: 'How Raft Achieves Consensus', level: 2 },
      { id: 'handling-network-partitions', title: 'Handling Network Partitions (Split-Brain)', level: 2 },
    ],
    content: `
## Why Distributed Systems Are Hard

In a single-machine program, when function \`A\` calls function \`B\`, execution either succeeds or crashes the process. Memory is coherent, and the hardware clock is consistent.

In a distributed system, network calls introduce a third terrifying state: **unknown**.
- Did the packet fail to reach the server?
- Did the server crash while processing the request?
- Did the server succeed, but the response packet got dropped on the return path?

These asynchronous partial failures make coordinated agreement (consensus) one of the central problems in computer science.

## The CAP Theorem: Realities Beyond the Triangle

The CAP theorem states that under a **Network Partition (P)**, a distributed system must choose between:
- **Consistency (C)**: Every read receives the most recent write or an error.
- **Availability (A)**: Every non-failing node returns a non-error response, without guarantee of recent write.

> **Crucial insight**: Network partitions are a physical reality of distributed infrastructure (cables get cut, switches drop packets). Therefore, you do not "choose two out of three". You choose how your system responds when a partition occurs: either prioritize strict consistency (reject writes to minority nodes) or prioritize availability (accept writes and reconcile conflicts later).

## Replicated State Machines

Consensus protocols typically implement a **Replicated State Machine**. If multiple servers start in the same state and execute identical sequences of deterministic log commands, they will arrive at identical final states.

\`\`\`
Client Request -> [ Consensus Module ] -> [ Append-Only Log ] -> [ State Machine ]
\`\`\`

## How Raft Achieves Consensus

Before Raft was published by Ongaro & Ousterhout in 2014, Paxos was the dominant consensus protocol, famous for being exceptionally difficult to understand and implement correctly. Raft decomposes consensus into three independent sub-problems:

1. **Leader Election**: When a cluster starts or an existing leader fails, nodes transition to candidates and request votes. Randomized election timeouts (e.g. 150ms–300ms) prevent split votes.
2. **Log Replication**: The elected leader accepts client requests, appends them to its local log, and broadcasts \`AppendEntries\` RPCs to follower nodes.
3. **Safety**: A leader only commits an entry once a majority (quorum: $(N/2) + 1$) of nodes have acknowledged replicating it.

## Handling Network Partitions (Split-Brain)

Consider a 5-node cluster split into two partitions: \`{Node 1, Node 2}\` on side A, and \`{Node 3, Node 4, Node 5}\` on side B.
- Side A cannot achieve quorum because 2 out of 5 is less than majority. Writes to side A will stall or be rejected.
- Side B has 3 out of 5 nodes, electing a leader and continuing to safely commit client commands.
- When the network partition heals, Node 1 and Node 2 recognize the higher term from Side B's leader, truncate uncommitted logs, and synchronize state seamlessly.
    `,
    relatedArticles: ['building-datapilot-ai-ml-pipeline'],
    relatedVideos: ['distributed-systems-concurrency-scaling', 'distributed-systems-raft-consensus-election'],
    relatedCourses: ['parallel-distributed-computing'],
    relatedProjects: ['distributed-kv-store'],
  },
  {
    id: 'art-clean-code',
    slug: 'software-engineering-clean-code-principles',
    title: 'Software Engineering Clean Code Principles: From Theory to Production',
    excerpt: 'A practical, non-dogmatic guide to writing maintainable, readable, and resilient software. Balancing clean code paradigms with real-world developer velocity.',
    category: 'Software Engineering',
    tags: ['Software Engineering', 'Clean Code', 'TypeScript', 'Refactoring', 'Best Practices'],
    author: 'Mansoor Sarookh',
    coverImage: '/src/assets/images/course_infosec_thumb_1791404003280.jpg',
    publishedAt: '2026-01-10',
    updatedAt: '2026-02-05',
    readingTime: 9,
    featured: true,
    tableOfContents: [
      { id: 'the-cost-of-code-rot', title: 'The True Cost of Code Rot', level: 2 },
      { id: 'single-responsibility-real-world', title: 'Single Responsibility in Modern Codebases', level: 2 },
      { id: 'pure-functions-immutability', title: 'Pure Functions & Predictable Immutability', level: 2 },
      { id: 'avoiding-clever-code', title: 'Why Obvious Code Beats "Clever" Code', level: 2 },
      { id: 'pragmatic-refactoring', title: 'The Boy Scout Rule in Pull Requests', level: 2 },
    ],
    content: `
## The True Cost of Code Rot

Software spends $80\\%$ of its lifetime in maintenance. Code that was written in three days by a rushed developer may be read, debugged, and extended by dozens of engineers across years.

When code is cryptic, tightly coupled, and filled with implicit side-effects, velocity plummets:
- Every feature release risks breaking unrelated components.
- Onboarding new engineers takes months instead of days.
- Tests become fragile and painful to maintain.

## Single Responsibility in Modern Codebases

The Single Responsibility Principle (SRP) does not mean a file or function must only be 10 lines long. It states: **A module should be responsible to one, and only one, actor or reason to change.**

\`\`\`typescript
// ❌ Violates SRP: Mixes HTTP validation, DB persistence, and email notification
async function registerUser(req: Request) {
  const data = await req.json();
  if (!data.email.includes('@')) throw new Error("Invalid email");
  await db.query("INSERT INTO users VALUES (?)", [data]);
  await sendGrid.sendEmail({ to: data.email, subject: "Welcome!" });
}

// ✅ Clean decomposition: Clear boundaries and testable units
async function registerUser(
  rawInput: unknown,
  userRepo: UserRepository,
  notificationService: NotificationService
) {
  const user = validateUserPayload(rawInput);
  const created = await userRepo.create(user);
  await notificationService.sendWelcome(created);
  return created;
}
\`\`\`

## Pure Functions & Predictable Immutability

Functions that produce identical output for identical inputs and mutate no external state are trivial to test, reason about, and parallelize.

\`\`\`typescript
// Pure transformation
export function applyDiscounts(cartTotal: number, couponPercentage: number): number {
  const discount = (cartTotal * couponPercentage) / 100;
  return Math.max(0, cartTotal - discount);
}
\`\`\`

## Why Obvious Code Beats "Clever" Code

Engineers often fall into the trap of writing dense one-line regex chains or obscure bitwise operations to demonstrate technical bravado. Production software values clarity above all:
- Write expressive variable names that communicate business intent.
- Avoid boolean flag arguments that alter function behavior internally; create two distinct functions instead.
- Leave comments that explain **why** an unusual design choice was made, not **what** the code does.

## The Boy Scout Rule in Pull Requests

> "Always leave the campground cleaner than you found it."

Whenever you modify a module to implement a feature or patch a bug:
- Rename confusing variables.
- Extract duplicated helper routines.
- Add missing type signatures.
Over time, these micro-improvements compound into exceptional codebase health.
    `,
    relatedArticles: ['understanding-usememo-usecallback-react', 'effective-technical-communication-engineers'],
    relatedCourses: ['software-engineering', 'software-project-management'],
    relatedProjects: ['datapilot-ai'],
    relatedResources: ['design-patterns-quick-reference', 'git-workflow-guide'],
  },
  {
    id: 'art-datapilot-arch',
    slug: 'building-datapilot-ai-ml-pipeline',
    title: 'Building DataPilot AI: Architecture of a No-Code Machine Learning Pipeline',
    excerpt: 'An engineering case study detailing how we built DataPilot AI: from raw Parquet data ingestion to automated Scikit-Learn tournaments and interactive Streamlit UI.',
    category: 'Projects & Experiments',
    tags: ['Data Science', 'Machine Learning', 'Python', 'Streamlit', 'Case Study'],
    author: 'Mansoor Sarookh',
    coverImage: '/src/assets/images/datapilot_ai_showcase_1791403987311.jpg',
    publishedAt: '2025-12-15',
    updatedAt: '2026-01-20',
    readingTime: 11,
    featured: false,
    tableOfContents: [
      { id: 'motivation-problem', title: 'Motivation & The Prototyping Gap', level: 2 },
      { id: 'system-architecture', title: 'High-Level System Architecture', level: 2 },
      { id: 'data-profiling-engine', title: 'Building the Automated Profiling Engine', level: 2 },
      { id: 'model-tournament', title: 'The Automated Model Benchmark Tournament', level: 2 },
      { id: 'lessons-learned', title: 'Lessons Learned in Production', level: 2 },
    ],
    content: `
## Motivation & The Prototyping Gap

Data science teams frequently spend days repeating baseline exploratory data analysis (EDA): plotting correlation heatmaps, computing missing data ratios, and establishing baseline linear/tree models. 

**DataPilot AI** was conceived to compress this manual discovery workflow from hours into minutes, providing non-technical stakeholders and engineers an intuitive interface for evaluating machine learning feasibility on tabular datasets.

## High-Level System Architecture

DataPilot AI follows a clean modular architecture:
1. **Ingestion Layer**: Supports CSV, Parquet, and Excel with Apache Arrow streaming for low memory footprint.
2. **Statistical Profiler**: Fast parallel calculation of distribution statistics, skewness, and cardinality.
3. **Transformation Pipeline**: Automated categorical encoding (One-Hot, Target), iterative imputer, and feature scaling.
4. **Model Tournament Worker**: Asynchronous model execution benchmarking Random Forest, LightGBM, and ElasticNet.
5. **Interactive UI**: Custom-styled Streamlit application communicating with Python workers.

\`\`\`
Uploaded Dataset -> [ Arrow Ingestion ] -> [ Statistical Profiler ]
                                                 ↓
                                      [ Transformation Pipeline ]
                                                 ↓
                                      [ Model Tournament Benchmark ]
                                                 ↓
                                      [ SHAP Explanations & Export ]
\`\`\`

## Building the Automated Profiling Engine

We designed the statistical profiler to minimize Pandas copies:

\`\`\`python
import pandas as pd
import numpy as np

def profile_dataset(df: pd.DataFrame) -> dict:
    total_rows = len(df)
    profile = {}
    for col in df.columns:
        null_count = df[col].isnull().sum()
        profile[col] = {
            "dtype": str(df[col].dtype),
            "missing_pct": (null_count / total_rows) * 100,
            "unique_count": df[col].nunique(),
            "is_constant": df[col].nunique() <= 1
        }
    return profile
\`\`\`

## The Automated Model Benchmark Tournament

The model tournament uses stratified 5-fold cross-validation. Metrics including ROC-AUC, F1-Score, and Mean Squared Error are captured in real-time and tabulated for comparison.

## Lessons Learned in Production
- Streamlit's session state can easily become a memory sink if large DataFrames are duplicated in memory. Always pass immutable references or cache compute steps using \`@st.cache_data\`.
- Model interpretability (SHAP values) is vastly more valuable to real-world business users than a 0.5% boost in test accuracy.
    `,
    relatedArticles: ['software-engineering-clean-code-principles'],
    relatedProjects: ['datapilot-ai'],
    relatedCourses: ['software-engineering'],
  },
  {
    id: 'art-tech-comm',
    slug: 'effective-technical-communication-engineers',
    title: 'Effective Technical Communication: How Engineers Lead Architectural Decisions',
    excerpt: 'Writing code is only half the job. Discover how Request for Comments (RFCs), architecture decision records (ADRs), and empathetic dialogue accelerate engineering teams.',
    category: 'Communication Skills',
    tags: ['Communication', 'Career', 'RFC', 'Architecture', 'Leadership'],
    author: 'Mansoor Sarookh',
    coverImage: '/src/assets/images/course_infosec_thumb_1791404003280.jpg',
    publishedAt: '2025-11-20',
    updatedAt: '2025-12-05',
    readingTime: 7,
    featured: false,
    tableOfContents: [
      { id: 'code-vs-influence', title: 'Code vs Influence: The Senior Engineer Leap', level: 2 },
      { id: 'anatomy-of-good-rfc', title: 'Anatomy of an Effective Engineering RFC', level: 2 },
      { id: 'presenting-tradeoffs', title: 'Framing Technical Tradeoffs Without Bias', level: 2 },
      { id: 'code-review-empathy', title: 'Code Review Etiquette that Builds Trust', level: 2 },
    ],
    content: `
## Code vs Influence: The Senior Engineer Leap

Junior engineers often believe their value is measured purely by lines of code merged or tickets closed. As you progress to Mid-level, Senior, and Staff roles, your impact becomes proportional to your ability to:
- Align cross-functional teams around architectural direction.
- Document system tradeoffs before committing months of engineering effort.
- Mentor team members and build a culture of high psychological safety.

## Anatomy of an Effective Engineering RFC

A Request for Comments (RFC) is not an academic dissertation. It is a decision-making document designed to gather feedback on significant changes.

Essential sections:
1. **Summary**: One crisp paragraph explaining what is being proposed.
2. **Context & Motivation**: Why are we doing this now? What happens if we do nothing?
3. **Proposed Architecture**: Diagrams, schema changes, and service interactions.
4. **Alternatives Considered**: What other libraries, designs, or frameworks did you evaluate, and why were they rejected?
5. **Security, Privacy & Cost Impact**: Cloud resource cost, latency implications, and compliance.

## Framing Technical Tradeoffs Without Bias

There are no solutions in software architecture; there are only **tradeoffs**. When presenting proposals:
- Avoid declaring a technology "the best".
- Quantify: "Choosing PostgreSQL gives us strict ACID transactions and relational safety, but adds operational overhead compared to DynamoDB."
- Acknowledge potential downsides transparently. This builds trust with stakeholders.

## Code Review Etiquette that Builds Trust
- Distinguish between blocking issues and non-blocking nitpicks (prefix with \`nit:\`).
- Praise clever solutions or well-written unit tests.
- Ask questions instead of making demands: instead of *"This is inefficient, rewrite it"*, write *"What do you think about memoizing this calculation to prevent re-renders when the list grows?"*
    `,
    relatedArticles: ['software-engineering-clean-code-principles'],
    relatedCourses: ['communication-skills', 'software-project-management'],
  },
];
