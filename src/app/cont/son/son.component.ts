import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-son',
  templateUrl: './son.component.html',
  styles: []
})
export class SonComponent implements OnInit {

  @Input() cont: number;
  @Output() changeCont = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }
  multiply(){
    this.cont = this.cont * 2;
    this.changeCont.emit(this.cont);
  }
  divide(){
    this.cont = this.cont / 2;
    this.changeCont.emit(this.cont);
  }

  resetGrandson(newCont){
    this.cont = newCont;
    this.changeCont.emit(this.cont);

  }

}
