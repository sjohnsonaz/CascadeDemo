import Cascade, { Component } from 'cascade';

import ViewModel from '../../applications/main/ViewModel';

import HomeView from '../home/HomeView';
import ComponentsView from '../components/ComponentsView';

export interface IRouterProps {
    viewModel: ViewModel;
}

export default class Router extends Component<IRouterProps> {
    render() {
        let {viewModel} = this.props;

        let route;
        switch (viewModel.location) {
            case 'home':
                route = <HomeView viewModel={viewModel} />;
                break;
            case 'components':
                route = <ComponentsView viewModel={viewModel} />;
                break;
            default:
                route = <HomeView viewModel={viewModel} />;
                break;
        }

        return route;
    }
}
