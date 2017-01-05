import Cascade, { Component } from 'cascade';

import { Button, Modal } from 'cascade-components';

import ViewModel from '../../applications/ViewModel';

export interface IContainersViewProps {
    viewModel: ViewModel;
}

export default class ContainersView extends Component<IContainersViewProps> {
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
        );
    }
}
