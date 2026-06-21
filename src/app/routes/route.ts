import { ExpressRouter } from '@lib/http/routing/expressRouter'
import { getPackageInfo } from '@lib/config/packageInfo'

const router = new ExpressRouter();


router
    .GET_REACT('Home', {
    title: 'Express.js Kusto Service',
    props: {
        FRAMEWORK_URL: `https://github.com/taxi-tabby/express.js-kusto`,
        NODE_ENV: process.env.NODE_ENV,
        // package.json 버전 자동 주입(getPackageInfo 가 첫 호출 후 캐시).
        version: getPackageInfo().version,
    },
    summary: 'Framework landing page (React CSR)',
});


router.NOTFOUND((req, res)=>{
    res.status(404).send("Not found");
})


export default router.build();
