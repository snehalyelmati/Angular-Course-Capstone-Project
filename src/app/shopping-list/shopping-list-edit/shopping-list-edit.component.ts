import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {ShoppingListService} from '../shopping-list.service';
import {NgForm} from '@angular/forms';
import {Subscription} from 'rxjs';
import {Ingredient} from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit, OnDestroy {
  @ViewChild('f', {static: false}) shoppingListForm: NgForm;

  subscription: Subscription;
  ingredientToEdit: Ingredient;
  editMode = false;
  editedItemIndex: number;

  constructor(private shoppingListService: ShoppingListService) {
  }

  ngOnInit(): void {
    this.subscription = this.shoppingListService.startedEditing.subscribe(id => {
      this.editedItemIndex = id;
      this.editMode = true;
      this.ingredientToEdit = this.shoppingListService.getIngredient(id);

      this.shoppingListForm.setValue({
        ingredientName: this.ingredientToEdit.name,
        ingredientAmount: this.ingredientToEdit.amount
      });
    });
  }

  onSubmit(form: NgForm) {
    const ingredient = {
      name: form.value.ingredientName,
      amount: form.value.ingredientAmount
    };
    if (this.editMode) {
      this.shoppingListService.editIngredient(this.editedItemIndex, ingredient);
    } else {
      this.shoppingListService.addIngredient(ingredient);
    }

    this.editMode = false;
    form.reset();
  }

  onDelete() {
    this.shoppingListService.deleteIngredient(this.editedItemIndex);
    this.onClear();
  }

  onClear() {
    this.editMode = false;
    this.shoppingListForm.reset();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
