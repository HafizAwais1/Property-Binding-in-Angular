import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  AppName='Blogger'; 
  name="hafiz Aawais"
  disabledBox=true;
  enablebox(){
this.disabledBox=false
  }

}
