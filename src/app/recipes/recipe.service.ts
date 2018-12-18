import {EventEmitter, Injectable} from '@angular/core';
import {RecipeModule} from './recipe/recipe.module';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  recipeSelected = new EventEmitter<RecipeModule>();
 private recipes: RecipeModule[] = [
    new RecipeModule('A Test Recipe', 'This is simply Test',
      'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/' +
      'collection-image/2013/05/frying-pan-pizza-easy-recipe-collection.jpg'),
    new RecipeModule('A Best Recipe', 'This is simply Test',
      'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/' +
      'collection-image/2013/05/frying-pan-pizza-easy-recipe-collection.jpg')
  ];
  constructor() { }

 public getRecipes() {
    return this.recipes.slice();
  }
}
