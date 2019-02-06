import { Component, OnInit, OnDestroy} from '@angular/core';
import {  Router, ActivatedRoute } from '@angular/router';
import {Recipes} from '../recipes.model'
import { RecipeService } from '../recipe.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit , OnDestroy {

  subcribtion:Subscription;
  recipes: Recipes[];
  constructor(private recipeService: RecipeService , private router: Router,
    private route: ActivatedRoute) {
   }
  ngOnInit() {
   this.subcribtion = this.recipeService.changeRecipe.subscribe((recipe: Recipes[]) => {
       this.recipes = recipe;
    });
    this.recipes = this.recipeService.getRecipes();
  }

  onNewRecipe() {
     this.router.navigate(['new'] , { relativeTo: this.route});

     //add new to the locahlhost:4200/recipes
  }

  ngOnDestroy() {
    this.subcribtion.unsubscribe();
  }

}
