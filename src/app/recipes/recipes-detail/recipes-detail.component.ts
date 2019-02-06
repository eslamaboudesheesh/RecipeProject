import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Recipes } from '../recipes.model';
import { RecipeService } from '../recipe.service';


@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.css']
})
export class RecipesDetailComponent implements OnInit {
 recipex : Recipes;
 id:number;
  constructor(private recServ:RecipeService , private route:ActivatedRoute, private router :Router) {
  }

  ngOnInit() {
    this.route.params.subscribe((params:Params)=>{
      this.id = +params['id'];
      this.recipex = this.recServ.getRecipe(this.id);
// + to change id from string to number 

    })
  }
  addToshopping(){
    this.recServ.addIngredientToShoppingLisdt(this.recipex.ingredient);
  }
  onEditRecipe(){
   this.router.navigate(['edit'],{relativeTo:this.route});
//  this.router.navigate(['../',this.id,'edit'] ,{relativeTo:this.route});
  }

}
