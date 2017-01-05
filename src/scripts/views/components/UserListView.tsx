import Cascade, { Component } from 'cascade';

import ViewModel from '../../applications/ViewModel';

import UserForm from './UserForm';
import UserView from './UserView';

export interface IUserListViewProps {
    viewModel: ViewModel;
}

export default class UserListView extends Component<IUserListViewProps> {
    render() {
        let {viewModel} = this.props;
        return (
            <table className="table">
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <UserForm key="user-form-component" viewModel={viewModel} />
                    {viewModel.users.map(user => <UserView user={user} viewModel={viewModel} />)}
                </tbody>
            </table>
        );
    }
}
