import Router, { route, middleware } from '../lib/back/Router';
import AuthHelper from '../lib/helpers/AuthHelper';

export default class AdminRoute extends Router {
    constructor() {
        super('admin');
    }

    @route('get', '/', false)
    @middleware(AuthHelper.admin)
    get(req, res, next) {
        res.render('admin/index', { title: 'Express' });
    }
}
