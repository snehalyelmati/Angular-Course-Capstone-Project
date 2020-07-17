import {NgModule} from '@angular/core';
import {RecipesComponent} from './recipes.component';
import {RecipeListComponent} from './recipe-list/recipe-list.component';
import {RecipeListItemComponent} from './recipe-list/recipe-list-item/recipe-list-item.component';
import {RecipeDetailComponent} from './recipe-detail/recipe-detail.component';
import {EmptyRecipeComponent} from './empty-recipe/empty-recipe.component';
import {RecipeEditComponent} from './recipe-edit/recipe-edit.component';
import {ReactiveFormsModule} from '@angular/forms';
import {RecipesRoutingModule} from './recipes-routing.module';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    RecipesComponent,
    RecipeListComponent,
    RecipeListItemComponent,
    RecipeDetailComponent,
    EmptyRecipeComponent,
    RecipeEditComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RecipesRoutingModule
  ]
})
export class RecipesModule {

}
