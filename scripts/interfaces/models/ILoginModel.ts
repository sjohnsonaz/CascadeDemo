import { IQueryModel } from 'cascade-manager';

import { ILogin } from '../data/ILogin';

export interface ILoginModel extends IQueryModel<ILogin>, ILogin {

}
