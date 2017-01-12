import Cascade, { Component } from 'cascade';
import { Modal, FormInput, Button, Form, FormContainer } from 'cascade-components';

import AuthState from '../../implementations/states/AuthState';

export interface ILoginViewProps {
    authState: AuthState;
}

export default class LoginView extends Component<ILoginViewProps> {
    login = (event?: Event) => {
        event.preventDefault();
        this.props.authState.login();
    }

    changeValue(modelProp: string, event?: Event) {
        this.props.authState.loginModel[modelProp] = (event.target as HTMLInputElement).value;
    }

    render() {
        let {authState} = this.props;
        let {loginModel, active, close} = authState;
        return (
            <Modal open={active} onclose={close}>
                <Form>
                    <FormContainer title="Username">
                        <input type="text" value={loginModel.username} onchange={this.changeValue.bind(this, 'username')} />
                    </FormContainer>
                    <FormContainer title="Password">
                        <input type="password" value={loginModel.password} onchange={this.changeValue.bind(this, 'password')} />
                    </FormContainer>
                    <Button onclick={this.login}>Log In</Button>
                </Form>
            </Modal>
        );
    }
}
