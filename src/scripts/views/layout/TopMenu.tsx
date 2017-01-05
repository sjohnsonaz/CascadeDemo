import Cascade, { Component } from 'cascade';

import ViewModel, { Location } from '../../ViewModel';

export interface ITopMenuProps {
    viewModel: ViewModel;
}

export default class TopMenu extends Component<ITopMenuProps> {
    openLocation(location: Location) {
        this.props.viewModel.openLocation(location);
    }

    render() {
        let {viewModel} = this.props;
        let {location} = viewModel;
        return (
            <div className="menu-bar menu-bar-top">
                <div className="menu-bar-title">Cascade</div>
                <ul>
                    <li className={location === 'home' ? 'menu-active' : ''}><a onclick={this.openLocation.bind(this, 'home')}>Home</a></li>
                    <li className={location === 'components' ? 'menu-active' : ''}><a onclick={this.openLocation.bind(this, 'components')}>Components</a></li>
                </ul>
            </div>
        );
    }
}
