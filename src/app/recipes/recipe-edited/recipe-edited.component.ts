import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { RecipeService } from '../recipe.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-recipe-edited',
  templateUrl: './recipe-edited.component.html',
  styleUrls: ['./recipe-edited.component.css']
})
export class RecipeEditedComponent implements OnInit {
id: number;
editeMode = false;
recipeFrom: FormGroup;
  constructor(private route: ActivatedRoute , private recipeSev: RecipeService)   { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
      this.editeMode = params['id'] != null;
   console.log(this.editeMode);
   this.initForm();
    });
  }
  private initForm() {
    let recipename = ' ';
    let recipeDesc = ' ';
    let recipeImgPath = ' ';
    if (this.editeMode) {
      const recipe = this.recipeSev.getRecipe(this.id);
      recipename = recipe.name;
      recipeDesc = recipe.description;
      recipeImgPath = recipe.imgPath;
    }
this.recipeFrom = new FormGroup({
  'name': new FormControl(recipename),
  'description': new FormControl(recipeDesc),
  'imgPath' :  new FormControl(recipeImgPath)
});
  }

  onSubmit(){
    console.log(this.recipeFrom);
  }

}
