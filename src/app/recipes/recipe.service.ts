import {EventEmitter, Injectable} from '@angular/core';
import {RecipeModule} from './recipe/recipe.module';
import {IngredientModule} from '../shared/ingredient/ingredient.module';
import {ShoppingListService} from '../shopping-list/shopping-list.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor (private spls: ShoppingListService) {

   }
  public recipeSelected = new EventEmitter<RecipeModule>();
 private recipes: RecipeModule[] = [
    new RecipeModule('Delicious Pizza', 'Vegiee Cheese Pizza',
      'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/' +
      'collection-image/2013/05/frying-pan-pizza-easy-recipe-collection.jpg',
      [new IngredientModule('cheese', 2 ),
      new IngredientModule('crust', 1)]),
    new RecipeModule('Chipotle', 'Max Spicy Chipotle',
      'https://www.wellplated.com/wp-content/uploads/2017/12/Hoppin-John-recipe-600x629.jpg',
      [new IngredientModule('rice', 100),
      new IngredientModule('bean', 10)])
  ];


 public getRecipes() {
    return this.recipes.slice();
  }

  public addIngredientToRecipeList(ingredient: IngredientModule[]) {

this.spls.addIngredients(ingredient);
  }
}
