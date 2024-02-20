import {Component, OnInit} from '@angular/core';
import {Product} from "./domain/model/product";
import {ProductService} from "./service/product.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Camunda frontend';

  constructor(private productService: ProductService, private router: Router) {
  }

  ngOnInit() {
  }
}
