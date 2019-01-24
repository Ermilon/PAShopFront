import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthenticationService } from 'src/app/authentication/authentication.service';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-overview',
  templateUrl: './product-overview.component.html',
  styleUrls: ['./product-overview.component.scss']
})
export class ProductOverviewComponent implements OnInit {
  @Input() product;
  @Input() type;
  
  constructor(private route: ActivatedRoute, private productService: ProductService) {
  }

  ngOnInit() {
  }

  addProductToBasket(idProduct : any){
    console.log('ngiorneg')
    this.route.params.subscribe(params => {
      this.productService.addProductToBasket(idProduct).subscribe(x => console.log('ADD2BASKET',x));
    });
  }

}
