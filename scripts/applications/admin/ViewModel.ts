import Cascade, { observable } from 'cascade';

import Router from '../../lib/Router';

import AuthConnection from '../../implementations/connections/AuthConnection';
import UserConnection from '../../implementations/connections/UserConnection';

import UserStore from '../../implementations/stores/UserStore';

import AuthState from '../../implementations/states/AuthState';
import UserManager from '../../implementations/managers/UserManager';

export type Location = 'home' | 'users';

export default class ViewModel {
    router: Router;
    @observable location: Location = 'home';

    states = {
        authState: new AuthState(new AuthConnection('/api/')),
        userManager: new UserManager(
            new UserStore(
                new UserConnection('/api/')
            )
        )
    }

    @observable get loggedIn(): boolean {
        return this.states.authState.loggedIn;
    }

    constructor() {
        Cascade.subscribe(this, 'location', (location: Location) => {
            switch (location) {
                case 'users':
                    this.states.userManager.init();
                    break;
            }
        });
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
            'users': [
                () => {
                    this.location = 'users';
                    document.title = 'Users - Cascade';
                }
            ],
            '': () => {
                this.location = 'home';
                document.title = 'Home - Cascade';
            }
        });
        this.router.listen();
    }
}