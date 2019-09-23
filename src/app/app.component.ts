import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
 
  // productDetails: Product = {
  //   name: 'lavender combo' ,
  //   image: 'https://d3d71ba2asa5oz.cloudfront.net/12029281/images/pg1182_zu01.jpg' ,
  //   details: `this is a combo offer.Buy one and you get one for free.`,
  //   isAvailable: true,
  // };
  constructor() { }
  // product is my custom type.
  title = 'my-store';
}
