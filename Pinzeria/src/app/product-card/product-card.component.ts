import { Component, OnInit, Input, } from '@angular/core';
import { Product } from '../product';
@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.less']
})


export class ProductCardComponent implements OnInit {
  @Input() product: Product;

  constructor() {
  }

  ngOnInit() {
  }

}
