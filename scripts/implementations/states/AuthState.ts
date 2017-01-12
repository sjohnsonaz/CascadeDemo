import { observable } from 'cascade';
//import { State } from 'cascade-manager';

import State from './State';

import { IAuthConnection } from '../../interfaces/connections/IAuthConnection';
import { ILoginModel } from '../../interfaces/models/ILoginModel';

import LoginModel from '../models/LoginModel';

export default class AuthState extends State {
    authConnection: IAuthConnection;
    loginModel: ILoginModel = new LoginModel({
        username: '',
        password: ''
    });
    @observable loggingIn = false;
    @observable loggingOut = false;
    @observable loggedIn = false;

    constructor(authConnection: IAuthConnection) {
        super();
        this.authConnection = authConnection;
    }

    init() {
        this.loginModel.wrap({
            username: '',
            password: ''
        });
    }

    dispose() {

    }

    login() {
        this.authConnection.login(this.loginModel.unwrap()).then((data) => {
            this.loggingIn = true;
            this.loggedIn = true;
            this.close();
        }).catch((data) => {
            this.loggingIn = false;
        });
    }

    logout() {
        this.authConnection.logout().then((data) => {
            this.loggingOut = true;
            this.loggedIn = false;
        }).catch((data) => {
            this.loggingOut = false;
        });
    }

    cancel() {
        this.loginModel.wrap({
            username: '',
            password: ''
        });
        this.close();
    }
}