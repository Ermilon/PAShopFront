import { Component, OnInit, Input } from '@angular/core';
import { SelectorMatcher } from '@angular/compiler';
import { ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.scss']
})
export class ProductTableComponent implements OnInit {
  products = null;
  constructor(private route: ActivatedRoute, private productService: ProductService) {
  }

  ngOnInit() {
    this.getAllProducts();
  }

  getAllProducts(){
    this.route.params.subscribe(params => {
      this.productService.getAllProducts().subscribe(x => {
        this.products=x;
      });
    });
  }
}
