import {Component , OnInit} from '@angular/core';
import {RecipeModule} from '../recipe/recipe.module';
import {RecipeService} from '../recipe.service';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})

export class RecipeDetailComponent implements OnInit {
 recipeselected: RecipeModule;
 id: number;
  constructor(private recipeService: RecipeService,
              private route: ActivatedRoute,
              private router: Router)  { }

  ngOnInit() {

    this.route.params
      .subscribe(
        (params: Params) => {
        this.id = +params['id'];

        this.recipeselected = this.recipeService.getRecipe(this.id);
        }
      );
  }

  onAddToShoppoingList() {
this.recipeService.addIngredientToRecipeList(this.recipeselected.ingredients);
  }

  onEditRecipe() {
    this.router.navigate(['edit'], { relativeTo: this.route });
  }

  onDeleteRecipe() {
    this.recipeService.deleteRecipe(this.id);
    this.router.navigate(['/recipes']);
  }
}
