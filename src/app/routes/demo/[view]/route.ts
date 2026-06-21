import { ExpressRouter } from '@lib/http/routing/expressRouter'

// /demo/:view — 동일한 Demo 페이지를 서빙한다. react-router 의 client-side 하위 경로
// (/demo/routing, /demo/motion 등)를 직접 새로고침해도 셸이 그대로 내려가도록 보장한다.
const router = new ExpressRouter();

router.GET_REACT('Demo', {
    title: 'React 라우팅 데모 · Express.js-Kusto',
    summary: 'Client-side react-router navigation demo (React CSR)',
});

export default router.build();
