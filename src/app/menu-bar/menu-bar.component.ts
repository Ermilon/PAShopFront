import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user/user.service';
import { AuthenticationService } from '../authentication/authentication.service';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss']
})
export class MenuBarComponent implements OnInit {
  emitter;
  user;


  
  constructor(private route: ActivatedRoute, private userService: UserService, private authenticationService : AuthenticationService) {
    authenticationService.loggedEvent.subscribe(x => this.isLogged());
  }

  ngOnInit() {
    this.isLogged();
  }

  isLogged(){
    if (localStorage.getItem('token')){
      this.userService.getUserInfos().subscribe(x => {
        this.user = x;
        this.user = this.user[0];
      });
    }
    else{
      this.user = null;
    }    
  }

  logout(){
    this.user = null;
    localStorage.removeItem('token');
  }

}
