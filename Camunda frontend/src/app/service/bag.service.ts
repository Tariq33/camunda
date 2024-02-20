import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "../domain/model/product";

@Injectable({
  providedIn: 'root'
})
export class BagService {

  products: Product[] = [];

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) {
  }

  findById(id: number): Observable<Product[]> {
    return this.http.get<Product[]>('http://localhost:8080/product/' + id, this.httpOptions);
  }

  findAll(): Observable<Product[]> {
    return this.http.get<Product[]>('http://localhost:8080/product', this.httpOptions);
  }

  addToBag(product: Product) {
    console.log("Produit ajouté");
    this.products.push(product);
  }

  removeToBag(product: Product) {
    console.log("Produit supprimé");
    const index = this.products.indexOf(product, 0);
    if (index > -1) {
      this.products.splice(index, 1);
    }
  }
}
