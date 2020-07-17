import {Component, OnInit} from '@angular/core';
import {Recipe} from '../recipe.model';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {RecipesService} from '../recipes.service';
import {Store} from '@ngrx/store';
import * as ShoppingListActions from '../../shopping-list/store/shopping-list.actions';
import * as fromShoppingList from '../../shopping-list/store/shopping-list.reducer';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipeSelected: Recipe;
  toggle = false;
  id: number;

  constructor(
    private recipesService: RecipesService, private route: ActivatedRoute,
    private router: Router, private store: Store<fromShoppingList.AppState>) {
  }

  ngOnInit(): void {
    this.id = +this.route.snapshot.params.id;
    this.recipeSelected = this.recipesService.getRecipe(this.id);
    this.route.params.subscribe((params: Params) => {
      this.recipeSelected = this.recipesService.getRecipe(+params.id);
    });
  }

  onAddToShoppingList() {
    // this.shoppingListService.addIngredients(this.recipeSelected.ingredients);
    this.store.dispatch(new ShoppingListActions.AddIngredients(this.recipeSelected.ingredients));
  }

  onEditRecipe() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

  onDeleteRecipe() {
    this.recipesService.deleteRecipe(this.id);
    this.router.navigate(['/recipes']);
  }
}
