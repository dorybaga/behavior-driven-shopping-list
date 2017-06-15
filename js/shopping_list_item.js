/*jshint esversion: 6 */

class ShoppingListItem {
  constructor(name, description, is_done ){
    this.name = name;
    this.description = description;
    this.is_done = is_done;
  }
  check(){
    this.is_done = true;
  }
}



module.exports = ShoppingListItem;
