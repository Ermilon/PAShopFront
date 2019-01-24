import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-hot',
  templateUrl: './product-hot.component.html',
  styleUrls: ['./product-hot.component.scss']
})
export class ProductHotComponent implements OnInit {
  products;
  user;
  constructor(private route: ActivatedRoute, private productService: ProductService) {
  }

  ngOnInit() {
    this.getHotProducts();
  }

  ngOnDestroy(){
    this.products = null;
  }

  getHotProducts(){
    this.route.params.subscribe(params => {
      this.productService.getHotProducts().subscribe(x => {
        this.products = x;
        console.log('Hot Products',this.products);
    });
    });
  }

}
