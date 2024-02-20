import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpClientModule} from "@angular/common/http";
import {ProductService} from "./service/product.service";
import {MatExpansionModule} from "@angular/material/expansion";
import {ProductComponent} from './components/product/product.component';
import {BagComponent} from './components/bag/bag.component';
import {HomeComponent} from './components/home/home.component';
import {BagService} from "./service/bag.service";

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    BagComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatExpansionModule

  ],
  providers: [
    ProductService,
    BagService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
