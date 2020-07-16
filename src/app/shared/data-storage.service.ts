import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RecipesService} from '../recipes/recipes.service';
import {Recipe} from '../recipes/recipe.model';
import {map, tap} from 'rxjs/operators';

@Injectable()
export class DataStorageService {
  constructor(private http: HttpClient, private recipesService: RecipesService) {
  }

  storeRecipes() {
    const recipes = this.recipesService.getRecipes();
    this.http
      .put(
        'https://angularcapstoneproject.firebaseio.com/recipes.json',
        recipes
      ).subscribe(response => {
      console.log('Store recipes: ');
      console.log(response);
    });
  }

  fetchRecipes() {
    return this.http
      .get('https://angularcapstoneproject.firebaseio.com/recipes.json')
      .pipe(map((recipes: Recipe[]) => {
          return recipes.map(recipe => {
            return {
              ...recipe,
              ingredients: recipe.ingredients ? recipe.ingredients : []
            };
          });
        }),
        tap(recipes => {
          this.recipesService.setRecipes(recipes);
        })
      );
  }
}
