import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { DsiCountdownTimerComponent } from './dsi-countdown-timer/dsi-countdown-timer.component';

@NgModule({
  declarations: [
    DsiCountdownTimerComponent,
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
