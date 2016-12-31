import Cascade, { Component } from 'cascade';

import { Button, ButtonGroup, Modal, Tab } from 'cascade-components';

import ViewModel from '../ViewModel';
import UserListView from './UserListView';

export interface IMainViewProps {
    viewModel: ViewModel;
}

export default class MainView extends Component<IMainViewProps> {
    openModal = () => {
        this.props.viewModel.modalOpen = true;
    }

    closeModal = () => {
        this.props.viewModel.modalOpen = false;
    }

    openInnerModal = () => {
        this.props.viewModel.innerModalOpen = true;
    }

    closeInnerModal = () => {
        this.props.viewModel.innerModalOpen = false;
    }

    render() {
        let {viewModel} = this.props;
        return (
            <Tab titles={['Users', 'Inputs', 'Containers']}>
                <div>
                    <UserListView viewModel={viewModel} />
                </div>
                <div>
                    <h2>Tooltip</h2>
                    <Button tooltip="Information..." tooltipDirection="right">Tooltip</Button>

                    <h2>Popover</h2>
                    <Button popover={<span><strong>Popover</strong> Text</span>} popoverDirection="right">Popover</Button>

                    <h2>Button Group</h2>
                    <ButtonGroup>
                        <Button popover="Popover" popoverAlign="left" theme="primary">Edit</Button>
                        <Button theme="danger">Delete</Button>
                        <Button>View</Button>
                    </ButtonGroup>
                </div>
                <div>
                    <h2>Modal</h2>
                    <Button onclick={this.openModal}>Open Modal</Button>
                    <Modal open={viewModel.modalOpen} onclose={this.closeModal} title="Modal">
                        <div>test</div>
                        <Button onclick={this.openInnerModal}>Open Inner Modal</Button>
                        <Modal open={viewModel.innerModalOpen} onclose={this.closeInnerModal} title="Inner Modal">
                            inner test
                            </Modal>
                    </Modal>
                </div>
            </Tab>
        );
    }
}