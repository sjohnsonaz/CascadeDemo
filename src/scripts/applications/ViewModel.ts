import { observable, array } from 'cascade';

import Router from '../util/Router';
import User from '../models/User';

export type Location = 'home' | 'components';

import UserConnection from '../../../implementations/connections/UserConnection';

export default class ViewModel {
    router: Router;
    @observable location: Location = 'home';
    @observable modalOpen: boolean = false;
    @observable innerModalOpen: boolean = false;
    @array users: User[] = [];
    @observable user: User = new User('', '');
    @observable firstNameInput: HTMLElement;

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

    login() {
        var connection = new UserConnection('/api/');
        connection.list({}).then((data) => {
            console.log(data);
        });
    }
}
