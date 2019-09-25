import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { AddProductComponent } from './add-product/add-product.component';


const routes: Routes = [{
  path: '',
  component: ProductListComponent

},
{
  path: 'product/:productId',
  component: ProductDetailsComponent
},
{
  path: 'addproduct',
  component: AddProductComponent
},
{
  path: 'checkout',
  component: CheckoutComponent
},
{
  path: '**',
  redirectTo: '',
}];
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
