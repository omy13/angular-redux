import {Action} from '@ngrx/store';
import {ADD, REMOVE} from './counter.action';

export function counterReducer( state: number = 10, action: Action ) {
    switch (action.type) {
        case ADD:
            return state +1;
        case REMOVE:
            return state -1;
        default:
            return state;
    }
}
