import {Component, Input, OnInit} from '@angular/core';
import {RecipeModule} from '../recipe/recipe.module';
import {RecipeService} from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  @Input() recipeselected: RecipeModule;
  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }

  onAddToShoppoingList() {
this.recipeService.addIngredientToRecipeList(this.recipeselected.ingredients);
  }
}
