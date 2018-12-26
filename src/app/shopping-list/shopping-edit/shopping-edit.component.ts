import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {IngredientModule} from '../../shared/ingredient/ingredient.module';
import {ShoppingListService} from '../shopping-list.service';

import { NgForm} from '@angular/forms';
import {Subscription} from 'rxjs/Subscription';
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit , OnDestroy {

subcription: Subscription ;
editedItemIndex: number;
editedItem: IngredientModule;
editMode = false;
@ViewChild('f') slForm: NgForm;


  constructor(private shoppingListService: ShoppingListService) {

    this.subcription = shoppingListService.startedEditing.subscribe((id: number) => {
        this.editedItemIndex = id;
        this.editMode = true;
        this.editedItem = shoppingListService.getspecificIngredient(this.editedItemIndex);
        this.slForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount
        });
    });
  }

  ngOnInit() {
  }

  onAddItem(form: NgForm) {
    const newIngredient = new IngredientModule(form.value.name, form.value.amount);
    if ( this.editMode) {
      this.shoppingListService.updateIngredient(this.editedItemIndex, newIngredient);
    } else {this.shoppingListService.addIngrediennt(newIngredient);
    }
    this.editMode = false;
    form.resetForm();

  }

  ngOnDestroy(): void {
    this.subcription.unsubscribe();
  }

  onClear() {
    this.slForm.resetForm();
    this.editMode = false;
  }

  onDelete() {
    if (this.editMode) {
      this.shoppingListService.deleteIngridient(this.editedItemIndex);

      this.editMode = false;
      this.slForm.resetForm();
    }
  }
}
