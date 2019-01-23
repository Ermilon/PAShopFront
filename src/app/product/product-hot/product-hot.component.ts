import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-hot',
  templateUrl: './product-hot.component.html',
  styleUrls: ['./product-hot.component.scss']
})
export class ProductHotComponent implements OnInit {
  @Input() products;
  @Input() type;
  alive = true;
  dataSource;  

  //constructor(private productService: ProductService){
   // this.productService.getHot().subscribe(data=>{
   //   this.dataSource = data;
   // })
  //}
  ngOnInit() {
  }

  ngOnDestroy(){
    this.alive = false;
    this.products = null;
  }
}
