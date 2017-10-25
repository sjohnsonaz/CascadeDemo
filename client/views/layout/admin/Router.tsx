import Cascade, { Component } from 'cascade';

import ViewModel from '../../../applications/admin/ViewModel';

import UsersView from '../../users/UsersView';

export interface IRouterProps {
    viewModel: ViewModel;
}

export default class Router extends Component<IRouterProps> {
    render() {
        let {viewModel} = this.props;

        let route;
        switch (viewModel.location) {
            case 'home':
                route = <div></div>;
                break;
            case 'users':
                route = <UsersView userManager={viewModel.states.userManager} />;
                break;
            default:
                route = <div></div>;
                break;
        }

        return route;
    }
}
