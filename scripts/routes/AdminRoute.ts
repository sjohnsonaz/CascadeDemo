import { route, middleware } from 'sierra';
import { Controller } from 'sierra-express';

import AuthHelper from '../lib/helpers/AuthHelper';

export default class AdminRoute extends Controller {
    constructor() {
        super('admin');
    }

    @route('get', '/', false)
    @middleware(AuthHelper.admin)
    get(req, res, next) {
        res.render('admin/index', { title: 'Express' });
    }
}
