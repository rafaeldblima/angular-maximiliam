import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';


import { Ingredient } from '../shared/ingredient.model';
// import { ShoppingListService } from './shopping-list.service';
import * as ShoppingListActions from './store/shopping-list.actions';
import * as fromApp from '../store/app.reducer';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {//OnDestroy {
  shoppingListState: Observable<{ingredients: Ingredient[]}>;
  // private subscription: Subscription;

  constructor(/*private slService: ShoppingListService,*/ private store: Store<fromApp.AppState>) { }

  ngOnInit() {
    // this.ingredients = this.slService.getIngredients();
    this.shoppingListState = this.store.select('shoppingList');
    // this.subscription = this.slService.ingredientsChanged
    //   .subscribe(
    //     (ingredients: Ingredient[]) => {
    //       this.ingredients = ingredients;
    //     }
    //   );
  }

  onEditItem(index: number) {
    // this.slService.startedEditing.next(index);
    this.store.dispatch(new ShoppingListActions.StartEdit(index));
  }

  // ngOnDestroy() {
  //   this.subscription.unsubscribe();
  // }
}
