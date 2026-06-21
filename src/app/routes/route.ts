import { ExpressRouter } from '@lib/http/routing/expressRouter'

const router = new ExpressRouter();


router
    .GET_REACT('Home', {
    title: 'Express.js Kusto Service',
    props: {
        FRAMEWORK_URL: `https://github.com/taxi-tabby/express.js-kusto`,
        NODE_ENV: process.env.NODE_ENV,
    },
    summary: 'Framework landing page (React CSR)',
});


router.NOTFOUND((req, res)=>{
    res.status(404).send("Not found");
})


export default router.build();
