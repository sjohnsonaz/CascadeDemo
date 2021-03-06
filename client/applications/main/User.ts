import { observable } from 'cascade';
import { required } from 'cascade-validation';

export default class User {
    @required @observable firstName: string = '';
    @required @observable lastName: string = '';
    @observable get fullName() {
        return this.firstName + ' ' + this.lastName;
    }
    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
