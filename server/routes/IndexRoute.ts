import { route, middleware } from 'sierra';
import { Controller } from 'sierra-express';

export default class IndexRoute extends Controller {
    constructor() {
        super('');
    }

    @route()
    get(id) {
        res.render('index', { title: 'Express', id: id });
    }

    @route('get', '/')
    list() {
        res.render('index', { title: 'Express', id: 'none' });
    }
}
