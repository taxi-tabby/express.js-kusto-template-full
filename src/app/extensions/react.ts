import { react } from '@expressjs-kusto/react';
import type { ReactRouteOptions } from '@expressjs-kusto/react';

declare module '@lib/http/routing/expressRouter' {
    interface ExpressRouter {
        GET_REACT(component: string, options?: ReactRouteOptions): this;
    }
}

export default react({});
