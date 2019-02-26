import {Action} from '@ngrx/store';

export const ADD = '[counter] ADD';
export const REMOVE = '[counter] REMOVE';

export class AddAction implements Action{
    readonly type = ADD;
}

export class RemoveAction implements Action{
    readonly type = REMOVE;
}
