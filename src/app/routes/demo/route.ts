import { ExpressRouter } from '@lib/http/routing/expressRouter'

// /demo — Demo 샘플 페이지(React CSR). 페이지 내부의 탭 이동은 react-router 가
// client-side 로 처리한다(새로고침 없음). 하위 경로(/demo/:view)는 [view]/route.ts 가
// 같은 페이지를 서빙해 직접 새로고침에도 안전하다.
const router = new ExpressRouter();

router.GET_REACT('Demo', {
    title: 'React 라우팅 데모 · Express.js-Kusto',
    summary: 'Client-side react-router navigation demo (React CSR)',
});

export default router.build();
