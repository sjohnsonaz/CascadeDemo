import Router, { route, middleware } from '../base/back/Router';
import CrudService from '../base/back/CrudService';

import AuthHelper from '../helpers/AuthHelper';
import UserGateway from '../implementations/gateways/UserGateway';

export default class UserService extends CrudService<UserGateway> {
    constructor(gateway: UserGateway) {
        super('api/user', new UserGateway());
    }

}
