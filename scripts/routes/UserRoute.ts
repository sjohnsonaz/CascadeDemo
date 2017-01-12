import Router, { route } from '../lib/back/Router';

export default class UserRoute extends Router {
    constructor() {
        super('user');
    }

    @route('get', '/', false)
    get(req, res, next) {
        res.send('respond with a resource');
    }
}
