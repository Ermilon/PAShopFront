import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductHotComponent } from './product-hot/product-hot.component';
import { ProductTableComponent } from './product-table/product-table.component';
import { ProductOverviewComponent } from './product-overview/product-overview.component';
import { MatCardModule, MatButtonModule } from '@angular/material';

@NgModule({
  declarations: [
    ProductDetailsComponent,
    ProductHotComponent,
    ProductTableComponent,
    ProductOverviewComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule
  ],
  exports : [
    ProductDetailsComponent,
    ProductHotComponent,
    ProductTableComponent,
    ProductOverviewComponent
  ]
})
export class ProductModule { }
