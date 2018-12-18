import { Component, OnInit } from '@angular/core';
import {RecipeModule} from './recipe/recipe.module';
import {RecipeService} from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit {

  selectedRecipe: RecipeModule;
  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipeService.recipeSelected.subscribe((recipe: RecipeModule) => {
      this.selectedRecipe = recipe;
    });
  }

}
