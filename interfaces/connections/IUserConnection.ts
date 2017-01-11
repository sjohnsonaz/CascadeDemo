import { IUser } from '../data/IUser';
import { IUserQuery } from '../queries/IUserQuery';

import { ICrudConnection } from 'cascade-manager';

export interface IUserConnection extends ICrudConnection<string, IUser, IUserQuery> {

}
