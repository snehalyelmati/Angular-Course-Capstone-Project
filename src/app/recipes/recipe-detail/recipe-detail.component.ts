import {Component, OnInit} from '@angular/core';
import {Recipe} from '../recipe.model';
import {ShoppingListService} from '../../shopping-list/shopping-list.service';
import {ActivatedRoute, Params} from '@angular/router';
import {RecipesService} from '../recipes.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipeSelected: Recipe;
  toggle = false;
  id: number;

  constructor(private shoppingListService: ShoppingListService, private recipesService: RecipesService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.id = +this.route.snapshot.params.id;
    this.recipeSelected = this.recipesService.getRecipe(this.id);
    this.route.params.subscribe((params: Params) => {
      this.recipeSelected = this.recipesService.getRecipe(+params.id);
    });
  }

  onAddToShoppingList() {
    this.shoppingListService.addIngredients(this.recipeSelected.ingredients);
  }
}
