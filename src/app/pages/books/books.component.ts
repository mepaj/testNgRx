import { Component, OnInit } from '@angular/core';
import { BooksModel } from 'src/app/models/books-model';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import * as Action from './../../action/actions.actions';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books: Observable<BooksModel[]>;

  constructor(private store: Store<AppState>) {
    // this.books = store.select('books');
    this.books = store.select(state => state.books);

    this.books.subscribe(res => {
      console.log('books >> ', res);
    });
  }

  ngOnInit() {
  }

  create(name, actor, details) {
    console.log('Add Book >> ', name, actor, details);
    this.store.dispatch(new Action.Add({name, actor, details}));
  }

}
