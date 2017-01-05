declare var window: any;

import Cascade from 'cascade';

import ViewModel from './ViewModel';
import User from './models/User';
import MainView from './views/layout/MainView';

export default class Application {
    static run() {
        var viewModel = new ViewModel();
        window.viewModel = viewModel;
        window.User = User;
        Cascade.render(
            document.getElementById('root'),
            <MainView viewModel={viewModel} />,
            function () {
                console.log('started');
            }
        );
        var user = new User('First', 'User');
        viewModel.users.push(user);
    }
}
