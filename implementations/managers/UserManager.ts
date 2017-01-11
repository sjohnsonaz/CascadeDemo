import { observable, computed } from 'cascade';

import { IUser } from '../../interfaces/data/IUser';
import { IUserModel } from '../../interfaces/models/IUserModel';
import { IUserStore } from '../../interfaces/stores/IUserStore';
import { IUserQuery } from '../../interfaces/queries/IUserQuery';

import { IUserManager } from '../../interfaces/managers/IUserManager';
import { Manager } from 'cascade-manager';

export default class UserManager extends Manager<string, IUser, IUserModel, IUserStore, IUserQuery> implements IUserManager {

}
