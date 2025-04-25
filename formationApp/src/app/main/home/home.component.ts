import { Component, inject, OnInit, OnDestroy } from '@angular/core';
import { LoggedIn } from 'src/app/core/models/loggedIn';
import { AuthService } from 'src/app/core/services/auth.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  private auth = inject(AuthService)
  user: LoggedIn | null = null
  actionLink: string = '/login';
  actionText: string = 'Se connecter';
 

  constructor() { }

  ngOnInit(): void {
    this.auth.currentUser$.subscribe(user => {
      this.user = user;
      console.log(user);
      this.actionLink = user ? user.redirectUrl : '/login';
      this.actionText = user ? 'Accéder au tableau de bord' : 'Se connecter';
    });
  }

  ngOnDestroy(): void {
   
  }
}
