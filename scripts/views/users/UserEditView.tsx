import Cascade, { Component } from 'cascade';

import { IUserManager } from '../../interfaces/managers/IUserManager';
import { IUser } from '../../interfaces/data/IUser';
import { IUserModel } from '../../interfaces/models/IUserModel';

export interface IUserEditViewProps {
    userManager: IUserManager;
}

export default class UserEditView extends Component<IUserEditViewProps> {
    render() {
        let {userManager} = this.props;
        let {item: user} = userManager;
        return (
            <div>
                <div>{user.name.first}</div>
                <div>{user.name.last}</div>
            </div>
        );
    }
}
