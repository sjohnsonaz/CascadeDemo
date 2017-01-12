import { observable, array } from 'cascade';

import Router from '../../lib/Router';
import User from './User';

export type Location = 'home' | 'components';

import AuthConnection from '../../implementations/connections/AuthConnection';
import UserConnection from '../../implementations/connections/UserConnection';

import UserStore from '../../implementations/stores/UserStore';

import AuthState from '../../implementations/states/AuthState';
import UserManager from '../../implementations/managers/UserManager';

export default class ViewModel {
    router: Router;
    @observable location: Location = 'home';
    @observable loginModalOpen: boolean = false;
    @observable modalOpen: boolean = false;
    @observable innerModalOpen: boolean = false;
    @array users: User[] = [];
    @observable user: User = new User('', '');
    @observable firstNameInput: HTMLElement;

    states = {
        authState: new AuthState(new AuthConnection('/api/')),
        userManager: new UserManager(
            new UserStore(
                new UserConnection('/api/')
            )
        )
    };

    @observable get loggedIn(): boolean {
        return this.states.authState.loggedIn;
    }

    openLocation(location: Location) {
        window.location.hash = location;
    }

    initRouter() {
        this.router = new Router({
            'home': [
                () => {
                    this.location = 'home';
                    document.title = 'Home - Cascade';
                }
            ],
            'components': [
                () => {
                    this.location = 'components';
                    document.title = 'Components - Cascade';
                }
            ],
            '': () => {
                this.location = 'home';
                document.title = 'Home - Cascade';
            }
        });
        this.router.listen();
    }

    addUser() {
        let user = this.user;
        let valid = user['firstName-valid'] && user['lastName-valid'];
        if (valid) {
            this.users.push(user);
            this.user = new User('', '');
        }
    }

    removeUser(user: User) {
        (this.users as any).remove(user);
    }
}
