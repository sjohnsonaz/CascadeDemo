import { route, middleware } from 'sierra';
import { Controller } from 'sierra-express';

export default class UserRoute extends Controller {
    constructor() {
        super('user');
    }

    @route('get', '/', false)
    get(req, res, next) {
        res.send('respond with a resource');
    }
}
