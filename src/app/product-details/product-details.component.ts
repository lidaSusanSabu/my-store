import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Product } from '../models/products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {


  constructor(private route: ActivatedRoute, private productService: ProductService) {
  }

  productDetails;
  ngOnInit() {
    const productId = this.route.snapshot.params.productId;

    this.productService.getProductDetails(productId).subscribe((res: Product) => {
      this.productDetails = res;

    });
  }

}
