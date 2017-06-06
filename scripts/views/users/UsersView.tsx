import Cascade, { Component } from 'cascade';

import { IUserManager } from '../../interfaces/managers/IUserManager';
import { IUser } from '../../interfaces/data/IUser';

import UserListView from './UserListView';
import UserEditView from './UserEditView';

export interface IUsersViewProps {
    userManager: IUserManager;
}

export default class UsersView extends Component<IUsersViewProps> {
    render() {
        let {userManager} = this.props;
        let {operation} = userManager;
        return (
            <div>
                <h1>Users</h1>
                {(() => {
                    switch (operation) {
                        case 0:
                            return <UserListView userManager={userManager} />;
                        case 1:
                            return <UserEditView userManager={userManager} />;
                        case 2:
                            return <UserEditView userManager={userManager} />;
                    }
                })()}
            </div>
        );
    }
}
