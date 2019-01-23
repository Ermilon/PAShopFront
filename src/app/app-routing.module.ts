import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationComponent } from './authentication/authentication.component';
import { HomeComponent } from './home/home.component';
import { ProductTableComponent } from './product/product-table/product-table.component';
import { ProductDetailsComponent } from './product/product-details/product-details.component';
import { BasketComponent } from './basket/basket.component';

const routes: Routes = [
   { path: '', component: HomeComponent},
   { path: 'authentication', component: AuthenticationComponent},
   { path: 'search', component: ProductTableComponent},
   { path: 'products/:id', component: ProductDetailsComponent},
   { path: 'basket', component: BasketComponent},
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
