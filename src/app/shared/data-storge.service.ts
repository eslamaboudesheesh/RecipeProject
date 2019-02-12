import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { RecipeService } from '../recipes/recipe.service';
import { Recipes } from '../recipes/recipes.model';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class DataStorgeService {

  constructor(private http: HttpClient , private recipeServ: RecipeService ,
     private authServier: AuthService) { }

  storeRecipe() {
    const token =  this.authServier.getToken();

    return this.http.put('https://ng-recipe-book-46131.firebaseio.com/recipes.json?auth=' + token , this.recipeServ.getRecipes());
  }
  showRecipe() {
   const token =  this.authServier.getToken();


    this.http.get<Recipes[]>('https://ng-recipe-book-46131.firebaseio.com/recipes.json?auth=' + token)
    .pipe(map(
      ( res  => {
          for ( const recipe of res) {
            console.log(recipe);
            if ( !recipe['ingredient']) {
              recipe['ingredient'] = [];
            }
          }
          return res;
      })
      )) .subscribe(
      (res) => {
        this.recipeServ.setRecipes(res);
        console.log('done');
      }

    );
  }
}
