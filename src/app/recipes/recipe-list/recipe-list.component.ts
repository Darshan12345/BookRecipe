import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {RecipeModule} from '../recipe/recipe.module';
import {RecipeService} from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

recipes: RecipeModule[];

  constructor(private recipeService: RecipeService) {  }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }


}
