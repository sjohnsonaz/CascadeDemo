import { IUser } from '../../../server/interfaces/data/IUser';
import { ILogin } from '../../../server/interfaces/data/ILogin';
import { IImpersonate } from '../../../server/interfaces/data/IImpersonate';
import { IIsLoggedIn } from '../../../server/interfaces/data/IIsLoggedIn';

import { IConnection } from 'cascade-manager';

export interface IAuthConnection extends IConnection {
    get(): Promise<IIsLoggedIn>;
    login(data: ILogin): Promise<IUser>;
    logout(): Promise<boolean>;
    impersonate(data: IImpersonate): Promise<IUser>;
    unimpersonate(): Promise<boolean>;
}
