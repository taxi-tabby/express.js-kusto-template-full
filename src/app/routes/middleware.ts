import '@lib/types/express-extensions';
import { defaultGlobalMiddleware } from '@core/index';

/**
 * 글로벌 미들웨어 (모든 요청에 순서대로 적용).
 *
 * 프레임워크 기본 정책 스택(helmet · CORS · cookie · body 파서 · 요청 로깅)을 그대로 쓰되,
 * 필요하면 옵션으로 조정하거나(`defaultGlobalMiddleware({ corsWhitelist, bodyLimit, ... })`)
 * 아래에 자신의 미들웨어를 추가한다.
 *
 * 참고: req.kusto 주입 · 클라이언트 IP 해석 · 전역 에러 핸들러 같은 프레임워크 "필수"
 * 미들웨어는 Core 가 직접 소유·등록하므로 여기에 둘 필요가 없다. 이 파일을 삭제하면
 * Core 가 defaultGlobalMiddleware() 기본을 자동 적용한다.
 */
export default [
    // React 확장(@expressjs-kusto/react)의 CSR shell 은 페이지/props 를 inline <script> 로
    // 주입한다. Helmet 기본 CSP(scriptSrc: 'self')는 nonce 없는 inline 스크립트를 차단하므로
    // — 그 결과 window.__KUSTO_PAGE__ 가 설정되지 않아 'page "undefined" was not found' 가
    // 뜬다 — scriptSrc 에 'unsafe-inline' 을 허용한다. Home 페이지 웹폰트(Google Fonts)용
    // style/font 호스트와, 페이퍼 그레인 data: 이미지를 위한 img-src 도 함께 허용한다.
    // (그 외 디렉티브는 helmet useDefaults 가 채운다.)
    ...defaultGlobalMiddleware({
        helmet: {
            crossOriginResourcePolicy: { policy: 'cross-origin' },
            crossOriginEmbedderPolicy: false,
            contentSecurityPolicy: {
                directives: {
                    defaultSrc: ["'self'"],
                    scriptSrc: ["'self'", "'unsafe-inline'"],
                    styleSrc: ["'self'", "'unsafe-inline'", 'https://fonts.googleapis.com'],
                    fontSrc: ["'self'", 'data:', 'https://fonts.gstatic.com'],
                    imgSrc: ["'self'", 'data:', 'http://localhost:3000', 'http://localhost:3001'],
                    connectSrc: ["'self'", 'http://localhost:3000', 'http://localhost:3001'],
                },
            },
        },
    }),

    // ↓ 여기에 프로젝트 전역 미들웨어를 추가하세요.
];
