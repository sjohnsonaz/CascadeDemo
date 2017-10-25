import Cascade, { Component } from 'cascade';

import { Button, ButtonGroup, Container, Modal, Tab } from 'cascade-components';

import ViewModel from '../../../applications/main/ViewModel';

import TopMenu from './TopMenu';
import LoginView from '../../login/LoginView';
import Router from './Router';

export interface IMainViewProps {
    viewModel: ViewModel;
}

export default class MainView extends Component<IMainViewProps> {
    render() {
        let { viewModel } = this.props;

        return (
            <Container menuBar>
                <TopMenu viewModel={viewModel} />
                <LoginView authState={viewModel.states.authState} />
                <Router viewModel={viewModel} />
            </Container>
        );
    }
}