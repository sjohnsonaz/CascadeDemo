import { IQueryModel } from 'cascade-manager';

import { ILogin } from '../../../server/interfaces/data/ILogin';

export interface ILoginModel extends IQueryModel<ILogin>, ILogin {

}
