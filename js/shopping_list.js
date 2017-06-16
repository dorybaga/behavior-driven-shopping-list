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

  removeItem(item){
    for(var i = 0; i < this.items.length; i++){
      if (this.items[i].name === item){
        this.items.splice(i, 1);
      }
    }
      console.log(this.items);
  }
}


