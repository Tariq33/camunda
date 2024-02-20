import { Component, OnInit } from '@angular/core';
import {Product} from "../../domain/model/product";
import {ProductService} from "../../service/product.service";
import {Router} from "@angular/router";
import {ProductProcessDto} from "../../domain/model/product-process-dto";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService, private router: Router) {
  }

  ngOnInit() {
    this.productService.findAll().subscribe(
      (products : Product[]) => {
        this.products = products;
      }
    )
  }

  redirectProduct(action: string, productId: number) {
    if(productId){
      let productProcessDto = new ProductProcessDto(productId, 1, action, 0)
      this.productService.process(productProcessDto).subscribe(()=>{
        this.router.navigateByUrl('product/' + productId);
      });
    }
  }

  process(action: string, productId: number) {
    let productProcessDto = new ProductProcessDto(productId, 1, action, 0)
    this.productService.process(productProcessDto).subscribe(()=>{});
  }
}
