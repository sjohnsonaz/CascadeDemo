import { IUser } from '../../../server/interfaces/data/IUser';
import { IUserConnection } from '../connections/IUserConnection';

import { IModel } from 'cascade-manager';

export interface IUserModel extends IModel<any, IUser, IUserConnection>, IUser {

}
