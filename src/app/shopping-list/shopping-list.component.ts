import {Component, OnInit} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients = [
    new Ingredient('Apples', 8),
    new Ingredient('Bananas', 10)
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

  onNewIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }
}
