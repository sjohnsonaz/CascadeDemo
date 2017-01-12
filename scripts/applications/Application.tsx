declare var window: any;

import Cascade from 'cascade';

import ViewModel from './ViewModel';
import User from './User';
import MainView from '../views/layout/MainView';

export default class Application {
    viewModel: ViewModel = new ViewModel();

    constructor() {
        this.viewModel.initRouter();
    }

    static run() {
        var application = new Application();
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
