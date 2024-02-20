import {Component, OnInit} from '@angular/core';
import {Product} from "../../domain/model/product";
import {BagService} from "../../service/bag.service";
import {ProductService} from "../../service/product.service";
import {ActivatedRoute} from "@angular/router";
import {ProductProcessDto} from "../../domain/model/product-process-dto";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  product: Product = new Product(1, "", "", 1);

  constructor(private productService: ProductService, private bagService: BagService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    const productId = this.activatedRoute.snapshot.paramMap.get("id");
    if (productId) {
      this.productService.findById(+productId).subscribe(
        (product: Product) => {
          this.product = product;
        }
      )
    }
  }

  addToBag() {
    if(this.bagService.products.indexOf(this.product) != -1){
      let productProcessDto = new ProductProcessDto(this.product.id, 1, "quantity", 1)
      this.productService.process(productProcessDto).subscribe(() => {
        this.bagService.addToBag(this.product);
      });
    } else {
      let productProcessDto = new ProductProcessDto(this.product.id, 1, "add", 1)
      this.productService.process(productProcessDto).subscribe(() => {
        this.bagService.addToBag(this.product);
      });
    }
  }
}
