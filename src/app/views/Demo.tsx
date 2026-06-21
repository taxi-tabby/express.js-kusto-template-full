// Sample page (React CSR) demonstrating client-side navigation.
//
// Served at /demo (and /demo/:view) via router.GET_REACT('Demo'). The extension wraps every
// page in react-router's <BrowserRouter>, so the tabs below move between views *client-side*
// (no full reload) — proven by the top-level counter that survives every tab switch.

import { useState } from 'react';
import type { ReactNode } from 'react';
import { Routes, Route, NavLink, useLocation } from 'react-router-dom';

function Tab({ to, end, children }: { to: string; end?: boolean; children: ReactNode }) {
    return (
        <NavLink
            to={to}
            end={end}
            className={({ isActive }) =>
                [
                    'rounded-md px-4 py-2 font-mono text-[12px] uppercase tracking-wider transition-colors',
                    isActive ? 'bg-ink text-paper' : 'text-muted hover:text-ink',
                ].join(' ')
            }
        >
            {children}
        </NavLink>
    );
}

function Panel({ kicker, title, children }: { kicker: string; title: string; children: ReactNode }) {
    return (
        <div className="animate-rise" key={title}>
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-accent">{kicker}</p>
            <h2 className="mt-3 font-display text-2xl font-bold tracking-tight text-ink">{title}</h2>
            <div className="mt-4 max-w-2xl text-[14px] leading-relaxed text-ink-soft">{children}</div>
        </div>
    );
}

export default function Demo() {
    // Lives at the page root, so it persists across in-page (client-side) navigation —
    // if the tabs caused a full reload, this would reset to 0 every time.
    const [count, setCount] = useState(0);
    const location = useLocation();

    return (
        <div className="mx-auto flex min-h-screen max-w-4xl flex-col px-5 sm:px-8">
            {/* header */}
            <header className="flex flex-col gap-4 border-b border-line py-5 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-baseline gap-3">
                    <a href="/" className="group inline-flex items-center gap-1.5 font-mono text-[12px] text-muted transition-colors hover:text-accent">
                        <span className="transition-transform duration-300 group-hover:-translate-x-0.5">←</span>
                        Home
                    </a>
                    <span className="font-display text-[15px] font-extrabold tracking-tight text-ink">
                        Routing Demo
                    </span>
                </div>
                <div className="flex items-center gap-3 font-mono text-[12px]">
                    <span className="text-muted">state:</span>
                    <span className="tabular-nums text-ink">{count}</span>
                    <button
                        type="button"
                        onClick={() => setCount((c) => c + 1)}
                        className="rounded-md border border-line px-3 py-1 text-ink transition-colors hover:border-accent hover:text-accent"
                    >
                        +1
                    </button>
                </div>
            </header>

            <main className="flex flex-1 flex-col py-12">
                <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-accent">Client-side navigation</p>
                <h1 className="mt-4 font-display text-[2rem] font-extrabold leading-tight tracking-[-0.02em] text-ink sm:text-4xl">
                    React 페이지 이동, 새로고침 없이.
                </h1>
                <p className="mt-4 max-w-2xl text-[14px] leading-relaxed text-ink-soft">
                    이 페이지는 <span className="font-mono text-ink">router.GET_REACT('Demo')</span> 로
                    서빙되는 또 다른 React 페이지입니다. 아래 탭은 react-router 로 이동하며,
                    상단의 <span className="text-ink">state</span> 카운터가 탭을 바꿔도 유지되는 것이
                    리로드 없는 client-side 이동의 증거입니다.
                </p>

                {/* tabs */}
                <nav className="mt-8 flex flex-wrap gap-2 border-b border-line pb-4">
                    <Tab to="/demo" end>Overview</Tab>
                    <Tab to="/demo/routing">Routing</Tab>
                    <Tab to="/demo/motion">Motion</Tab>
                </nav>

                {/* live location read-out */}
                <div className="mt-4 flex items-center gap-2 font-mono text-[11px] text-muted">
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent-soft" />
                    location.pathname =
                    <span className="text-ink">{location.pathname}</span>
                </div>

                {/* routed panels — switched client-side */}
                <div className="mt-8 min-h-[14rem]">
                    <Routes>
                        <Route
                            path="/demo"
                            element={
                                <Panel kicker="Overview" title="하나의 번들, 여러 화면">
                                    모든 페이지는 esbuild 가 하나의 클라이언트 번들로 묶고, 브라우저에서
                                    <span className="font-mono text-ink"> BrowserRouter </span> 안에 마운트됩니다.
                                    그래서 이 안에서의 이동은 서버 왕복 없이 즉시 일어납니다. 탭을 눌러
                                    URL 과 화면이 함께 바뀌는지 확인해 보세요.
                                </Panel>
                            }
                        />
                        <Route
                            path="/demo/routing"
                            element={
                                <Panel kicker="Routing" title="폴더 = URL, 그리고 client-side 라우트">
                                    서버 라우트는 <span className="font-mono text-ink">src/app/routes/demo/route.ts</span>
                                    (=<span className="font-mono text-ink"> /demo</span>) 와
                                    <span className="font-mono text-ink"> demo/[view]/route.ts</span>
                                    (=<span className="font-mono text-ink"> /demo/:view</span>) 두 개로,
                                    덕분에 <span className="font-mono text-ink">/demo/routing</span> 을 직접
                                    새로고침해도 같은 페이지가 서빙되어 안전합니다. 화면 전환 자체는
                                    react-router 가 클라이언트에서 처리합니다.
                                </Panel>
                            }
                        />
                        <Route
                            path="/demo/motion"
                            element={
                                <Panel kicker="Motion" title="상태와 모션은 이동 후에도 살아있다">
                                    이 패널의 막대는 마운트될 때 채워집니다. 상단 카운터(
                                    <span className="font-mono text-ink">{count}</span>)는 탭을 오가도
                                    초기화되지 않죠 — 앱 상태가 유지되는 SPA 이동이기 때문입니다.
                                    <span className="mt-6 block h-2 w-full overflow-hidden rounded-full bg-paper-2">
                                        <span className="block h-full origin-left animate-line rounded-full bg-accent" style={{ width: '100%' }} />
                                    </span>
                                </Panel>
                            }
                        />
                        <Route
                            path="*"
                            element={
                                <Panel kicker="404" title="여기엔 패널이 없어요">
                                    상단 탭에서 다시 골라 주세요.
                                </Panel>
                            }
                        />
                    </Routes>
                </div>
            </main>

            <footer className="mt-auto border-t border-line py-6 font-mono text-[11px] text-muted">
                <a href="/" className="text-ink transition-colors hover:text-accent">← Home 으로 (서버 라우트 이동)</a>
            </footer>
        </div>
    );
}
