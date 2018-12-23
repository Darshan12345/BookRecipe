import { Injectable} from '@angular/core';
import {IngredientModule} from '../shared/ingredient/ingredient.module';
import {Subject} from 'rxjs/Subject';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  ingredientChanged = new Subject<IngredientModule[]>();
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
    this.ingredientChanged.next(this.ingredients.slice());
  }
  addIngredients(ingredient: IngredientModule[]) {
this.ingredients.push(...ingredient);
this.ingredientChanged.next( this.ingredients.slice());


  }
}
