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
  // @Input() recipeSelected: Recipe;
  recipeSelected: Recipe;
  toggle = false;
  id: number;

  constructor(private shoppingListService: ShoppingListService, private recipesService: RecipesService, private route: ActivatedRoute) {
    // get a recipe directly rather than an input from parent component
    this.id = +this.route.snapshot.params.id;
    this.recipeSelected = this.recipesService.getRecipe(this.id);
    this.route.params.subscribe((params: Params) => {
      this.recipeSelected = this.recipesService.getRecipe(+params.id);
    });
  }

  ngOnInit(): void {
  }

  onAddToShoppingList() {
    this.shoppingListService.addIngredients(this.recipeSelected.ingredients);
  }
}
