import Router, {route} from '../base/back/Router';

export default class IndexRoute extends Router {
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
