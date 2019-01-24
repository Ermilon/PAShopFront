import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss']
})
export class ProductCreateComponent implements OnInit {
  tvas;
  constructor(private route: ActivatedRoute, private productService: ProductService, private snackBar: MatSnackBar) {
  }

  ngOnInit() {
    this.getTva();
  }

  sendForm(value: string){
    this.route.params.subscribe(params => {
      this.productService.create(value).subscribe(x => {
        this.snackBar.open("Clone créé", "Ok", {
          duration: 2000,
        });
    });
    });
  }

  getTva(){
    this.route.params.subscribe(params => {
      this.productService.getTva().subscribe(x => {
        this.tvas = x;
        console.log('Tvas',this.tvas);
    });
    });
  }
}
