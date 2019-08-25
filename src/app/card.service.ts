import { Injectable, ɵclearResolutionOfComponentResourcesQueue } from '@angular/core';
import { IProduct } from './IProduct';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  private products: IProduct[];
  private getOptions = {
    method: 'GET',
    headers: new Headers({
      'Content-Type': 'application/json',
      'X-Chain': 'novus'
    })
  };
  private host = "https://staging-stores-api.zakaz.ua/stores/default/categories/bakery/products";

  constructor() { }
public getProducts = ()=> fetch(this.host, this.getOptions)
.then(response=>response.json())
.then(({ results }) => results.map(rawProduct => ({
        name: rawProduct.title,
        desc: rawProduct.description,
        iconUrl: rawProduct.img.s150x150,
        cost: rawProduct.price
      }) as IProduct))
}




// category_id: "bakery"
// currency: "uah"
// description: ""
// discount: {status: false, value: 0, old_price: 1999}
// ean: "04820140110874"
// gallery: [{,…}]
// img: {,…}
// in_stock: true
// ingredients: []
// is_hit: false
// nutrition_facts: {ingredient_energy: "269.00ккал", ingredient_protein: "8.70г", ingredient_fat: "3.80г"}
// price: 1999
// price_wholesale: []
// producer: {trademark: "кулиничі", website: "kulinichi.com",…}
// slug: "bread-kulynychi-350g"
// title: "Хлеб тостовый Кулиничи Европейский отрубной 350г"
// unit: "pcs"
// volume: null
// web_url: "https://novus.zakaz.ua/ru/bakery/04820140110874/bread-kulynychi-350g/"
// weight: 350


