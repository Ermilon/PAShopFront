import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductHotComponent } from './product-hot/product-hot.component';
import { ProductTableComponent } from './product-table/product-table.component';
import { ProductOverviewComponent } from './product-overview/product-overview.component';
import { MatCardModule, MatButtonModule, MatGridListModule, MatInputModule, MatSelectModule } from '@angular/material';
import { UICarouselModule } from "ng-carousel-iuno";
import { RouterModule } from '@angular/router';
import { ProductCreateComponent } from './product-create/product-create.component';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule} from '@angular/material/form-field';
import {MatSnackBarModule} from '@angular/material';

@NgModule({
  declarations: [
    ProductHotComponent,
    ProductTableComponent,
    ProductOverviewComponent,
    ProductCreateComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    UICarouselModule,
    RouterModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatSnackBarModule
  ],
  exports : [
    ProductHotComponent,
    ProductTableComponent,
    ProductOverviewComponent,
  ]
})
export class ProductModule { }
