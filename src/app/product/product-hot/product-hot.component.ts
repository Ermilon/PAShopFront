import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-hot',
  templateUrl: './product-hot.component.html',
  styleUrls: ['./product-hot.component.scss']
})
export class ProductHotComponent implements OnInit {
  @Input() products;

  ngOnInit() {
  }

  ngOnDestroy(){
    this.products = null;
  }
}
