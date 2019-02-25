import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-grandson',
  templateUrl: './grandson.component.html',
  styles: []
})
export class GrandsonComponent implements OnInit {

  @Input() cont: number;
  @Output() changeCont = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  reset(){
    this.cont = 0;
    this.changeCont.emit(0);
  }

}
