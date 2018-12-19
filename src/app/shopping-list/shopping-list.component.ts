import { Component, OnInit } from '@angular/core';
import {IngredientModule} from '../shared/ingredient/ingredient.module';
import {ShoppingListService} from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
ingredients: IngredientModule [] ;
  constructor(private shopplistListService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shopplistListService.getIngredient();
    this.shopplistListService.ingredientChanged
      .subscribe((ingredients: IngredientModule[]) =>{
        this.ingredients = ingredients;
        }
      );
  }


}
