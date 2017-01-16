declare var window: any;

import Cascade from 'cascade';

import ViewModel from './ViewModel';
import MainView from '../../views/layout/admin/MainView';

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
        window.application = application;
    }
}
