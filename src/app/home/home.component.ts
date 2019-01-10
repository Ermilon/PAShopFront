import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  products= [
    {name: 'Test', description: 'Description de Test', image:'https://www.pervers-narcissique.com/wp-content/uploads/2018/02/test.jpg'},
    {name: 'Toto', description: 'Description de Toto', image:'http://www.toto99.com/news/images/TOTO.VIP.jpg'}
  ]
  constructor() { }

  ngOnInit() {
  }

}
