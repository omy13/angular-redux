import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SonComponent } from './cont/son/son.component';
import { GrandsonComponent } from './cont/grandson/grandson.component';
import {StoreModule} from '@ngrx/store';
import {counterReducer} from './cont/counter.reducer';

@NgModule({
  declarations: [
    AppComponent,
    SonComponent,
    GrandsonComponent
  ],
  imports: [
    BrowserModule,
      StoreModule.forRoot({count: counterReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
