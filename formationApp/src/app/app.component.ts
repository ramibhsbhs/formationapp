import { Component, OnInit } from '@angular/core';
import { AuthService } from './core/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'formationApp';
  constructor(private auth: AuthService) { }

  ngOnInit(): void {
    this.setcurrentUser()
  }
  setcurrentUser() {
    const item = localStorage.getItem('user')
    if (item != null) {
      this.auth.setCurrentUser(JSON.parse(item))
      // this.infoUser.loadUser()
    }

  }

}
