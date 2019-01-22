import { Component, OnInit, Input } from '@angular/core';
import { SelectorMatcher } from '@angular/compiler';

@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.scss']
})
export class ProductTableComponent implements OnInit {
  @Input() products;
  @Input() type;
  @Input() search;
  constructor() { }

  ngOnInit() {
  }

}
