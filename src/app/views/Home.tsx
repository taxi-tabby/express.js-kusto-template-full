// Landing page (React CSR) — rendered via router.GET_REACT('Home', { props }).
//
// Express.js-Kusto FULL edition: backend (Express · Prisma · JSON:API) and the React
// frontend (CSR) through the same router. Dense, structured, professional — styled with
// Tailwind v4 (views/app.css). Archivo display · IBM Plex Sans KR body · JetBrains Mono.

import { useState } from 'react';
import type { ReactNode } from 'react';

type HomeProps = {
    FRAMEWORK_URL?: string;
    NODE_ENV?: string;
};

type Cap = { n: string; title: string; desc: string; tag?: string };

const CAPS: Cap[] = [
    { n: '01', title: 'Convention Routing', desc: '폴더 구조가 곧 URL. route.ts 만 자동 등록한다.' },
    { n: '02', title: 'JSON:API CRUD', desc: '모델 한 줄로 필터·정렬·페이지네이션 REST 생성.' },
    { n: '03', title: 'Multi-DB Prisma', desc: '폴더당 독립 데이터베이스, 서버리스 자동 재연결.' },
    { n: '04', title: 'Typed DI', desc: 'injected · repo · db 를 핸들러에 타입 안전 주입.' },
    { n: '05', title: 'React Frontend', desc: 'router.GET_REACT 로 같은 라우터에서 CSR 페이지.', tag: 'FULL' },
    { n: '06', title: 'Tailwind v4', desc: 'views/app.css 를 확장이 자동 컴파일 · 서빙.', tag: 'FULL' },
];

const STATS: { k: string; v: string }[] = [
    { k: 'JSON:API', v: 'v1.1 · CRUD 자동 생성' },
    { k: 'Multi-DB', v: '폴더당 Prisma 클라이언트' },
    { k: 'Typed DI', v: 'injected · repo · db' },
    { k: 'React CSR', v: 'GET_REACT · Tailwind v4' },
];

function CopyButton({ text }: { text: string }) {
    const [copied, setCopied] = useState(false);
    return (
        <button
            type="button"
            onClick={() => {
                navigator.clipboard?.writeText(text).then(() => {
                    setCopied(true);
                    setTimeout(() => setCopied(false), 1400);
                });
            }}
            className="shrink-0 rounded-[5px] border border-line px-2.5 py-1 font-mono text-[11px] uppercase tracking-wider text-muted transition-colors hover:border-accent hover:text-accent"
        >
            {copied ? 'Copied' : 'Copy'}
        </button>
    );
}

function CodeLine({ children }: { children: ReactNode }) {
    return <div className="whitespace-pre">{children}</div>;
}

function ArrowLink({ href, children }: { href: string; children: ReactNode }) {
    return (
        <a href={href} className="group inline-flex items-center gap-1.5 text-ink transition-colors hover:text-accent">
            {children}
            <span className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
        </a>
    );
}

export default function Home({ FRAMEWORK_URL, NODE_ENV }: HomeProps) {
    const isDev = NODE_ENV === 'development';
    const installCmd = 'npm install && npm run dev';

    return (
        <div className="mx-auto flex min-h-screen max-w-6xl flex-col px-5 sm:px-8">
            {/* ── nav ───────────────────────────────────────────── */}
            <nav className="flex items-center justify-between gap-4 border-b border-line py-4">
                <div className="flex items-baseline gap-3">
                    <span className="font-display text-[17px] font-extrabold tracking-tight text-ink">
                        Express.js<span className="text-accent">-</span>Kusto
                    </span>
                    <span className="hidden rounded-[4px] border border-line px-1.5 py-0.5 font-mono text-[10px] text-muted sm:inline-block">
                        v0.2.1
                    </span>
                </div>
                <div className="flex items-center gap-5 font-mono text-[12px] text-muted">
                    <a href="/demo" className="transition-colors hover:text-ink">Demo</a>
                    {isDev ? (
                        <>
                            <a href="/docs" className="hidden transition-colors hover:text-ink sm:inline">Docs</a>
                            <a href="/docs/dev" className="hidden transition-colors hover:text-ink sm:inline">Dev</a>
                        </>
                    ) : null}
                    {FRAMEWORK_URL ? (
                        <a
                            href={FRAMEWORK_URL}
                            className="rounded-md bg-ink px-3.5 py-1.5 text-paper transition-colors hover:bg-accent-ink"
                        >
                            GitHub ↗
                        </a>
                    ) : null}
                </div>
            </nav>

            {/* ── hero ──────────────────────────────────────────── */}
            <header className="grid grid-cols-1 gap-12 border-b border-line py-16 md:grid-cols-12 md:gap-8 md:py-24">
                <div className="md:col-span-7">
                    <p className="animate-rise font-mono text-[11px] uppercase tracking-[0.3em] text-accent">
                        Full-stack TypeScript Framework
                    </p>
                    <h1
                        className="animate-rise mt-5 font-display text-[2.6rem] font-extrabold leading-[0.98] tracking-[-0.02em] text-ink sm:text-6xl"
                        style={{ animationDelay: '60ms' }}
                    >
                        Backend and React,
                        <br />
                        <span className="text-accent">one router.</span>
                    </h1>
                    <p
                        className="animate-rise mt-7 max-w-xl text-[15px] leading-relaxed text-ink-soft"
                        style={{ animationDelay: '120ms' }}
                    >
                        Express · Prisma · JSON:API 백엔드와 React(CSR) 프론트엔드를 같은 컨벤션,
                        같은 <span className="font-mono text-ink">ExpressRouter</span> 에서 다룹니다.
                        이 템플릿은 그 둘을 모두 담은 <span className="text-accent">full</span> 버전입니다.
                    </p>

                    <div className="animate-rise mt-9 flex flex-wrap items-center gap-3" style={{ animationDelay: '180ms' }}>
                        <a
                            href="#start"
                            className="inline-flex h-11 items-center rounded-md bg-accent px-6 text-sm font-semibold text-paper transition-colors hover:bg-accent-ink"
                        >
                            시작하기
                        </a>
                        {FRAMEWORK_URL ? (
                            <a
                                href={FRAMEWORK_URL}
                                className="inline-flex h-11 items-center gap-1.5 rounded-md border border-line px-6 text-sm font-medium text-ink transition-colors hover:border-accent hover:text-accent"
                            >
                                GitHub <span className="text-muted">↗</span>
                            </a>
                        ) : null}
                    </div>
                </div>

                {/* install card */}
                <div className="animate-rise md:col-span-5 md:self-end" style={{ animationDelay: '240ms' }}>
                    <div className="overflow-hidden rounded-lg border border-line bg-paper-2">
                        <div className="flex items-center justify-between border-b border-line px-4 py-2.5">
                            <span className="font-mono text-[11px] uppercase tracking-wider text-muted">Quick start</span>
                            <span className="flex gap-1.5" aria-hidden>
                                <span className="h-2 w-2 rounded-full bg-line" />
                                <span className="h-2 w-2 rounded-full bg-line" />
                                <span className="h-2 w-2 rounded-full bg-accent-soft" />
                            </span>
                        </div>
                        <div className="flex items-center gap-3 px-4 py-4">
                            <code className="flex-1 overflow-x-auto font-mono text-[13px] text-ink">
                                <span className="select-none text-accent">$ </span>
                                {installCmd}
                            </code>
                            <CopyButton text={installCmd} />
                        </div>
                    </div>
                    <p className="mt-3 px-1 font-mono text-[11px] leading-relaxed text-muted">
                        그다음 <span className="text-ink">localhost:3000</span> — 이 페이지가
                        <span className="text-ink"> GET_REACT('Home')</span> 로 렌더된 결과입니다.
                    </p>
                </div>
            </header>

            {/* ── server ⇄ client ───────────────────────────────── */}
            <section className="grid grid-cols-1 gap-px overflow-hidden border-b border-line bg-line sm:grid-cols-[1fr_auto_1fr]">
                <div className="bg-paper px-6 py-7">
                    <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted">Server</div>
                    <div className="mt-2 font-display text-lg font-bold text-ink">Express · Prisma · JSON:API</div>
                    <p className="mt-1 text-[13px] text-muted">CRUD · 멀티 DB · 타입 안전 DI · 검증/직렬화</p>
                </div>
                <div className="flex items-center justify-center bg-paper px-6 py-4 text-2xl text-accent" aria-hidden>
                    ⇄
                </div>
                <div className="bg-paper px-6 py-7 sm:text-right">
                    <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted">Client</div>
                    <div className="mt-2 font-display text-lg font-bold text-ink">React · Tailwind v4 · CSR</div>
                    <p className="mt-1 text-[13px] text-muted">GET_REACT · views/ 컨벤션 · 자동 번들/스타일</p>
                </div>
            </section>

            {/* ── capabilities ──────────────────────────────────── */}
            <section className="border-b border-line py-16">
                <div className="mb-8 flex items-center gap-4">
                    <h2 className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted">Capabilities</h2>
                    <span className="h-px flex-1 origin-left animate-line bg-line" />
                    <span className="font-mono text-[11px] text-muted">06</span>
                </div>

                <div className="grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
                    {CAPS.map((c) => (
                        <article key={c.n} className="group bg-paper p-6 transition-colors duration-300 hover:bg-paper-2">
                            <div className="flex items-center justify-between">
                                <span className="font-mono text-xs tabular-nums text-muted transition-colors group-hover:text-accent">
                                    {c.n}
                                </span>
                                {c.tag ? (
                                    <span className="rounded-[3px] bg-accent px-1.5 py-0.5 font-mono text-[9px] font-semibold tracking-widest text-paper">
                                        {c.tag}
                                    </span>
                                ) : null}
                            </div>
                            <h3 className="mt-5 font-display text-base font-bold tracking-tight text-ink">{c.title}</h3>
                            <p className="mt-1.5 text-[13px] leading-relaxed text-muted">{c.desc}</p>
                        </article>
                    ))}
                </div>
            </section>

            {/* ── one router, both worlds ───────────────────────── */}
            <section id="start" className="grid grid-cols-1 gap-10 border-b border-line py-16 md:grid-cols-12 md:gap-8">
                <div className="md:col-span-5">
                    <h2 className="font-display text-2xl font-bold tracking-tight text-ink">하나의 라우터, 두 세계.</h2>
                    <p className="mt-4 max-w-md text-[14px] leading-relaxed text-ink-soft">
                        같은 <span className="font-mono text-ink">route.ts</span> 안에서 REST API 와
                        React 페이지를 함께 선언합니다. 백엔드와 프론트가 분리된 두 프로젝트가 아니라,
                        하나의 라우팅 트리 위에 있습니다.
                    </p>
                    <div className="mt-6 flex flex-col gap-2 font-mono text-[12px] text-muted">
                        <span><span className="text-accent">.CRUD()</span> — JSON:API REST 엔드포인트</span>
                        <span><span className="text-accent">.GET_REACT()</span> — React CSR 페이지</span>
                        <span><span className="text-accent">.POST_VALIDATED()</span> — 스키마 검증 라우트</span>
                    </div>
                </div>

                <div className="md:col-span-7">
                    <div className="overflow-hidden rounded-lg border border-line bg-paper-2">
                        <div className="flex items-center justify-between border-b border-line px-4 py-2.5 font-mono text-[11px] text-muted">
                            <span>src/app/routes/route.ts</span>
                            <span className="tracking-widest">TS</span>
                        </div>
                        <pre className="overflow-x-auto px-5 py-5 font-mono text-[12.5px] leading-7 text-ink-soft">
                            <CodeLine>
                                <span className="text-muted">const</span> router ={' '}
                                <span className="text-muted">new</span> <span className="text-ink">ExpressRouter</span>()
                            </CodeLine>
                            <CodeLine>{' '}</CodeLine>
                            <CodeLine>router</CodeLine>
                            <CodeLine>
                                {'  '}.<span className="text-accent">CRUD</span>(
                                <span className="text-ink">'default'</span>,{' '}
                                <span className="text-ink">'user'</span>){'    '}
                                <span className="text-muted">// REST · JSON:API</span>
                            </CodeLine>
                            <CodeLine>
                                {'  '}.<span className="text-accent">GET_REACT</span>(
                                <span className="text-ink">'Home'</span>){'         '}
                                <span className="text-muted">// React page · CSR</span>
                            </CodeLine>
                            <CodeLine>{' '}</CodeLine>
                            <CodeLine>
                                <span className="text-muted">export default</span> router.
                                <span className="text-accent">build</span>()
                            </CodeLine>
                        </pre>
                    </div>
                </div>
            </section>

            {/* ── stat strip ────────────────────────────────────── */}
            <section className="grid grid-cols-2 gap-px overflow-hidden border-b border-line bg-line lg:grid-cols-4">
                {STATS.map((s) => (
                    <div key={s.k} className="bg-paper px-5 py-7">
                        <div className="font-display text-xl font-extrabold tracking-tight text-ink">{s.k}</div>
                        <div className="mt-1 font-mono text-[11px] leading-snug text-muted">{s.v}</div>
                    </div>
                ))}
            </section>

            {/* ── footer ────────────────────────────────────────── */}
            <footer className="mt-auto flex flex-col gap-3 py-8 font-mono text-[11px] text-muted sm:flex-row sm:items-center sm:justify-between">
                <span className="uppercase tracking-[0.18em]">MIT · © 2025 Express.js-Kusto</span>
                <nav className="flex flex-wrap items-center gap-x-6 gap-y-2">
                    {FRAMEWORK_URL ? <ArrowLink href={FRAMEWORK_URL}>Source</ArrowLink> : null}
                    {isDev ? (
                        <>
                            <ArrowLink href="/docs">API Docs</ArrowLink>
                            <ArrowLink href="/docs/dev">Dev Dashboard</ArrowLink>
                        </>
                    ) : null}
                </nav>
            </footer>
        </div>
    );
}
