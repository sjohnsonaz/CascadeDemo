import Cascade, { Component } from 'cascade';

import { Button, ButtonGroup, Modal, Tab } from 'cascade-components';

import ViewModel from '../ViewModel';

import InputsView from './InputsView';
import ContainersView from './ContainersView';
import UserListView from './UserListView';

export interface IMainViewProps {
    viewModel: ViewModel;
}

export default class MainView extends Component<IMainViewProps> {
    render() {
        let {viewModel} = this.props;
        return (
            <Tab titles={['Users', 'Inputs', 'Containers']}>
                <div>
                    <UserListView viewModel={viewModel} />
                </div>
                <div>
                    <InputsView />
                </div>
                <div>
                    <ContainersView viewModel={viewModel} />
                </div>
            </Tab>
        );
    }
}