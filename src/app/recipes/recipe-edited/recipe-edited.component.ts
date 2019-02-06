import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { RecipeService } from '../recipe.service';
import { FormGroup, FormControl, FormArray, FormControlName, Validators } from '@angular/forms';

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
        'name': new FormControl(null , Validators.required ),
        'amount': new FormControl(null , [ Validators.required , Validators.pattern(/^[1-9]+[0-9]*$/) ])
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
              'name': new FormControl(ingred.name , Validators.required),
              'amount': new FormControl(ingred.amount , [ Validators.required , Validators.pattern(/^[1-9]+[0-9]*$/) ])
            })
          );
        }
      }
    }
this.recipeFrom = new FormGroup({
  'name': new FormControl(recipename, Validators.required),
  'description': new FormControl(recipeDesc, Validators.required),
  'imgPath' :  new FormControl(recipeImgPath , Validators.required),
  'ingerdients' : recipeIngerdient
});
  }

  onSubmit() {
    console.log(this.recipeFrom);
  }

}
