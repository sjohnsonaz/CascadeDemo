import Cascade, { Component } from 'cascade';

import { Button, ButtonGroup, Modal, Tab } from 'cascade-components';

import ViewModel from '../../ViewModel';

import InputsView from './InputsView';
import ContainersView from './ContainersView';
import UserListView from './UserListView';

export interface IComponentsViedwProps {
    viewModel: ViewModel;
}

export default class ComponentsViedw extends Component<IComponentsViedwProps> {
    render() {
        let {viewModel} = this.props;
        return (
            <div>
                <h1>Components</h1>
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
            </div>
        );
    }
}