import { ExpressRouter } from '@lib/http/routing/expressRouter'

const router = new ExpressRouter();



// 개발 모드: React (CSR) 페이지 렌더링 — src/app/react/pages/Home.tsx
if (process.env.NODE_ENV === 'development') {
    router.GET_REACT('Home', {
        title: 'Express.js Kusto Service',
        props: {
            FRAMEWORK_URL: `https://github.com/taxi-tabby/express.js-kusto`,
            NODE_ENV: process.env.NODE_ENV,
        },
        summary: 'Framework landing page (React CSR)',
    });
} else {
    // 상용 모드: JSON 응답
    router.GET(async (req, res, injected, repo, db) => {
        return res.json({
            status: "online",
            message: "Express.js-Kusto Framework is running",
            environment: "production",
            timestamp: new Date().toISOString()
        });
    });
}


router.NOTFOUND((req, res)=>{
    res.status(404).send("Not found");
})


export default router.build();
