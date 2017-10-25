import Cascade, { Component } from 'cascade';
import { Button, Form, FormContainer, FormInput } from 'cascade-components';

import { IUserManager } from '../../interfaces/managers/IUserManager';
import { IUser } from '../../../server/interfaces/data/IUser';
import { IUserModel } from '../../interfaces/models/IUserModel';

export interface IUserEditViewProps {
    userManager: IUserManager;
}

export default class UserEditView extends Component<IUserEditViewProps> {
    cancel = () => {
        this.props.userManager.cancel();
    }
    confirm = () => {
        this.props.userManager.confirm();
    }
    render() {
        let {userManager} = this.props;
        let {item: user} = userManager;
        return (
            <div>
                <Form>
                    <FormContainer title="First Name">
                        <input className="input" value={user.name.first} />
                    </FormContainer>
                    <FormContainer title="Last Name">
                        <input className="input" value={user.name.last} />
                    </FormContainer>
                    <Button onclick={this.cancel}>Cancel</Button>
                    <Button onclick={this.confirm} theme="primary">Save</Button>
                </Form>
            </div>
        );
    }
}
