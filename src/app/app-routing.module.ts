import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationComponent } from './authentication/authentication.component';
import { HomeComponent } from './home/home.component';
import { ProductTableComponent } from './product/product-table/product-table.component';
import { BasketComponent } from './basket/basket.component';
import { UserComponent } from './user/user.component';
import { ProductCreateComponent } from './product/product-create/product-create.component';

const routes: Routes = [
   { path: '', component: HomeComponent},
   { path: 'authentication', component: AuthenticationComponent},
   { path: 'products', component: ProductTableComponent},
   { path: 'basket', component: BasketComponent},
   { path: 'me',component: UserComponent},
   { path: 'create', component: ProductCreateComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
