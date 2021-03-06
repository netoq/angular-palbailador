import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from './products-list/products';

//maneja la logia del carrito
@Injectable({
  providedIn: 'root'
})
export class ProductCartService {

  private _cartList: Product[] = [];
  cartList: BehaviorSubject<Product[]> = new BehaviorSubject([]); //sirve para encapsular una variable
  //_total = 0;
 // total: BehaviorSubject<number> = new BehaviorSubject(this._total);
  
  constructor() { }

  addToCart(product: Product) {
   let item: Product =  this._cartList.find((v1) => v1.nombre == product.nombre );
   if(!item){
     this._cartList.push({... product});//clona el objeto
   } else{
     item.quantity += product.quantity;
   }

  /* this._total = 0;
   for(let i=0 ; i < this._cartList; i++){
     this._total += this._cartList[i].precio * this._cartList[i].quantity;
   }*/
    console.log(this._cartList);
    this.cartList.next(this._cartList); //equivalente al emitt de eventos
  }

}
