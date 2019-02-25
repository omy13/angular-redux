import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'redux-app';

  cont: number;

  constructor(){
    this.cont = 10;
  }

  add(){
    this.cont += 1;
  }

  remove(){
    this.cont -= 1;
  }
}
