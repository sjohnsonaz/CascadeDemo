import { SimpleApplication } from 'sierra-express';
import * as Express from 'express';

import ServiceHelper from '../lib/helpers/ServiceHelper';

import IndexRoute from '../routes/IndexRoute';
import UserRoute from '../routes/UserRoute';
import AdminRoute from '../routes/AdminRoute';

import AuthService from '../services/AuthService';
import UserService from '../services/UserService';

//import TestService from '../services/TestService';

import UserGateway from '../implementations/gateways/UserGateway';

export default function run(application: SimpleApplication) {
    const userGateway = new UserGateway();

    //ServiceHelper.isService
    application.addController(new AuthService(userGateway));
    application.addController(new UserService(userGateway));

    application.addController(new AdminRoute());
    application.addController(new UserRoute());
    application.addController(new IndexRoute());
    //application.addController(new TestService());
    /*
    // catch 404 and forward to error handler
    application.app.use(function (req: Express.Request, res: Express.Response, next: Express.NextFunction) {
        var err: any = new Error('Not Found');
        err.status = 404;
        next(err);
    });
    */
    // error handlers

    // development error handler
    // will print stacktrace
    if (application.app.get('env') === 'development') {
        application.app.use(function (err: any, req: Express.Request, res: Express.Response, next: Express.NextFunction) {
            res.status(err.status || 500);
            if (res.locals.isService) {
                res.json({
                    message: err.message,
                    error: err,
                    stack: err.stack
                });
            } else {
                res.render('error', {
                    message: err.message,
                    error: err
                });
            }
        });
    }

    // production error handler
    // no stacktraces leaked to user
    application.app.use(function (err: any, req: Express.Request, res: Express.Response, next: Express.NextFunction) {
        res.status(err.status || 500);
        if (res.locals.isService) {
            res.json({
                message: err.message,
                error: err
            });
        } else {
            res.render('error', {
                message: err.message,
                error: {}
            });
        }
    });
}
