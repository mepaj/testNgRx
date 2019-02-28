import { BooksModel } from './../models/books-model';
import * as Action from './../action/actions.actions';

const initialState: BooksModel = {};
// const initialState: BooksModel = {
//     name: '',
//     actor: '',
//     details: ''
// };

export function books(state: BooksModel[] = [initialState], action: Action.Type) {
    switch (action.type) {
        case Action.ADD:
            return [...state, action.payload];
        case Action.REMOVE:
            state.splice(action.payload, 1);
            return state;
        default:
            return state;
    }
}
