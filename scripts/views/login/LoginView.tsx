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

    cancel = (event?: Event) => {
        event.preventDefault();
        this.props.authState.init();
    }

    close = () => {
        this.props.authState.close();
    }

    changeValue(modelProp: string, event?: Event) {
        this.props.authState.loginModel[modelProp] = (event.target as HTMLInputElement).value;
    }

    render() {
        let {authState} = this.props;
        let {loginModel, active, close} = authState;
        return (
            <Modal open={active} onclose={this.close} title="Log In">
                <Form onsubmit={this.login}>
                    <FormContainer title="Username">
                        <input type="text" className="input" value={loginModel.username} onchange={this.changeValue.bind(this, 'username')} />
                    </FormContainer>
                    <FormContainer title="Password">
                        <input type="password" className="input" value={loginModel.password} onchange={this.changeValue.bind(this, 'password')} />
                    </FormContainer>
                    <div className="pull-right">
                        <Button onclick={this.cancel}>Cancel</Button>
                        &nbsp;
                        <Button onclick={this.login} theme="primary" type="submit">Log In</Button>
                    </div>
                </Form>
            </Modal>
        );
    }
}
