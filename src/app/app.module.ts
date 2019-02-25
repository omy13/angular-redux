import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SonComponent } from './cont/son/son.component';
import { GrandsonComponent } from './cont/grandson/grandson.component';

@NgModule({
  declarations: [
    AppComponent,
    SonComponent,
    GrandsonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
