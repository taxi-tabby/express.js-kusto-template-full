import { react } from '@expressjs-kusto/react';
import type { ReactRouteOptions } from '@expressjs-kusto/react';

declare module '@lib/http/routing/expressRouter' {
    interface ExpressRouter {
        GET_REACT(component: string, options?: ReactRouteOptions): this;
    }
}

// tailwind 은 기본 활성(cssEntry 기본값: views/app.css). 확장이 Tailwind v4 를 직접
// 컴파일해 /__kusto_react/client.css 로 서빙하고 shell <head> 에 link 한다.
// head 에는 Home 페이지의 웹폰트만 추가한다 — Archivo(디스플레이) · IBM Plex Sans KR(한글
// 본문) · JetBrains Mono(기술 라벨/코드).
export default react({
    head: [
        `<link rel="preconnect" href="https://fonts.googleapis.com">`,
        `<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>`,
        `<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Archivo:wght@500;600;700;800;900&family=IBM+Plex+Sans+KR:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap">`,
    ].join('\n'),
});
