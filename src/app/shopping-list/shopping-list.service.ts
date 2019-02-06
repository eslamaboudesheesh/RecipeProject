import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Ingredient } from '../shared/ingredient.model';
@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
 changeShoping = new Subject<Ingredient[]>();
 startEditing = new Subject<number>();
private   ingredients:Ingredient[] = [
  new Ingredient('Apple' , 5) ,
  new Ingredient('Bannana' , 5) ,
  new Ingredient('Orange' , 2) ,
]
  constructor() { }

  getShoppingList(){
    return this.ingredients.slice();
  }
  // fetch the element data with index 
  getIngredin(index:number){
    return this.ingredients[index]
  }
  addFinalEl(element:Ingredient){
    this.ingredients.push(element);
    this.changeShoping.next(this.ingredients.slice());
  }
  addFinalIngerdintEl(elements:Ingredient[]) {
this.ingredients.push(...elements);
this.changeShoping.next(this.ingredients.slice());

  }
  updateIngred(index:number , newIngerd:Ingredient){
    this.ingredients[index] = newIngerd;
    this.changeShoping.next(this.ingredients.slice());
  }

  deleteIngerdint(index:number){
    this.ingredients.splice(index,1);
    this.changeShoping.next(this.ingredients.slice());
  }

}
