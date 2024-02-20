import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "../domain/model/product";
import {ProductProcessDto} from "../domain/model/product-process-dto";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) {
  }

  findById(id: number): Observable<Product> {
    return this.http.get<Product>('http://localhost:8080/product/' + id, this.httpOptions);
  }

  findAll(): Observable<Product[]> {
    return this.http.get<Product[]>('http://localhost:8080/product', this.httpOptions);
  }

  process(productProcessDto : ProductProcessDto): Observable<void> {
    return this.http.post<void>('http://localhost:8080/product/process', productProcessDto, this.httpOptions);
  }
}
