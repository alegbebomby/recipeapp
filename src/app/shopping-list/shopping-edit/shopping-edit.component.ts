import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredient} from "../../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list.service";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @Output() ingredientAdded = new EventEmitter<Ingredient>()
  @ViewChild('nameInput') nameInput: ElementRef;
  @ViewChild('amountInput') amountInput: ElementRef;
  constructor(private slService:ShoppingListService) { }

  ngOnInit() {
  }

  createList(){
    const name =  this.nameInput.nativeElement.value;
    const amount = this.amountInput.nativeElement.value;
    const  newIg = new Ingredient(name,amount);
    this.slService.addIngredients(newIg);

  }



}
