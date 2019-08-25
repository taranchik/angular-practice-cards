import { Component, OnInit } from '@angular/core';
import {CartService} from '../cart.service';
import {IProduct} from '../IProduct';




@Component({
  selector: 'toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  public productsInCart: IProduct[];
  public countProductsInCart: number;

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cartService.subscribe(this.onUpdateCart)
  }

  private onUpdateCart = (products: IProduct[]) => {
    this.productsInCart = products
    this.countProductsInCart = products.length
  }
}
