import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {Product} from "./domain/model/product";
import {BagComponent} from "./components/bag/bag.component";
import {HomeComponent} from "./components/home/home.component";
import {ProductComponent} from "./components/product/product.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'product/:id', component: ProductComponent},
  {path: 'bag', component: BagComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
