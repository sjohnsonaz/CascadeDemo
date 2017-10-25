import { route, middleware } from 'sierra';
import { Controller } from 'sierra-express';

export default class TestService extends Controller {
    constructor() {
        super('main');
    }

    @route('get', '/', false)
    get(req, res, next) {
        res.status(200);
        res.setHeader('Content-Type', 'application/json');
        res.json({ value: true });
    }
}