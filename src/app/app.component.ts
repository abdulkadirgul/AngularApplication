import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Home Page';
  title1 = '08.04.2023';

  getTitle(){
    return this.title;
  }
}
