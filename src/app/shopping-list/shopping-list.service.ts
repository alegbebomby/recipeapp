import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from "../shared/ingredient.model";

@Injectable()
export class ShoppingListService {
  ingredientChanged = new EventEmitter<Ingredient[]>();
   private  ingredients :Ingredient[] =[
    new Ingredient('Apple',5),new Ingredient('Mango',3)
  ];
  constructor() { }

  getIngredients(){
    return this.ingredients.slice();
  }

  addIngredients(ingrident: Ingredient){
     this.ingredients.push(ingrident )
    this.ingredientChanged.emit(this.ingredients.slice());
  }

}
