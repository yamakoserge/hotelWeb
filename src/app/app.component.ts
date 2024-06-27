import { Component } from '@angular/core';
import { UserStorageService } from './auth/services/storages/user-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Tresor-Hotel';

  isCustomerLoggedIn: boolean = UserStorageService.IsCustomerLoggedIn();
  isAdminLoggedIn: boolean = UserStorageService.IsAdminLoggedIn();

  constructor(private router: Router){}

  ngOnInit(){
    this.router.events.subscribe(event=>{
      if(event.constructor.name === "NavigationEnd"){
        this.isAdminLoggedIn = UserStorageService.IsAdminLoggedIn();
        this.isCustomerLoggedIn = UserStorageService.IsCustomerLoggedIn();
      }
    })
   
  }

  logout(){
    UserStorageService.signOut();
    this.router.navigateByUrl('/')
  }

}
