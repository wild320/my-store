import { Component, OnInit } from '@angular/core';

import {Product} from '../../models/product.models';

import { StoreService} from '../../services/store.service';
import { ProductsService} from '../../services/products.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss']
})
export class ListProductsComponent implements OnInit {
  total=0;  
  myShoppingCart: Product[] = [];
  products: Product[] = [];
  today = new Date();
  date = new Date(2020, 1, 21);

  constructor(
    private storeService: StoreService,
    private productsService: ProductsService
  ) {
    this.myShoppingCart = this .storeService.getShoppingCart();
  }

  ngOnInit(): void {
    this.productsService.getAllProducts()
    .subscribe(data =>{
      this.products = data;   
    })
  }
  onAddToShoppingCart(product: Product) {
    this.storeService.addProduct(product);
    this.total = this.storeService.getTotal();
    
  }

}
