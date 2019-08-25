import { Injectable } from '@angular/core';
import { IProduct } from './IProduct';
import { Subscriber } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public productInCart: IProduct[] = [];
  public subscribes: any[] = [];

  constructor() { }

  public add = (product: IProduct) => {
    this.productInCart.push(product);
    this.subscribes.forEach(subscribe => subscribe(this.productInCart))
    console.log('Add', this.productInCart)
  }
  public remove =(productName:string)=>{
    this.productInCart=this.productInCart.filter(product => product.name !==productName);
    this.subscribes.forEach(subscibe => subscibe(this.productInCart))
  }
  public subscribe = subscriber =>
    this.subscribes.push(subscriber)
}

