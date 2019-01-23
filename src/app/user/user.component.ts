import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  user;
  constructor(private route: ActivatedRoute, private userService: UserService) {
  }

  ngOnInit() {
    this.getUserInfos();
  }

  getUserInfos(){
    this.route.params.subscribe(params => {
      this.userService.getUserInfos().subscribe(x => {
        this.user = x;
        this.user = this.user[0];
        console.log('utilisateur',this.user);
      });
    })
  }
}
