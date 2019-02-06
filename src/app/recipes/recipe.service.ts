import { Injectable} from '@angular/core';
import { Recipes } from './recipes.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class RecipeService {
  changeRecipe = new Subject<Recipes[]>();
  private recipes: Recipes[] = [
    new Recipes('Pizza',
    'This is pizza recipe',
     'https://www.dominos.com.au/ManagedAssets/OLO/eStore/all/Product/AU/P223/P223_ProductImage_Large_en_Default_19000101_125436.png',
     [new Ingredient('Tomato', 12),
     new Ingredient('Pineapple', 9)]),
    new Recipes('Nasi',
    'This is nasi recipe',
     'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Nasi_goreng_Chinese_style.JPG/240px-Nasi_goreng_Chinese_style.JPG',
      [new Ingredient('Rice', 23),
       new Ingredient('Tomatoe', 2)]),
    new Recipes('Ayam Bakar',
     'Recipe Ayam Bakar',
     'https://i2.wp.com/notepam.com/wp-content/uploads/2017/09/Resep-Ayam-Bakar-Madu.jpg?resize=680%2C486',
      [new Ingredient('Chicken', 12),
       new Ingredient('Chili', 1)])
      ];



  constructor(private servShop: ShoppingListService) { }


  getRecipes() {
    return this.recipes.slice();
  }
  getRecipe(index: number) {
    return this.recipes[index];
  }
  addIngredientToShoppingLisdt(ingredient: Ingredient[]) {
    this.servShop.addFinalIngerdintEl(ingredient);
  }
 addRecipe(recipe: Recipes) {
   this.recipes.push(recipe);
   this.changeRecipe.next(this.recipes.slice());
 }
 updateRecipe(index: number , newUpdatarecipe: Recipes) {
   this.recipes[index] = newUpdatarecipe;
   this.changeRecipe.next(this.recipes.slice());

 }
 deleteRecipe(index:number){
   this.recipes.splice(index, 1);
   this.changeRecipe.next(this.recipes.slice());


 }

}
