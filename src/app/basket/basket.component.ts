import { Component, OnInit } from '@angular/core';
import { UserService } from '../user/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {
  basket;
  constructor(private route: ActivatedRoute, private userService: UserService) {
  }

  ngOnInit() {
    this.getMyBasket();
  }

  getMyBasket(){
    this.route.params.subscribe(params => {
      this.userService.getUserBasket().subscribe(x => {
        this.basket = x;
        this.basket = this.basket[0];
        console.log('basket',this.basket);
      });
    })
  }
  
}
