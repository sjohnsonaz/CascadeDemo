import Cascade, { Component } from 'cascade';

import { IUserManager } from '../../interfaces/managers/IUserManager';
import { IUser } from '../../interfaces/data/IUser';

import UserListView from './UserListView';

export interface IUsersViewProps {
    userManager: IUserManager;
}

export default class UsersView extends Component<IUsersViewProps> {
    render() {
        let {userManager} = this.props;
        let {slideIndex} = userManager;
        return (
            <div>
                <h1>Users</h1>
                {(() => {
                    switch (slideIndex) {
                        case 0:
                            return <UserListView userManager={userManager} />;
                        case 1:
                            return <div></div>;
                        case 2:
                            return <div></div>;
                    }
                })()}
            </div>
        );
    }
}
