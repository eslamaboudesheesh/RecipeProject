import { Component, OnInit, OnDestroy } from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit ,OnDestroy{
  ingredients:Ingredient[] 
  private subscribtion:Subscription
  constructor(private shoppingServ:ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shoppingServ.getShoppingList()

  this.subscribtion =  this.shoppingServ.changeShoping.subscribe(
      (rec:Ingredient[])=>{
        this.ingredients = rec;
      

      }
    )

  }
  onEdite(index:number){
    this.shoppingServ.startEditing.next(index);
  }
ngOnDestroy(){
  this.subscribtion.unsubscribe();
}
}
