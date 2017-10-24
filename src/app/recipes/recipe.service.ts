import { Injectable, EventEmitter  } from '@angular/core';
import {Recipe} from "./recipe.model";
@Injectable()
export class RecipeService {
   private  recipes :Recipe[] =[ new Recipe('test recipe','a test','http://www.seriouseats.com/images/2015/09/20150914-pressure-cooker-recipes-roundup-04.jpg'),new Recipe('test recipe','a test','http://www.seriouseats.com/images/2015/09/20150914-pressure-cooker-recipes-roundup-04.jpg')];
  recipeSelected = new EventEmitter<Recipe>();
  constructor() { }

  getRecipes(){
     return this.recipes.slice()
  }

}
