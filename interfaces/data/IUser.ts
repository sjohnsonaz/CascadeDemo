import { IData } from 'cascade-manager';

export enum Role {
    none,
    admin
}

export interface IUser extends IData<any> {
    username: string;
    name: {
        first: string;
        last: string;
    };
    password: string;
    passwordVersion: number;
    salt: string;
    algorithm: string;
    role: Role;
    created: Date;
    modified: Date;
}
