import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from '../../recipe.model';
import {RecipesService} from '../../recipes.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-recipe-list-item',
  templateUrl: './recipe-list-item.component.html',
  styleUrls: ['./recipe-list-item.component.css']
})
export class RecipeListItemComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor(private recipesService: RecipesService, private router: Router) {
  }

  ngOnInit(): void {
  }

  onRecipeSelection() {
    // navigate to the /id of the recipe
    // this.recipesService.recipeSelector.emit(this.recipe);
    this.router.navigate(['/recipes', this.recipe.id]);
  }
}
