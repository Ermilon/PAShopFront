import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationComponent } from './authentication/authentication.component';
import { HomeComponent } from './home/home.component';
import { ProductTableComponent } from './product/product-table/product-table.component';
import { ProductDetailsComponent } from './product/product-details/product-details.component';
import { BasketComponent } from './basket/basket.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
   { path: '', component: HomeComponent},
   { path: 'authentication', component: AuthenticationComponent},
   { path: 'products', component: ProductTableComponent},
   { path: 'products/:id', component: ProductDetailsComponent},
   { path: 'basket', component: BasketComponent},
   { path: 'me',component: UserComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
