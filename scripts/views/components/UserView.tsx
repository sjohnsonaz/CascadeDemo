import Cascade, { Component } from 'cascade';

import { Button } from 'cascade-components';

import ViewModel from '../../applications/main/ViewModel';
import User from '../../applications/main/User';

export interface IUserViewProps {
    user: User;
    viewModel: ViewModel;
}

export default class UserView extends Component<IUserViewProps> {
    removeUser = () => {
        this.props.viewModel.removeUser(this.props.user);
    }
    render() {
        let {user, viewModel} = this.props;
        return (
            <tr>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td><Button theme="danger" onclick={this.removeUser}>Remove</Button></td>
            </tr>
        );
    }
}
