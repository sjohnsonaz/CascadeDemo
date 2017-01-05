declare var window: any;

import Cascade from 'cascade';

import Router from '../util/Router';

import ViewModel from './ViewModel';
import User from '../models/User';
import MainView from '../views/layout/MainView';

export default class Application {
    router: Router;
    viewModel: ViewModel = new ViewModel();

    constructor() {

    }

    initRouter() {
        this.router = new Router({
            'home': [
                () => {
                    this.viewModel.location = 'home';
                }
            ],
            'components': [
                () => {
                    this.viewModel.location = 'components';
                }
            ],
            '': () => {
                this.viewModel.location = 'home';
            }
        });
        this.router.listen();
    }

    static run() {
        var application = new Application();
        application.initRouter();
        let {viewModel} = application;
        Cascade.render(
            document.getElementById('root'),
            <MainView viewModel={viewModel} />,
            function () {
                console.log('started');
            }
        );
        var user = new User('First', 'User');
        viewModel.users.push(user);

        window.viewModel = viewModel;
        window.User = User;
    }
}
