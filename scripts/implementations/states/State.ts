import { observable } from 'cascade';
import { IState } from 'cascade-manager';

export default class State implements IState {
    title: string | JSX.Element;
    showCommands: boolean;
    @observable active = false;
    init() {

    }
    dispose() {

    }
    open() {
        this.active = true;
    }
    close() {
        this.active = false;
    }
}