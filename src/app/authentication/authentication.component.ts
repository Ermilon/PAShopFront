import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthenticationService } from './authentication.service'

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit {

  constructor(private route: ActivatedRoute, private authenticationService: AuthenticationService) {
  }

  ngOnInit() {
  }

  sendForm(value: string){
    this.route.params.subscribe(params => {
      this.authenticationService.login(value).subscribe();
    });
  }
}
