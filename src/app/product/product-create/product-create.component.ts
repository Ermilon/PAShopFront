import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss']
})
export class ProductCreateComponent implements OnInit {

  constructor(private route: ActivatedRoute, private productService: ProductService) {
  }

  ngOnInit() {
  }

  sendForm(value: string){
    this.route.params.subscribe(params => {
      this.productService.create(value).subscribe(x => console.log('Product Created',x));
    });
  }
}
