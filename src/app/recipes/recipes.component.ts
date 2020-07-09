import {Component, OnInit} from '@angular/core';
import {RecipesService} from './recipes.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipesService]
})
export class RecipesComponent implements OnInit {
  // recipe: Recipe;
  // id: number;

  constructor(private recipesService: RecipesService, private route: ActivatedRoute) {
    // this.id = +this.route.snapshot.params.id;
    // this.route.params.subscribe((params: Params) => {
    //     this.id = +params.id;
    //   }
    // );
  }

  ngOnInit(): void {
    // update the recipe by fetching it based on the parameter id rather than a subscription
    // this.recipesService.recipeSelector.subscribe((recipe: Recipe) => {
    //   this.recipe = recipe;
    // });
    // this.recipe = this.recipesService.getRecipe(this.id);
  }
}
