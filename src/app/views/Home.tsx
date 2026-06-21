// Landing page (React CSR) — rendered via router.GET_REACT('Home', { props }).
//
// Aesthetic: warm engineering-paper editorial. The whole layout exists to say one thing —
// Express.js-Kusto FULL edition runs the backend (Express · Prisma · JSON:API) and the
// React frontend (CSR) through the *same router*. Styled with Tailwind v4 (views/app.css).

import type { ReactNode } from 'react';

type HomeProps = {
    FRAMEWORK_URL?: string;
    NODE_ENV?: string;
};

type Cap = { n: string; title: string; desc: string; tag?: string };

const CAPS: Cap[] = [
    { n: '01', title: 'Convention Routing', desc: '폴더 구조가 곧 URL. route.ts 만 자동 등록.' },
    { n: '02', title: 'JSON:API CRUD', desc: '모델 한 줄로 필터·정렬·페이지네이션 REST 생성.' },
    { n: '03', title: 'Multi-DB Prisma', desc: '폴더당 독립 데이터베이스. 서버리스 자동 재연결.' },
    { n: '04', title: 'Typed DI', desc: 'injected · repo · db 를 핸들러에 타입 안전 주입.' },
    { n: '05', title: 'React Frontend', desc: 'router.GET_REACT 로 같은 라우터에서 CSR 페이지.', tag: 'FULL' },
    { n: '06', title: 'Tailwind v4', desc: 'views/app.css 를 확장이 자동 컴파일 · 서빙.', tag: 'FULL' },
];

function CodeLine({ children }: { children: ReactNode }) {
    return <div className="whitespace-pre">{children}</div>;
}

export default function Home({ FRAMEWORK_URL, NODE_ENV }: HomeProps) {
    const isDev = NODE_ENV === 'development';

    return (
        <div className="relative min-h-screen overflow-hidden">
            {/* paper grain */}
            <div
                aria-hidden
                className="pointer-events-none fixed inset-0 z-0 opacity-[0.05] mix-blend-multiply"
                style={{
                    backgroundImage:
                        "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
                }}
            />

            <div className="relative z-10 mx-auto flex min-h-screen max-w-5xl flex-col px-6 md:px-10">
                {/* document header */}
                <header className="flex items-center justify-between gap-4 border-b border-line py-5 font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                    <span className="text-ink">Express.js-Kusto</span>
                    <span className="flex items-center gap-2">
                        <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent-soft" />
                        Full Edition
                    </span>
                </header>

                {/* hero */}
                <main className="flex flex-1 flex-col justify-center py-16 md:py-24">
                    <p className="animate-rise font-mono text-xs uppercase tracking-[0.32em] text-accent">
                        Backend&nbsp;+&nbsp;React · One Runtime
                    </p>

                    <h1
                        className="animate-rise mt-6 font-display text-[2.75rem] font-semibold leading-[0.94] tracking-tight text-ink sm:text-6xl md:text-7xl"
                        style={{ animationDelay: '60ms' }}
                    >
                        하나의 라우터로,
                        <br />
                        <span className="italic text-accent">server</span> 와{' '}
                        <span className="italic">client</span> 를.
                    </h1>

                    <p
                        className="animate-rise mt-8 max-w-xl text-[15px] leading-relaxed text-ink-soft md:text-base"
                        style={{ animationDelay: '120ms' }}
                    >
                        Express 백엔드(Prisma · JSON:API CRUD)와 React 프론트엔드(CSR)를 같은
                        컨벤션, 같은 <span className="font-mono text-ink">ExpressRouter</span> 에서
                        다룹니다. 이 템플릿은 그 둘을 모두 담은 <span className="text-accent">full</span> 버전입니다.
                    </p>

                    {/* server ⇄ client */}
                    <div
                        className="animate-rise mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-sm border border-line bg-line sm:grid-cols-[1fr_auto_1fr]"
                        style={{ animationDelay: '180ms' }}
                    >
                        <div className="bg-paper px-5 py-4">
                            <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">Server</div>
                            <div className="mt-1 font-mono text-sm text-ink">Express · Prisma · JSON:API</div>
                        </div>
                        <div className="flex items-center justify-center bg-paper px-5 py-3 text-accent sm:px-6">
                            <span className="font-mono text-lg" aria-hidden>⇄</span>
                        </div>
                        <div className="bg-paper px-5 py-4 sm:text-right">
                            <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">Client</div>
                            <div className="mt-1 font-mono text-sm text-ink">React · Tailwind v4 · CSR</div>
                        </div>
                    </div>
                </main>

                {/* capabilities */}
                <section className="pb-16">
                    <div className="mb-6 flex items-center gap-4">
                        <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">Capabilities</span>
                        <span className="h-px flex-1 origin-left animate-line bg-line" />
                    </div>

                    <div className="grid grid-cols-1 border-t border-line sm:grid-cols-2">
                        {CAPS.map((c) => (
                            <article
                                key={c.n}
                                className="group grid grid-cols-[2.25rem_1fr] gap-x-4 border-b border-line py-5 transition-colors duration-300 hover:bg-paper-2 sm:[&:nth-child(odd)]:border-r sm:[&:nth-child(odd)]:pr-8 sm:[&:nth-child(even)]:pl-8"
                            >
                                <span className="pt-0.5 font-mono text-xs tabular-nums text-muted transition-colors duration-300 group-hover:text-accent">
                                    {c.n}
                                </span>
                                <div>
                                    <div className="flex items-baseline justify-between gap-3">
                                        <h3 className="font-mono text-sm font-medium uppercase tracking-wide text-ink">
                                            {c.title}
                                        </h3>
                                        {c.tag ? (
                                            <span className="shrink-0 rounded-[3px] border border-accent/30 px-1.5 py-0.5 font-mono text-[9px] tracking-widest text-accent">
                                                {c.tag}
                                            </span>
                                        ) : null}
                                    </div>
                                    <p className="mt-1.5 text-[13px] leading-relaxed text-muted">{c.desc}</p>
                                </div>
                            </article>
                        ))}
                    </div>
                </section>

                {/* one router, both worlds */}
                <section className="pb-20">
                    <div className="overflow-hidden rounded-md border border-line bg-paper-2">
                        <div className="flex items-center justify-between border-b border-line px-4 py-2.5 font-mono text-[11px] text-muted">
                            <span>src/app/routes/route.ts</span>
                            <span className="tracking-widest">TS</span>
                        </div>
                        <pre className="overflow-x-auto px-5 py-5 font-mono text-[12.5px] leading-7 text-ink-soft md:text-[13px]">
                            <CodeLine>
                                <span className="text-muted">const</span> router ={' '}
                                <span className="text-muted">new</span>{' '}
                                <span className="text-ink">ExpressRouter</span>()
                            </CodeLine>
                            <CodeLine>{' '}</CodeLine>
                            <CodeLine>router</CodeLine>
                            <CodeLine>
                                {'  '}.<span className="text-accent">CRUD</span>(
                                <span className="text-ink">'default'</span>,{' '}
                                <span className="text-ink">'user'</span>){'   '}
                                <span className="text-muted">// REST · JSON:API</span>
                            </CodeLine>
                            <CodeLine>
                                {'  '}.<span className="text-accent">GET_REACT</span>(
                                <span className="text-ink">'Home'</span>){'        '}
                                <span className="text-muted">// React page · CSR</span>
                            </CodeLine>
                            <CodeLine>{' '}</CodeLine>
                            <CodeLine>
                                <span className="text-muted">export default</span> router.
                                <span className="text-accent">build</span>()
                            </CodeLine>
                        </pre>
                    </div>
                </section>

                {/* footer */}
                <footer className="mt-auto flex flex-col gap-3 border-t border-line py-6 font-mono text-[11px] text-muted sm:flex-row sm:items-center sm:justify-between">
                    <span className="uppercase tracking-[0.18em]">MIT · © 2025 Express.js-Kusto</span>
                    <nav className="flex flex-wrap items-center gap-x-6 gap-y-2">
                        {FRAMEWORK_URL ? (
                            <a href={FRAMEWORK_URL} className="group inline-flex items-center gap-1.5 text-ink transition-colors hover:text-accent">
                                Source
                                <span className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
                            </a>
                        ) : null}
                        {isDev ? (
                            <>
                                <a href="/docs" className="group inline-flex items-center gap-1.5 text-ink transition-colors hover:text-accent">
                                    API Docs
                                    <span className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
                                </a>
                                <a href="/docs/dev" className="group inline-flex items-center gap-1.5 text-ink transition-colors hover:text-accent">
                                    Dev Dashboard
                                    <span className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
                                </a>
                            </>
                        ) : null}
                    </nav>
                </footer>
            </div>
        </div>
    );
}
