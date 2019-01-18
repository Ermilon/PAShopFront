import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-hot',
  templateUrl: './product-hot.component.html',
  styleUrls: ['./product-hot.component.scss']
})
export class ProductHotComponent implements OnInit {
  @Input() products;
  @Input() type;
  constructor() { }

  ngOnInit() {
  }

}
