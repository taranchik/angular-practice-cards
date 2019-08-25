import { Component, OnInit } from '@angular/core';
import {CartService} from '../cart.service';
import {CardService} from '../card.service';
import {IProduct} from '../IProduct';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
private products:IProduct[];
  constructor(private cardService: CardService, private cartService: CartService) {  }

  ngOnInit() {
    this.cardService.getProducts()
    .then(products=>this.products=products)
  }
public onAddProductToCart = (product:IProduct)=>{
  this.cartService.add(product)
}

public onRemoveFromCart = (product: IProduct) => {
    this.cartService.remove(product.name)
  }

}

