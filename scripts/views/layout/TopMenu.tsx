import Cascade, { Component } from 'cascade';

import ViewModel, { Location } from '../../applications/main/ViewModel';

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
                    <li className={location === 'home' ? 'menu-active' : ''}><a className="menu-item" href="#home">Home</a></li>
                    <li className={location === 'components' ? 'menu-active' : ''}><a className="menu-item" href="#components">Components</a></li>
                    <li className="pull-right"><a href="https://github.com/sjohnsonaz/cascade">GitHub</a></li>
                    <li className="pull-right"><a href="https://github.com/sjohnsonaz/cascade/releases">0.0.13</a></li>
                </ul>
            </div>
        );
    }
}
