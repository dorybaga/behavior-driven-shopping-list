/*jshint esversion: 6 */

class ShoppingList {
  constructor (){
    this.items = [];

  }

  addItem(item){
    if( item instanceof ShoppingListItem ){
      console.log(`${item} is item`);
      this.items.push(item);
    } else {
      throw new Error('Error');
    }
  }
}


