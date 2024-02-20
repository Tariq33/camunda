import {Component, OnInit} from '@angular/core';
import {BagService} from "../../service/bag.service";
import {Product} from "../../domain/model/product";
import {ProductProcessDto} from "../../domain/model/product-process-dto";
import {ProductService} from "../../service/product.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-bag',
  templateUrl: './bag.component.html',
  styleUrls: ['./bag.component.scss']
})
export class BagComponent implements OnInit {
  products: Product[] = [];
  total = 0;

  constructor(private productService: ProductService, private bagService: BagService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.products = this.bagService.products;
    this.calculTotal();
  }

  removeToBag(product: Product) {
    if (this.products.filter(p => p === product).length == 1) {
      let productProcessDto = new ProductProcessDto(product.id, 1, "remove", 0)
      this.productService.process(productProcessDto).subscribe(() => {
        this.bagService.removeToBag(product);
        this.products = this.bagService.products;
        this.calculTotal();
      });
    } else {
      let productProcessDto = new ProductProcessDto(product.id, 1, "quantity", -1)
      this.productService.process(productProcessDto).subscribe(() => {
        this.bagService.removeToBag(product);
        this.products = this.bagService.products;
        this.calculTotal();
      });
    }
  }

  calculTotal() {
    this.total = 0;
    this.products.forEach(p => this.total += p.price);
  }

  acheter() {
    let productsToBuy = [...new Set(this.products)];
    productsToBuy.forEach(
      (p) => {
        let productProcessDto = new ProductProcessDto(p.id, 1, "buy", 0)
        this.productService.process(productProcessDto).subscribe(() => {
        });
      }
    );
  }
}
