import Router, { route } from '../lib/back/Router';

export default class AdminRoute extends Router {
    constructor() {
        super('admin');
    }

    @route('get', '/', false)
    get(req, res, next) {
        res.render('admin/index', { title: 'Express' });
    }
}
