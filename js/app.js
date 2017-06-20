/*app.js

Create an instance of ShoppingList.

Invoke the shopping_list object's render() method, and store the output to a variable. Write the resulting output html into the content div. http://www.w3schools.com/jsref/prop_html_innerhtml.asp

Create an add_to_shopping_list function that will read the value of the title and description fields, then create a new variable named new_shopping_list_item that will store the result of constructing a new ShoppingListItem and passing in the values of title and description.

Invoke your shopping list's addItem by passing in your new_shopping_list_item.

Re-render the shopping list.

Commit and push your work*/


( function (){

  function add_to_shopping_list (){

    console.log( 'adding to shopping list' );

  }

  //this part handles all the dom/event handler stuff

  var attachListenerToAddItemButton = document.querySelector( '#add_shopping_list_item_button' );
  attachListenerToAddItemButton.addEventListener( 'click', add_to_shopping_list );


  //create instances and stuff down here
  var myShoppingList = new ShoppingList();
  console.log( myShoppingList );

  var onion = new ShoppingListItem( 'onion', 'produce', false );
  var garlic = new ShoppingListItem( 'garlic', 'produce', false );
  myShoppingList.addItem( onion );
  myShoppingList.addItem( garlic );

  var renderTest = myShoppingList.render();
  console.log( 'renderTest', renderTest );
 /*
  console.log( 'testing anchor', putRenderTestInContentDiv );*/
  var renderTarget = document.getElementById( 'content' );
  renderTarget.innerHTML = renderTest;
} )();