import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import * as TutorialActions from './../../action/tutorial.actions';
// import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private store: Store<AppState>) {}

  addTutorial(name, url) {
    this.store.dispatch(new TutorialActions.AddTutorial({name, url}));
  }

  ngOnInit() {
  }

}
