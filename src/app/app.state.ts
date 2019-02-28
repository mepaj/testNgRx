import { Tutorial } from './models/tutorial.model';
import { BooksModel } from './models/books-model';

export interface AppState {
  readonly tutorial: Tutorial[];

  readonly books: BooksModel[];
}
