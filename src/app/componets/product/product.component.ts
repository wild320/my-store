import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import {Product} from '../../models/product.models';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() product:Product = {
    id:'',
    price:0,
    image:'',
    title:'',
    description:'',
    category:''
  };
  @Output () addedProduct = new EventEmitter<Product>();

  constructor() { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  
  onAddToCart(){
    this.addedProduct.emit(this.product);
  }

}
