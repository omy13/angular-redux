import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SonComponent } from './cont/son/son.component';
import { GrandsonComponent } from './cont/grandson/grandson.component';
import {StoreModule} from '@ngrx/store';
import {counterReducer} from './cont/counter.reducer';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    SonComponent,
    GrandsonComponent
  ],
  imports: [
    BrowserModule,
      StoreModule.forRoot({count: counterReducer}),
      StoreDevtoolsModule.instrument({
        maxAge: 25, // Retains last 25 states
        logOnly: environment.production, // Restrict extension to log-only mode
      }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
