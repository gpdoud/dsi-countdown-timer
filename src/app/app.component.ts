import { Component } from '@angular/core';

@Component({
  selector: 'dsi-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  handleTimerExpiredEvent(): void {
    console.log("App: event handled");
  }
}
