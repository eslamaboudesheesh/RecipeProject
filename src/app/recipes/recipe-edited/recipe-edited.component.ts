import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { RecipeService } from '../recipe.service';
import { FormGroup, FormControl, FormArray, FormControlName } from '@angular/forms';

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
  addNewIngerdientField () {
    (<FormArray>this.recipeFrom.get('ingerdients')).push(
      new FormGroup({
        'name': new FormControl(),
        'amount': new FormControl()
      })
    );
  }
  private initForm() {
    let recipename = ' ';
    let recipeDesc = ' ';
    let recipeImgPath = ' ';
   const recipeIngerdient = new FormArray([]);
    if (this.editeMode) {
      const recipe = this.recipeSev.getRecipe(this.id);
      recipename = recipe.name;
      recipeDesc = recipe.description;
      recipeImgPath = recipe.imgPath;
      if (recipe['ingredient']) {
        for (const ingred of recipe.ingredient ) {
          recipeIngerdient.push(
            new FormGroup({
              'name': new FormControl(ingred.name),
              'amount': new FormControl(ingred.amount)
            })
          );
        }
      }
    }
this.recipeFrom = new FormGroup({
  'name': new FormControl(recipename),
  'description': new FormControl(recipeDesc),
  'imgPath' :  new FormControl(recipeImgPath),
  'ingerdients' : recipeIngerdient
});
  }

  onSubmit() {
    console.log(this.recipeFrom);
  }

}
