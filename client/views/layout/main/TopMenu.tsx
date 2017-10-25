import Cascade, { Component } from 'cascade';
import { MenuBar } from 'cascade-components';

import ViewModel, { Location } from '../../../applications/main/ViewModel';

export interface ITopMenuProps {
    viewModel: ViewModel;
}

export default class TopMenu extends Component<ITopMenuProps> {
    openLocation(location: Location) {
        this.props.viewModel.openLocation(location);
    }

    render() {
        let { viewModel } = this.props;
        let { location } = viewModel;
        return (
            <MenuBar
                top
                title="Cascade"
                links={[{
                    title: 'Home',
                    active: location === 'home',
                    href: '#home'
                }, {
                    title: 'Components',
                    active: location === 'components',
                    href: '#components'
                }, {
                    title: 'GitHub',
                    href: 'https://github.com/sjohnsonaz/cascade',
                    simple: true,
                    reverse: true
                }, {
                    title: '0.1.1',
                    href: 'https://github.com/sjohnsonaz/cascade/releases',
                    simple: true,
                    reverse: true
                }]}
            />
        );
    }
}
