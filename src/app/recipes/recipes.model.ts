import { Ingredient } from '../shared/ingredient.model';

export class Recipes {

public name:string;
public description:string;
public imgPath:string;
public ingredient : Ingredient[];

 constructor(name:string , dec:string , imgpath:string , ingred:Ingredient[]){
     this.name = name ;
     this.description =dec;
     this.imgPath= imgpath;
     this.ingredient =ingred;
 }
}