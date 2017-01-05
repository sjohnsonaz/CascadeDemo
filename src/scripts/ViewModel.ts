import { observable, array } from 'cascade';

import User from './models/User';

export type Location = 'home' | 'components';

export default class ViewModel {
    @observable location: Location = 'home';
    @observable modalOpen: boolean = false;
    @observable innerModalOpen: boolean = false;
    @array users: User[] = [];
    @observable user: User = new User('', '');
    @observable firstNameInput: HTMLElement;

    openLocation(location: Location) {
        this.location = location;
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
