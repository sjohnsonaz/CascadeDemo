import Cascade, { Component } from 'cascade';

import { Button, ButtonGroup, Modal, Tab } from 'cascade-components';

import ViewModel from '../../applications/ViewModel';

export interface IMainViewProps {
    viewModel: ViewModel;
}

export default class MainView extends Component<IMainViewProps> {
    render() {
        let {viewModel} = this.props;
        return (
            <div>
                <h1>Cascade</h1>
            </div>
        );
    }
}