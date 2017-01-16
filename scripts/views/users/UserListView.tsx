import Cascade, { Component } from 'cascade';
import { Button, ButtonGroup } from 'cascade-components';

import { IUserManager } from '../../interfaces/managers/IUserManager';
import { IUser } from '../../interfaces/data/IUser';

export interface IUserListViewProps {
    userManager: IUserManager;
}

export default class UserListView extends Component<IUserListViewProps> {
    editUser(user: IUser) {
        this.props.userManager.edit(user['_id']);
    }

    render() {
        let {userManager} = this.props;
        let {dataSource} = userManager;

        return (
            <table className="table">
                <thead>
                    <th>First</th>
                    <th>Last</th>
                </thead>
                <tbody>
                    {dataSource.activeRows.map((user) => {
                        return (
                            <tr>
                                <td>{user.name.first}</td>
                                <td>{user.name.last}</td>
                                <td>
                                    <ButtonGroup>
                                        <Button onclick={this.editUser.bind(this, user)}>Edit</Button>
                                    </ButtonGroup>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        );
    }
}
