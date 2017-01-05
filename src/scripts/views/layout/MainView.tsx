import Cascade, { Component } from 'cascade';

import { Button, ButtonGroup, Modal, Tab } from 'cascade-components';

import ViewModel from '../../ViewModel';

import TopMenu from './TopMenu';
import Router from './Router';

export interface IMainViewProps {
    viewModel: ViewModel;
}

export default class MainView extends Component<IMainViewProps> {
    render() {
        let {viewModel} = this.props;

        return (
            <div className="container container-menu-bar-top">
                <TopMenu viewModel={viewModel} />
                <Router viewModel={viewModel} />
            </div>
        );
    }
}