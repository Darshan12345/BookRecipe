import { Component, OnInit } from '@angular/core';
import {IngredientModule} from '../shared/ingredient/ingredient.module';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
ingredients: IngredientModule [] = [
  new IngredientModule( 'Apples' , 5),
  new IngredientModule('Tomato', 10)
];
  constructor() { }

  ngOnInit() {
  }

  onIngredientAdded(ingredient: IngredientModule) {
    this.ingredients.push(ingredient);
  }
}
