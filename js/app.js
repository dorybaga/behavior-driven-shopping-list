


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



} )();