import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit ,OnDestroy {
subscription:Subscription;
editModel=false;
editeItemIndex:number;
editItem:Ingredient;
@ViewChild('f') lForm:NgForm;
  constructor(private shoplisServ:ShoppingListService) { }

  ngOnInit() {
    this.subscription =this.shoplisServ.startEditing
    .subscribe(
      (index:number)=>{
        this.editeItemIndex =index;
        this.editModel=true;
        this.editItem = this.shoplisServ.getIngredin(index)
        this.lForm.setValue({
          name:this.editItem.name,
          amount :this.editItem.amount

        });

      }
    );
  }


  onAddList(form:NgForm){
    const value = form.value;
    const newIngredtion = new Ingredient(value.name,value.amount);
    if(this.editModel){
      this.shoplisServ.updateIngred(this.editeItemIndex,newIngredtion)
    }else{
      this.shoplisServ.addFinalEl(newIngredtion);
    }
    this.editModel=false;
    form.reset();
  }

  clear(){
    this.lForm.reset();
    this.editModel=false;
  }
  ondelet(){
    this.shoplisServ.deleteIngerdint(this.editeItemIndex);
    this.clear();
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
