import { Component, OnInit } from '@angular/core';
import {RecipeModule} from '../recipe/recipe.module';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: RecipeModule[] = [
    new RecipeModule('A Test Recipe', 'This is simply Test',
      'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/' +
      'collection-image/2013/05/frying-pan-pizza-easy-recipe-collection.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }

}
