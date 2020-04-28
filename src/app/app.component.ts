import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FacebookFriends';

  logout(){
    localStorage.setItem('isLoggedIn','false');    
    localStorage.removeItem('token');    
  }

  isLogged(){
    return localStorage.getItem('isLoggedIn');
  }
}
