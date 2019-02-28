import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Tutorial } from 'src/app/models/tutorial.model';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {

  tutorials: Observable<Tutorial[]>;

  constructor(private store: Store<AppState>) {
    this.tutorials = store.select(state => state.tutorial);

    this.tutorials.subscribe(res => {
      console.log('aaa >> ', res);
    });
  }

  ngOnInit() {
  }

}
