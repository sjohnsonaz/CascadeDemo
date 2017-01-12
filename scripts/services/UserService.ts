import Router, { route, middleware } from '../lib/back/Router';
import CrudService from '../lib/back/CrudService';

import AuthHelper from '../lib/helpers/AuthHelper';
import UserGateway from '../implementations/gateways/UserGateway';

export default class UserService extends CrudService<UserGateway> {
    constructor(gateway: UserGateway) {
        super('api/user', new UserGateway());
    }

}
