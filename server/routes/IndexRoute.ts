import { route, middleware } from 'sierra';
import { Controller } from 'sierra-express';

export default class IndexRoute extends Controller {
    constructor() {
        super('');
    }

    @route('all', '/:id', false)
    get(req, res, next) {
        res.render('index', { title: 'Express', id: res.query.id });
    }

    @route('get', '/', false)
    list(req, res, next) {
        res.render('index', { title: 'Express', id: 'none' });
    }
}
