// 기존 src/app/views/index.ejs 를 React (CSR) 페이지로 옮긴 것.
// router.GET_REACT('Home', { props: { FRAMEWORK_URL, NODE_ENV } }) 로 렌더링된다.

type HomeProps = {
    FRAMEWORK_URL?: string;
    NODE_ENV?: string;
};

const css = `
* { box-sizing: border-box; -webkit-box-sizing: border-box; position: relative; }
html, body {
    display: block; margin: 0; padding: 0;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    line-height: 1.6; background: #0a0a0a; color: #e4e4e7;
    -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale;
}
.container {
    display: flex; flex-direction: column; min-height: 100vh;
    background: linear-gradient(to bottom, #0a0a0a 0%, #111111 100%);
    position: relative; overflow: hidden;
}
.container::before {
    content: ''; position: absolute; top: 0; left: 0; right: 0; bottom: 0;
    background: radial-gradient(circle at 30% 20%, rgba(34, 197, 94, 0.03) 0%, transparent 50%),
                radial-gradient(circle at 70% 80%, rgba(59, 130, 246, 0.03) 0%, transparent 50%);
    pointer-events: none;
}
.main { flex: 1; display: flex; align-items: center; justify-content: center; padding: 2rem; z-index: 1; }
@media (min-width: 768px) { .main { padding: 3rem; } }
.content { max-width: 900px; margin: 0 auto; text-align: center; animation: fadeInUp 0.8s ease-out; }
@keyframes fadeInUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
.logo-container { margin-bottom: 3rem; animation: fadeInUp 0.8s ease-out 0.1s both; }
.logo {
    width: 64px; height: 64px;
    background: linear-gradient(135deg, #22c55e 0%, #3b82f6 100%);
    border-radius: 16px; display: flex; align-items: center; justify-content: center;
    margin: 0 auto; box-shadow: 0 4px 20px rgba(34, 197, 94, 0.2); transition: all 0.3s ease;
}
.logo:hover { transform: translateY(-2px); box-shadow: 0 8px 30px rgba(34, 197, 94, 0.3); }
.logo i { font-size: 1.5rem; color: #ffffff; }
.heading {
    font-size: 3.5rem; font-weight: 600; letter-spacing: -0.02em; color: #ffffff;
    margin: 0 0 0.5rem 0; animation: fadeInUp 0.8s ease-out 0.2s both; font-family: 'JetBrains Mono', monospace;
}
@media (min-width: 640px) { .heading { font-size: 4rem; } }
@media (min-width: 768px) { .heading { font-size: 4.5rem; } }
.subtitle {
    font-size: 1.25rem; color: #22c55e; margin-bottom: 0.75rem; font-weight: 500;
    animation: fadeInUp 0.8s ease-out 0.3s both; font-family: 'JetBrains Mono', monospace;
}
.tagline {
    font-size: 1.125rem; color: #9ca3af; margin-bottom: 3rem; font-weight: 400;
    animation: fadeInUp 0.8s ease-out 0.4s both; max-width: 600px; margin-left: auto; margin-right: auto;
}
.service-url {
    background: #1a1a1a; border: 1px solid #2a2a2a; border-radius: 12px; padding: 1.25rem; margin: 2rem 0;
    font-family: 'JetBrains Mono', monospace; font-size: 0.875rem; color: #22c55e; word-break: break-all;
    animation: fadeInUp 0.8s ease-out 0.5s both; transition: all 0.3s ease;
}
.service-url:hover { background: #212121; border-color: #22c55e; }
.features {
    display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem; margin: 4rem 0;
    animation: fadeInUp 0.8s ease-out 0.6s both;
}
.feature-card {
    background: #1a1a1a; border: 1px solid #2a2a2a; border-radius: 12px; padding: 2rem; text-align: center;
    transition: all 0.3s ease; position: relative; overflow: hidden;
}
.feature-card::before {
    content: ''; position: absolute; top: 0; left: 0; right: 0; height: 1px;
    background: linear-gradient(90deg, transparent, rgba(34, 197, 94, 0.5), transparent);
    opacity: 0; transition: opacity 0.3s ease;
}
.feature-card:hover { transform: translateY(-4px); background: #212121; border-color: #22c55e; }
.feature-card:hover::before { opacity: 1; }
.feature-card i { font-size: 1.75rem; color: #22c55e; margin-bottom: 1.25rem; transition: transform 0.3s ease; }
.feature-card:hover i { transform: scale(1.1); }
.feature-card h3 { color: #ffffff; margin: 0 0 0.75rem 0; font-size: 1.125rem; font-weight: 600; }
.feature-card p { color: #9ca3af; margin: 0; font-size: 0.875rem; line-height: 1.6; }
.button-container {
    margin-top: 4rem; animation: fadeInUp 0.8s ease-out 0.7s both;
    display: flex; justify-content: center; align-items: center; gap: 1rem; flex-wrap: wrap;
}
.button {
    display: inline-flex; height: 3rem; align-items: center; justify-content: center; border-radius: 8px;
    background: #1a1a1a; border: 1px solid #2a2a2a; padding: 0 2rem; font-size: 0.875rem; font-weight: 500;
    color: #e4e4e7; text-decoration: none; transition: all 0.3s ease; font-family: 'JetBrains Mono', monospace;
    white-space: nowrap;
}
.button:hover { background: #212121; border-color: #22c55e; color: #22c55e; transform: translateY(-1px); }
.button:focus-visible { outline: none; box-shadow: 0 0 0 2px rgba(34, 197, 94, 0.5); }
.button:disabled { pointer-events: none; opacity: 0.5; }
.button.primary { background: linear-gradient(135deg, #22c55e, #16a34a); border: none; color: #ffffff; font-weight: 600; }
.button.primary:hover { background: linear-gradient(135deg, #16a34a, #15803d); color: #ffffff; }
.footer {
    text-align: center; padding: 2rem; color: #6b7280; font-size: 0.875rem; z-index: 1;
    animation: fadeInUp 0.8s ease-out 0.8s both; border-top: 1px solid #2a2a2a;
}
@media (max-width: 768px) {
    .heading { font-size: 2.5rem; }
    .features { grid-template-columns: 1fr; margin: 3rem 0; }
    .button-container { flex-direction: column; gap: 0.75rem; margin-top: 3rem; }
    .button { width: 100%; max-width: 300px; }
    .content { max-width: 100%; padding: 0 1rem; }
}
`;

export default function Home({ FRAMEWORK_URL, NODE_ENV }: HomeProps) {
    const isDev = NODE_ENV === 'development';
    return (
        <>
            <style>{css}</style>
            <div className="container">
                <main className="main">
                    <div className="content">
                        <div className="logo-container">
                            <div className="logo">
                                <i className="fas fa-terminal" />
                            </div>
                        </div>

                        <h1 className="heading">Express.js-Kusto</h1>
                        <p className="subtitle">Framework</p>
                        <p className="tagline">엔터프라이즈급 TypeScript 백엔드 프레임워크</p>

                        {FRAMEWORK_URL ? (
                            <div className="service-url">
                                <i className="fas fa-link" style={{ marginRight: '0.5rem' }} />
                                {FRAMEWORK_URL}
                            </div>
                        ) : null}

                        <div className="features">
                            <div className="feature-card">
                                <i className="fas fa-code" />
                                <h3>혁신적 아키텍처</h3>
                                <p>파일 기반 자동 등록<br />멀티 데이터베이스 관리</p>
                            </div>
                            <div className="feature-card">
                                <i className="fas fa-shield-alt" />
                                <h3>완전 타입 안전</h3>
                                <p>Injectable DI<br />타입 안전 의존성 주입</p>
                            </div>
                            <div className="feature-card">
                                <i className="fas fa-rocket" />
                                <h3>제로 코드 자동화</h3>
                                <p>CRUD 자동 생성<br />REST API + 문서화</p>
                            </div>
                            <div className="feature-card">
                                <i className="fas fa-cogs" />
                                <h3>고급 개발 환경</h3>
                                <p>Webpack 빌드<br />프로덕션 최적화</p>
                            </div>
                            <div className="feature-card">
                                <i className="fas fa-magic" />
                                <h3>Import-Free 구조</h3>
                                <p>injected/repo/db<br />자동 주입</p>
                            </div>
                            <div className="feature-card">
                                <i className="fas fa-vial" />
                                <h3>테스트 자동 생성</h3>
                                <p>보안 테스트 포함<br />실시간 대시보드</p>
                            </div>
                        </div>

                        <div className="button-container">
                            {isDev ? (
                                <>
                                    <a href="/docs" className="button primary">
                                        <i className="fas fa-book" style={{ marginRight: '0.5rem' }} />
                                        Swagger
                                    </a>
                                    <a href="/docs/dev" className="button">
                                        <i className="fas fa-chart-line" style={{ marginRight: '0.5rem' }} />
                                        Dev Dashboard
                                    </a>
                                </>
                            ) : null}
                        </div>
                    </div>
                </main>

                <footer className="footer">
                    <p>MIT License &copy; 2025 Express.js-Kusto Framework</p>
                    <p style={{ marginTop: '0.5rem', fontSize: '0.75rem', color: '#6b7280' }}>
                        🚀 개발 속도 3배 향상 • ⚡ 팀 협업 효율성 극대화 • 🛡️ 유지보수성 혁신적 개선
                    </p>
                </footer>
            </div>
        </>
    );
}
