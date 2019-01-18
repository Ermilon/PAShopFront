import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductHotComponent } from './product-hot/product-hot.component';
import { ProductTableComponent } from './product-table/product-table.component';
import { ProductOverviewComponent } from './product-overview/product-overview.component';
import { MatCardModule, MatButtonModule, MatGridListModule } from '@angular/material';
import { UICarouselModule } from "ui-carousel";

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
    MatButtonModule,
    MatGridListModule,
    UICarouselModule
  ],
  exports : [
    ProductDetailsComponent,
    ProductHotComponent,
    ProductTableComponent,
    ProductOverviewComponent
  ]
})
export class ProductModule { }
