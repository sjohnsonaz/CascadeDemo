import { IUser } from '../data/IUser';
import { ILogin } from '../data/ILogin';
import { IImpersonate } from '../data/IImpersonate';
import { IIsLoggedIn } from '../data/IIsLoggedIn';

import { IConnection } from 'cascade-manager';

export interface IAuthConnection extends IConnection {
    get(): Promise<IIsLoggedIn>;
    login(data: ILogin): Promise<IUser>;
    logout(): Promise<boolean>;
    impersonate(data: IImpersonate): Promise<IUser>;
    unimpersonate(): Promise<boolean>;
}
