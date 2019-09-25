import { Injectable } from '@angular/core';
import { Product } from '../models/products';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  // products: Product[] = [
  //   {
  //     name: 'lavender combo',
  //     image: 'https://d3d71ba2asa5oz.cloudfront.net/12029281/images/pg1182_zu01.jpg',
  //     details: `this is a combo offer.Buy one and you get one for free.`,
  //     isAvailable: true,
  //   },
  //   {
  //   name: 'purple flower',
  //   image: 'http://www.cndajin.com/data/wls/162/14996183.jpg',
  //   details: `this is a purple flowering plant which will look very good  .`,
  //   isAvailable: false,
  //   },
  // ];
  constructor(
    private httpClient: HttpClient
  ) { }
  getProducts() {
    return this.httpClient.get( `${environment.baseUrl}product`);
  }
  getProductDetails(productId) {
    return this.httpClient.get(environment.baseUrl + 'product/' + productId);
  }
}
