import { Component } from '@angular/core';
import {Action, Store} from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'redux-app';

  cont: number;

  constructor( private store: Store<AppState>) {
    this.store.subscribe( state =>{
      this.cont = state.count;
    });
  }

  add(){
    const action: Action = {
      type: 'ADD'
    };
    this.store.dispatch(action);
  }

  remove(){
    const action: Action = {
      type: 'REMOVE'
    };
    this.store.dispatch(action);

  }
}

interface AppState {
  count: number;
}
