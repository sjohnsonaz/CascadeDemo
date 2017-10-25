import { IUser } from '../../../server/interfaces/data/IUser';
import { ILogin } from '../../../server/interfaces/data/ILogin';
import { IImpersonate } from '../../../server/interfaces/data/IImpersonate';
import { IIsLoggedIn } from '../../../server/interfaces/data/IIsLoggedIn';

import { IAuthConnection } from '../../interfaces/connections/IAuthConnection';
import { Connection } from 'cascade-manager';

export default class AuthConnection extends Connection implements IAuthConnection {
    constructor(base: string, route?: string) {
        super(base, route || 'auth/', {
            credentials: 'include'
        });
    }

    get(): Promise<IIsLoggedIn> {
        return this.call(this.base, {});
    }

    login(data: ILogin): Promise<IUser> {
        return this.call(this.base + 'login', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });
    }

    logout(): Promise<boolean> {
        return this.call(this.base + 'logout', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });
    }

    impersonate(data: IImpersonate): Promise<IUser> {
        return this.call(this.base + 'impersonate', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });
    }

    unimpersonate(): Promise<boolean> {
        return this.call(this.base + 'unimpersonate', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });
    }
}
