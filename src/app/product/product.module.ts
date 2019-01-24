import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductHotComponent } from './product-hot/product-hot.component';
import { ProductTableComponent } from './product-table/product-table.component';
import { ProductOverviewComponent } from './product-overview/product-overview.component';
import { MatCardModule, MatButtonModule, MatGridListModule, MatInputModule } from '@angular/material';
import { UICarouselModule } from "ng-carousel-iuno";
import { RouterModule } from '@angular/router';
import { ProductCreateComponent } from './product-create/product-create.component';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
  declarations: [
    ProductDetailsComponent,
    ProductHotComponent,
    ProductTableComponent,
    ProductOverviewComponent,
    ProductCreateComponent,
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
    MatInputModule
  ],
  exports : [
    ProductDetailsComponent,
    ProductHotComponent,
    ProductTableComponent,
    ProductOverviewComponent,
  ]
})
export class ProductModule { }
