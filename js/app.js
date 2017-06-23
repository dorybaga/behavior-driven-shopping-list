
( function (){

  function add_to_shopping_list (){

    //handles getting data from the form and adding it to myShoppingList.items array.
    var targetNameOfItemField = document.querySelector( '#itemNameField' );
    var targetDescriptionOfItemField = document.querySelector( '#itemDescriptionField' );
    var newGroceryItem = new ShoppingListItem( targetNameOfItemField.value, targetDescriptionOfItemField.value, false );

    myShoppingList.addItem( newGroceryItem );

    renderContent();

    clearEntryFields( targetNameOfItemField, targetDescriptionOfItemField );
  }

  function clearEntryFields ( targetNameField, targetDescriptionField ){
    targetNameField.value = '';
    targetDescriptionField.value = '';
  }

  function renderContent (){
    var renderTest = myShoppingList.render();
    var renderTarget = document.getElementById( 'content' );
    renderTarget.innerHTML = renderTest;

    var attachListenerToCheckbox = document.getElementsByClassName("checkbox");
    var attachListenerToDeleteButton = document.querySelectorAll('.deleteButton');
    for( var i = 0; i < attachListenerToCheckbox.length; i++ ){
      attachListenerToCheckbox[i].addEventListener( 'change', function ( event ){
        var idOfItem = event.target.parentNode.id;
        var checkbox = event.target;
        changeCheckedStatus( idOfItem, checkbox );
      } );
      attachListenerToDeleteButton[i].addEventListener( 'click', function( event ){
        var idOfItem = event.target.parentNode.id;
        removeItemButtonClicked( idOfItem );
      } );
    }
  }

  //how to assign idx to each shopping list item...
  //not sure if this structure will work..
  function changeCheckedStatus (idx, checkbox){
    /*var checkBox = document.getElementByClassName("checkbox");
    checkBox.addEventListener("change", function(){*/
    var listArrayItem = myShoppingList.items[ idx ];
    if(checkbox.checked === true){
      console.log("checked");
      listArrayItem.check();
      // run check()
    } else if(checkbox.checked === false){
      console.log("not checked");
      listArrayItem.uncheck();
      // run uncheck()
    }
      //console.log( this.checked );
  }//);

  function removeItemButtonClicked ( idx ){
    console.log( `deleting ${ idx }` );
    var listArrayItem = myShoppingList.items[ idx ].name;
    console.log( listArrayItem );
    myShoppingList.removeItem( listArrayItem );
    console.log( myShoppingList.items );

    deleteThisItem( idx );
  }

  function deleteThisItem ( idx ){
    var targetList = document.querySelector( '.list' );
    targetList.removeChild( targetList.childNodes[ idx ] );
    renderContent();
  }

  //this part handles all the dom/event handler stuff

  var attachListenerToAddItemButton = document.querySelector( '#add_shopping_list_item_button' );
  attachListenerToAddItemButton.addEventListener( 'click', add_to_shopping_list );


  //create instances and stuff down here
  var myShoppingList = new ShoppingList();


} )();

/*
  modify ShoppingListItem.render() to include:
    button element w/ label x.
  add eventlistener to this button that calls removeItemButtonClicked( idx ) on click.
  make removeItemButtonClicked()

    finds the ShoppingListItem using idx.
    calls shopping_list.removeItem(), passing in item from previous line.
  rerender shopping list.

*/

//CURRENT PROBLEM IS THAT myShoppingList.REMOVEITEM DELETES THE WHOLE ITEMS ARRAY?