declare var __dirname: any;

import { } from 'sierra';
import { SimpleApplication } from 'sierra-express';
import * as express from 'express';
import * as path from 'path';
import * as favicon from 'serve-favicon';
import * as logger from 'morgan';
import * as cookieParser from 'cookie-parser';
import * as bodyParser from 'body-parser';

import * as session from 'express-session';
import * as passport from 'passport';
import * as connectMongo from 'connect-mongo';
import * as mongoose from 'mongoose';

var MongoStore = connectMongo(session);

import authentication from './lib/authentication';
import routing from './lib/routing';
import handlebars from './lib/handlebars';

import config from './config';

(mongoose as any).Promise = global.Promise;
mongoose.connect(config.mongodb.uri, config.mongodb.options, function (err) {
    if (err) {
        console.log('ERROR connecting to: ' + config.mongodb.uri + '. ' + err);
    } else {
        console.log('Succeeded connected to: ' + config.mongodb.uri);
    }
});

let application = new SimpleApplication({
    port: config.port
});

application.addMiddleware = function () {
    application.app.locals.config = config;
    application.app.disable('x-powered-by');
    
    // view engine setup
    application.app.set('views', path.join(__dirname, config.viewsPath));
    var hbs = handlebars(application.app);
    
    // uncomment after placing your favicon in /public
    //app.use(favicon(path.join(__dirname, '../public', 'favicon.ico')));
    application.app.use(logger('dev'));
    application.app.use(bodyParser.json());
    application.app.use(bodyParser.urlencoded({ extended: false }));
    application.app.use(cookieParser());
    application.app.use(session({
        secret: config.mongodb.session.secret,
        cookie: {
            maxAge: 1000 * 60 * 60 * 24 * 7 // 1 week
        },
        resave: config.mongodb.session.resave,
        saveUninitialized: config.mongodb.session.saveUninitialized,
        store: new MongoStore({
            url: config.mongodb.uri,
            collection: config.mongodb.session.collection
        })
    }));
    authentication(application.app);
    application.app.use(passport.initialize());
    application.app.use(passport.session());
    application.app.use(express.static(path.join(__dirname, config.publicPath)));
    
    // Inject session into response
    application.app.use(function (req, res, next) {
        res.locals.session = req.session;
        //res.locals.sessionUser = req.user;
        next();
    });
}


routing(application);


module.exports = application;
