import { Resource } from '../types';

export const resourcesData: Resource[] = [
  {
    id: 'res-react-roadmap',
    slug: 'react-learning-roadmap',
    title: 'Modern React Developer Roadmap (2026 Edition)',
    description: 'A comprehensive, step-by-step sequential learning path from foundational web standards to advanced React 19 architecture, performance tuning, and full-stack systems.',
    type: 'roadmap',
    topic: 'Web Development',
    tags: ['React', 'Roadmap', 'TypeScript', 'Frontend', 'Next.js', 'State'],
    featured: true,
    roadmapSteps: [
      {
        step: 1,
        title: 'Core Web Standards (HTML5 & Modern CSS)',
        description: 'Semantic markup, accessibility (ARIA, WCAG), box model, Flexbox, Grid, CSS custom properties, and responsive design.',
        skills: ['Semantic HTML', 'CSS Grid & Flexbox', 'Responsive Design', 'WCAG 2.2 AA Basics'],
      },
      {
        step: 2,
        title: 'JavaScript Deep Dive & TypeScript Fundamentals',
        description: 'Execution context, lexical scope, closures, event loop, promises, async/await, ES Modules, and static type safety with TypeScript.',
        skills: ['Closures & Scope', 'Async/Await & Microtasks', 'ES6+ Syntax', 'TypeScript Generics & Types'],
      },
      {
        step: 3,
        title: 'React Core & Component Fundamentals',
        description: 'JSX mechanics, props vs state, pure components, keys and list reconciliation, lifting state up, controlled vs uncontrolled forms.',
        skills: ['JSX Compilation', 'Component Decomposition', 'Props Interface Design', 'Pure Functions'],
      },
      {
        step: 4,
        title: 'Essential React Hooks & Lifecycles',
        description: 'useState, useEffect dependency arrays, useRef for mutable refs and DOM access, custom reusable hooks.',
        skills: ['useState', 'useEffect rules', 'useRef', 'Custom Hook Composition'],
      },
      {
        step: 5,
        title: 'Performance & Memoization Mastery',
        description: 'Understanding why React re-renders, React.memo, useMemo, useCallback, React DevTools Profiler, and avoiding premature optimization.',
        skills: ['useMemo', 'useCallback', 'React.memo', 'Referential Equality', 'Flame Chart Profiling'],
      },
      {
        step: 6,
        title: 'Advanced State Management & Routing',
        description: 'Context API boundaries, reducer patterns, client-side routing (React Router), state machines, and server-cache stores.',
        skills: ['Context Architecture', 'useReducer', 'React Router v7', 'URL State Query Sync'],
      },
      {
        step: 7,
        title: 'Testing, Deployment & Production Readiness',
        description: 'Unit testing with Vitest/Testing Library, accessibility audits, CI/CD automated test runs, bundle analysis, and performance budgets.',
        skills: ['Testing Library', 'Accessibility Auditing', 'Vite Bundle Splitting', 'Core Web Vitals'],
      },
    ],
    relatedArticles: ['understanding-usememo-usecallback-react'],
    relatedCourses: ['react-deep-dive'],
  },
  {
    id: 'res-infosec-cheatsheet',
    slug: 'security-fundamentals-cheatsheet',
    title: 'Information Security & Defensive Coding Cheat Sheet',
    description: 'Quick reference guide covering cryptographic primitives, hashing functions, common web vulnerability remediations, and secure HTTP header configurations.',
    type: 'cheatsheet',
    topic: 'Cybersecurity',
    tags: ['Security', 'Cryptography', 'OWASP', 'Headers', 'JWT'],
    featured: true,
    content: `### 1. Cryptographic Primitives Quick Reference

| Algorithm | Type | Key Size | Recommended Use |
| :--- | :--- | :--- | :--- |
| **AES-256-GCM** | Symmetric Cipher | 256-bit | High-speed authenticated encryption for data at rest & transit |
| **ChaCha20-Poly1305** | Symmetric Stream | 256-bit | Hardware without AES-NI acceleration (mobile/embedded) |
| **Ed25519** | Asymmetric Signature | 256-bit | Digital signatures (fast, constant-time, collision resistant) |
| **X25519** | Key Exchange | 256-bit | Diffie-Hellman key negotiation in TLS 1.3 |
| **Argon2id** | Password Hash (KDF) | Configurable | Password storage with memory-hard brute-force defense |
| **SHA-256 / SHA-3** | Cryptographic Hash | 256-bit | Data integrity verification (NEVER for passwords) |

### 2. Mandatory Production Security Headers

\`\`\`http
Content-Security-Policy: default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:;
Strict-Transport-Security: max-age=63072000; includeSubDomains; preload
X-Content-Type-Options: nosniff
X-Frame-Options: DENY
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: camera=(), microphone=(), geolocation=()
\`\`\`

### 3. OWASP Top 10 Rapid Defense Checklist
- **SQL Injection**: Always use parameterized queries or trusted ORM abstraction. Never concatenate user strings into SQL.
- **Cross-Site Scripting (XSS)**: Context-aware escaping; use frameworks that escape by default (React/Vue); enforce strict CSP.
- **Cross-Site Request Forgery (CSRF)**: SameSite=Lax/Strict cookie flags; Anti-CSRF synchronization tokens on mutation endpoints.
- **Broken Object Level Auth (BOLA / IDOR)**: Verify current authenticated user has ownership rights over the requested object ID on the server.`,
    relatedArticles: ['zero-trust-architecture-foundations'],
    relatedCourses: ['information-security'],
  },
  {
    id: 'res-design-patterns',
    slug: 'design-patterns-quick-reference',
    title: 'Software Design Patterns in TypeScript',
    description: 'Concrete architectural examples and code patterns for Gang of Four design patterns implemented cleanly in modern TypeScript.',
    type: 'cheatsheet',
    topic: 'Software Engineering',
    tags: ['Design Patterns', 'TypeScript', 'Clean Code', 'Architecture'],
    featured: true,
    codeSnippet: {
      language: 'typescript',
      code: `// 1. Strategy Pattern in TypeScript
interface PaymentStrategy {
  process(amount: number): Promise<{ success: boolean; txId: string }>;
}

class StripeStrategy implements PaymentStrategy {
  async process(amount: number) {
    return { success: true, txId: \`stripe_\${Date.now()}\` };
  }
}

class PayPalStrategy implements PaymentStrategy {
  async process(amount: number) {
    return { success: true, txId: \`paypal_\${Date.now()}\` };
  }
}

class CheckoutProcessor {
  constructor(private strategy: PaymentStrategy) {}

  setStrategy(strategy: PaymentStrategy) {
    this.strategy = strategy;
  }

  async executePayment(amount: number) {
    return this.strategy.process(amount);
  }
}

// 2. Observer Pattern with Type-Safe Event Bus
type Listener<T> = (data: T) => void;

class TypedEventEmitter<TEvents extends Record<string, unknown>> {
  private listeners: { [K in keyof TEvents]?: Listener<TEvents[K]>[] } = {};

  on<K extends keyof TEvents>(event: K, listener: Listener<TEvents[K]>) {
    this.listeners[event] = this.listeners[event] || [];
    this.listeners[event]!.push(listener);
    return () => this.off(event, listener);
  }

  off<K extends keyof TEvents>(event: K, listener: Listener<TEvents[K]>) {
    this.listeners[event] = (this.listeners[event] || []).filter(l => l !== listener);
  }

  emit<K extends keyof TEvents>(event: K, data: TEvents[K]) {
    (this.listeners[event] || []).forEach(l => l(data));
  }
}`,
    },
    relatedArticles: ['software-engineering-clean-code-principles'],
    relatedCourses: ['software-engineering'],
  },
  {
    id: 'res-git-workflow',
    slug: 'git-workflow-guide',
    title: 'Professional Git & GitHub Collaboration Workflow',
    description: 'A production reference for feature branching, interactive rebasing, conventional commits, and conflict resolution.',
    type: 'guide',
    topic: 'Software Engineering',
    tags: ['Git', 'GitHub', 'DevOps', 'Workflow', 'Clean Code'],
    featured: false,
    content: `### 1. The Clean Branching Model
- Keep \`main\` always deployable.
- Feature branches branch off \`main\` with clean names: \`feature/auth-oauth2\`, \`fix/token-expiry-race\`, \`docs/api-specs\`.
- Regularly rebase against upstream \`main\` to avoid tangled merge bubbles:
  \`\`\`bash
  git checkout feature/my-branch
  git fetch origin
  git rebase origin/main
  \`\`\`

### 2. Conventional Commit Standards
Use semantic commit prefixes to enable automated changelog generation and semantic versioning:
- \`feat:\` A new user-facing capability or functionality
- \`fix:\` A bug patch
- \`refactor:\` Code changes that neither fix a bug nor add a feature
- \`perf:\` Performance enhancement
- \`test:\` Adding or correcting test suites
- \`docs:\` Documentation modifications only

### 3. Interactive Rebase for Clean History
Before opening a Pull Request, squash messy WIP commits:
\`\`\`bash
git rebase -i HEAD~4
\`\`\`
Choose \`pick\` for the first commit and \`squash\` (or \`s\`) for subsequent fixups.`,
    relatedCourses: ['software-project-management'],
  },
  {
    id: 'res-js-snippets',
    slug: 'javascript-es2024-quick-reference',
    title: 'Modern JavaScript & TypeScript Utility Snippets',
    description: 'Production-tested zero-dependency helper functions: debounce, throttle, deep clone, retry mechanism, and memoize.',
    type: 'snippet',
    topic: 'Programming',
    tags: ['JavaScript', 'TypeScript', 'Utils', 'Performance'],
    featured: false,
    codeSnippet: {
      language: 'typescript',
      code: `// 1. Safe Debounce with Type-Preserved Arguments
export function debounce<T extends (...args: any[]) => void>(
  fn: T,
  delayMs: number
): (...args: Parameters<T>) => void {
  let timerId: ReturnType<typeof setTimeout> | null = null;
  return function (...args: Parameters<T>) {
    if (timerId) clearTimeout(timerId);
    timerId = setTimeout(() => {
      fn(...args);
      timerId = null;
    }, delayMs);
  };
}

// 2. Exponential Backoff Retry Utility
export async function retryWithBackoff<T>(
  operation: () => Promise<T>,
  maxRetries = 3,
  initialDelayMs = 200,
  backoffFactor = 2
): Promise<T> {
  let attempt = 0;
  while (true) {
    try {
      return await operation();
    } catch (error) {
      attempt++;
      if (attempt >= maxRetries) throw error;
      const delay = initialDelayMs * Math.pow(backoffFactor, attempt - 1);
      await new Promise(resolve => setTimeout(resolve, delay));
    }
  }
}

// 3. Structured Deep Clone (Modern standard)
export function deepClone<T>(value: T): T {
  if (typeof structuredClone === 'function') {
    return structuredClone(value);
  }
  return JSON.parse(JSON.stringify(value));
}`,
    },
    relatedArticles: ['understanding-usememo-usecallback-react'],
  },
];
