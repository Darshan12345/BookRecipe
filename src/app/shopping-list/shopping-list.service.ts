import { Injectable} from '@angular/core';
import {IngredientModule} from '../shared/ingredient/ingredient.module';
import {Subject} from 'rxjs/Subject';


@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {


  ingredientChanged = new Subject<IngredientModule[]>();
  startedEditing = new Subject<number>();
 private ingredients: IngredientModule [] = [
    new IngredientModule( 'Apples' , 5),
    new IngredientModule('Tomato', 10)
  ];
  constructor() { }

  getIngredient() {
 return   this.ingredients.slice();
  }

  getspecificIngredient(index: number) {
    return this.ingredients[index];
  }
  addIngrediennt(ingredient: IngredientModule) {
    this.ingredients.push(ingredient);
    this.ingredientChanged.next(this.ingredients.slice());
  }
  addIngredients(ingredient: IngredientModule[]) {
this.ingredients.push(...ingredient);
this.ingredientChanged.next( this.ingredients.slice());


  }
  editIngredients(index: number) {
    this.startedEditing.next(index.valueOf());
  }
  updateIngredient(index: number, newIngredient: IngredientModule) {

    this.ingredients[index] = newIngredient;
    this.ingredientChanged.next(this.ingredients.slice());
  }

  deleteIngridient(index: number) {
    this.ingredients.splice(index, 1);
    this.ingredientChanged.next(this.ingredients);
  }
}
