import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-overview',
  templateUrl: './product-overview.component.html',
  styleUrls: ['./product-overview.component.scss']
})
export class ProductOverviewComponent implements OnInit {
  @Input() product;
  @Input() type;
  
  constructor() { }

  ngOnInit() {
  }

}