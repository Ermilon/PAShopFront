import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthenticationService } from 'src/app/authentication/authentication.service';
import { ProductService } from '../product.service';
import { MatSnackBar } from '@angular/material';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-product-overview',
  templateUrl: './product-overview.component.html',
  styleUrls: ['./product-overview.component.scss']
})
export class ProductOverviewComponent implements OnInit {
  @Input() product;
  @Input() type;
  @Input() quantity;
  user;
  
  constructor(private route: ActivatedRoute, private productService: ProductService, private snackBar: MatSnackBar, private userService: UserService) {
  }

  ngOnInit() {
    this.isLogged();
  }

  isLogged(){
    if (localStorage.getItem('token')){
      this.userService.getUserInfos().subscribe(x => {
        this.user = x;
        this.user = this.user[0];
      });
    }    
  }

  addProductToBasket(idProduct : any){
    this.route.params.subscribe(params => {
      this.productService.addProductToBasket(idProduct).subscribe(x => {
        if(x['id']==undefined){
          this.snackBar.open(x["text"], "Ok", {
            duration: 2000,
          });
        }
        else{
          this.snackBar.open("Produit ajouté au panier", "Ok", {
            duration: 2000,
          });
          this.quantity = this.quantity+1;
        }
      });
    });
  }

  removeProductFromBasket(idProduct : any){
    this.route.params.subscribe(params => {
      this.productService.removeProductFromBasket(idProduct).subscribe(x => {
        if(x['id']==undefined){
          this.snackBar.open(x["text"], "Ok", {
            duration: 2000,
          });
        }
        else{
          this.snackBar.open("Produit retiré du panier", "Ok", {
            duration: 2000,
          });
          this.quantity = this.quantity-1;
        }
      });
    });
  }

}
