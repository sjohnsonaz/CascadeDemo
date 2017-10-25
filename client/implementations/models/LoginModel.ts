import { observable } from 'cascade';
import { QueryModel } from 'cascade-manager';

import { ILogin } from '../../../server/interfaces/data/ILogin';
import { ILoginModel } from '../../interfaces/models/ILoginModel';

export default class LoginModel extends QueryModel<ILogin> implements ILoginModel {
    @observable username: string;
    @observable password: string;

    wrap(data: ILogin) {
        super.wrap(data);
        this.username = data.username;
        this.password = data.password;
    }

    unwrap(): ILogin {
        var output = super.unwrap();
        output.username = this.username;
        output.password = this.password;
        return output;
    }
}
