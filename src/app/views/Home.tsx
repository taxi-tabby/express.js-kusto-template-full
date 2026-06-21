// Landing page (React CSR) — rendered via router.GET_REACT('Home', { props }).
// Styled with Tailwind v4; utilities are compiled from src/app/views/app.css by the
// @expressjs-kusto/react extension and served at /__kusto_react/client.css.

type HomeProps = {
    FRAMEWORK_URL?: string;
    NODE_ENV?: string;
};

const FEATURES: { icon: string; title: string; lines: [string, string] }[] = [
    { icon: 'fa-code', title: '혁신적 아키텍처', lines: ['파일 기반 자동 등록', '멀티 데이터베이스 관리'] },
    { icon: 'fa-shield-alt', title: '완전 타입 안전', lines: ['Injectable DI', '타입 안전 의존성 주입'] },
    { icon: 'fa-rocket', title: '제로 코드 자동화', lines: ['CRUD 자동 생성', 'REST API + 문서화'] },
    { icon: 'fa-cogs', title: '고급 개발 환경', lines: ['Webpack 빌드', '프로덕션 최적화'] },
    { icon: 'fa-magic', title: 'Import-Free 구조', lines: ['injected/repo/db', '자동 주입'] },
    { icon: 'fa-vial', title: '테스트 자동 생성', lines: ['보안 테스트 포함', '실시간 대시보드'] },
];

export default function Home({ FRAMEWORK_URL, NODE_ENV }: HomeProps) {
    const isDev = NODE_ENV === 'development';

    return (
        <div className="relative flex min-h-screen flex-col overflow-hidden bg-gradient-to-b from-[#0a0a0a] to-[#111111]">
            {/* ambient glow */}
            <div
                className="pointer-events-none absolute inset-0"
                style={{
                    background:
                        'radial-gradient(circle at 30% 20%, rgba(34,197,94,0.04) 0%, transparent 50%), radial-gradient(circle at 70% 80%, rgba(59,130,246,0.04) 0%, transparent 50%)',
                }}
            />

            <main className="relative z-10 flex flex-1 items-center justify-center p-8 md:p-12">
                <div className="mx-auto w-full max-w-4xl animate-fade-up text-center">
                    <div className="mb-12">
                        <div className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br from-brand to-accent shadow-[0_4px_20px_rgba(34,197,94,0.25)] transition-transform duration-300 hover:-translate-y-0.5">
                            <i className="fas fa-terminal text-2xl text-white" />
                        </div>
                    </div>

                    <h1 className="mb-2 font-mono text-5xl font-semibold tracking-tight text-white sm:text-6xl md:text-7xl">
                        Express.js-Kusto
                    </h1>
                    <p className="mb-3 font-mono text-xl font-medium text-brand">Framework</p>
                    <p className="mx-auto mb-12 max-w-xl text-lg text-zinc-400">
                        엔터프라이즈급 TypeScript 백엔드 프레임워크
                    </p>

                    {FRAMEWORK_URL ? (
                        <a
                            href={FRAMEWORK_URL}
                            className="mx-auto mb-8 flex max-w-xl items-center justify-center gap-2 break-all rounded-xl border border-edge bg-surface px-5 py-4 font-mono text-sm text-brand transition-colors duration-300 hover:border-brand hover:bg-surface-2"
                        >
                            <i className="fas fa-link" />
                            {FRAMEWORK_URL}
                        </a>
                    ) : null}

                    <div className="my-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {FEATURES.map((f) => (
                            <div
                                key={f.title}
                                className="group rounded-xl border border-edge bg-surface p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:border-brand hover:bg-surface-2"
                            >
                                <i
                                    className={`fas ${f.icon} mb-5 text-2xl text-brand transition-transform duration-300 group-hover:scale-110`}
                                />
                                <h3 className="mb-2 text-lg font-semibold text-white">{f.title}</h3>
                                <p className="text-sm leading-relaxed text-zinc-400">
                                    {f.lines[0]}
                                    <br />
                                    {f.lines[1]}
                                </p>
                            </div>
                        ))}
                    </div>

                    {isDev ? (
                        <div className="mt-16 flex flex-wrap items-center justify-center gap-4">
                            <a
                                href="/docs"
                                className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-brand to-brand-600 px-8 font-mono text-sm font-semibold text-white transition-all duration-300 hover:from-brand-600 hover:to-brand-700"
                            >
                                <i className="fas fa-book" />
                                Swagger
                            </a>
                            <a
                                href="/docs/dev"
                                className="inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-edge bg-surface px-8 font-mono text-sm font-medium text-zinc-200 transition-all duration-300 hover:-translate-y-px hover:border-brand hover:text-brand"
                            >
                                <i className="fas fa-chart-line" />
                                Dev Dashboard
                            </a>
                        </div>
                    ) : null}
                </div>
            </main>

            <footer className="relative z-10 border-t border-edge px-8 py-8 text-center text-sm text-zinc-500">
                <p>MIT License &copy; 2025 Express.js-Kusto Framework</p>
                <p className="mt-2 text-xs text-zinc-600">
                    🚀 개발 속도 3배 향상 • ⚡ 팀 협업 효율성 극대화 • 🛡️ 유지보수성 혁신적 개선
                </p>
            </footer>
        </div>
    );
}
