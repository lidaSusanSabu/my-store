import { Component, OnInit } from '@angular/core';
import { Product } from '../models/products';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  constructor(private productService: ProductService) {
    // this.products.push(this.productDetails);
    this.productService.getProducts().subscribe((res: Product[]) => {
      this.products = res;
      console.log(this.products);
    } );

  }
  value;

  ngOnInit() {
  }
  newPushMessage($event) {
    console.log('hey' + $event);
    this.value = $event;

  }

}
