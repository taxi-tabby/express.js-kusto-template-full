import { react } from '@expressjs-kusto/react';
import type { ReactRouteOptions } from '@expressjs-kusto/react';

declare module '@lib/http/routing/expressRouter' {
    interface ExpressRouter {
        GET_REACT(component: string, options?: ReactRouteOptions): this;
    }
}

// tailwind 은 기본 활성(cssEntry 기본값: views/app.css). 확장이 Tailwind v4 를 직접
// 컴파일해 /__kusto_react/client.css 로 서빙하고 shell <head> 에 link 한다.
// head 에는 Home 페이지가 쓰는 웹폰트 / Font Awesome 아이콘만 추가한다.
export default react({
    head: [
        `<link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">`,
        `<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">`,
    ].join('\n'),
});
