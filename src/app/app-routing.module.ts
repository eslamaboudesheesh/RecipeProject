import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {RecipesComponent } from './recipes/recipes.component'
import {ShoppingListComponent} from './shopping-list/shopping-list.component'
import { RscipeStartComponent } from './recipes/rscipe-start/rscipe-start.component';
import { RecipesDetailComponent } from './recipes/recipes-detail/recipes-detail.component';
import { RecipeEditedComponent } from './recipes/recipe-edited/recipe-edited.component';
import { SignupComponent } from './auth/signup/signup.component';

const appRoutes: Routes = [
  {path: '' , redirectTo:'/recipes' , pathMatch:'full'},
  { path:'recipes', component:RecipesComponent, children:[
    { path:'', component:RscipeStartComponent },
    {path:'new' , component:RecipeEditedComponent},
    { path:':id' , component:RecipesDetailComponent },
    {path:':id/edit' , component:RecipeEditedComponent}
  ]},
  { path:'shopping-list' , component:ShoppingListComponent },
  {path : 'signup' , component:SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
