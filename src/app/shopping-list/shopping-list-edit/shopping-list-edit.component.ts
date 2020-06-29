import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
  @ViewChild('ingredientName') name: ElementRef;
  @ViewChild('ingredientAmount') amount: ElementRef;
  @Output() newIngredient = new EventEmitter<Ingredient>();

  constructor() {
  }

  ngOnInit(): void {
  }

  onAdd() {
    const ingredient = {
      name: this.name.nativeElement.value,
      amount: this.amount.nativeElement.value
    };
    this.newIngredient.emit(ingredient);
  }
}
