import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss']
})
export class MenuBarComponent implements OnInit {
  value = '';
  user;
  constructor(private route: ActivatedRoute, private userService: UserService) {
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
  }

  logout(){
    this.user = null;
    localStorage.removeItem('token');
  }

}
