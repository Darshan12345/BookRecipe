import {EventEmitter, Injectable} from '@angular/core';
import {IngredientModule} from '../shared/ingredient/ingredient.module';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  ingredientChanged = new EventEmitter<IngredientModule[]>();
 private ingredients: IngredientModule [] = [
    new IngredientModule( 'Apples' , 5),
    new IngredientModule('Tomato', 10)
  ];
  constructor() { }

  getIngredient() {
 return   this.ingredients.slice();
  }

  addIngrediennt(ingredient: IngredientModule) {
    this.ingredients.push(ingredient);
    this.ingredientChanged.emit(this.ingredients.slice());
  }
  addIngredients(ingredient: IngredientModule[]) {
this.ingredients.push(...ingredient);
this.ingredientChanged.emit(this.ingredients.slice());
console.log(this.ingredients);

  }
}
