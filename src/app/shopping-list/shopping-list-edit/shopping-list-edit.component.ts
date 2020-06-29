import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list.service';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
  @ViewChild('ingredientName') name: ElementRef;
  @ViewChild('ingredientAmount') amount: ElementRef;

  constructor(private shoppingListService: ShoppingListService) {
  }

  ngOnInit(): void {
  }

  onAdd() {
    const ingredient = {
      name: this.name.nativeElement.value,
      amount: this.amount.nativeElement.value
    };
    this.shoppingListService.addIngredient(ingredient);
  }
}
