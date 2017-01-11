import { IUser } from '../../interfaces/data/IUser';
import { IUserQuery } from '../../interfaces/queries/IUserQuery';
import { IUserConnection } from '../../interfaces/connections/IUserConnection'

import { CrudConnection } from 'cascade-manager';

export default class UserConnection extends CrudConnection<string, IUser, IUserQuery> implements IUserConnection {
    constructor(base: string, route?: string) {
        super(base, route || 'user/');
    }
}
