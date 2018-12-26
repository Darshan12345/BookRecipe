import {Component, OnDestroy, OnInit} from '@angular/core';
import {RecipeModule} from '../recipe/recipe.module';
import {RecipeService} from '../recipe.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit , OnDestroy {

recipes: RecipeModule[];

  constructor(private recipeService: RecipeService, private router: Router , private activeRoute: ActivatedRoute) {  }
subscription: Subscription;
  ngOnInit() {

   this.subscription =  this.recipeService.recipeChange.subscribe((recipe: RecipeModule[]) => {
      this.recipes = recipe;
    });
    this.recipes = this.recipeService.getRecipes();
  }


  onNewRecipe() {
    this.router.navigate(['new'], {relativeTo: this.activeRoute });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
