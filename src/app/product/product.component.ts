import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})


export class ProductComponent implements OnInit {
  @Input() prod;
  alt = `image of a lavender and green plant.`;
  constructor(private router: Router ) {
  }
  addToCart() {
    console.log('added to cart');
  }
  goToDetails(productId) {
    this.router.navigate(['product', productId]);

  }

  ngOnInit() {
}

}
