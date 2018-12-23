import {Component, OnDestroy, OnInit} from '@angular/core';
import {IngredientModule} from '../shared/ingredient/ingredient.module';
import {ShoppingListService} from './shopping-list.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  private subscription: Subscription;

ingredients: IngredientModule [] ;
  constructor(private shopplistListService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shopplistListService.getIngredient();
   this.subscription = this.shopplistListService.ingredientChanged
      .subscribe((ingredients: IngredientModule[]) => {
        this.ingredients = ingredients;
        }
      );
  }

  ngOnDestroy(): void {
  this.subscription.unsubscribe();
  }



}
