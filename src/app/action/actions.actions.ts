import { Action } from '@ngrx/store';
import { BooksModel } from 'src/app/models/books-model';

export const ADD        = 'Add';
export const REMOVE     = 'Remove';
export const EDIT       = 'Edit';

export class Add implements Action {
    readonly type = ADD;
    constructor(public payload: BooksModel) {}
}
export class Remove implements Action {
    readonly type = REMOVE;
    constructor(public payload: any) {}
}
export class Edit implements Action {
    readonly type = EDIT;
    constructor(public payload: any) {}
}

export type Type = Add | Remove | Edit;
