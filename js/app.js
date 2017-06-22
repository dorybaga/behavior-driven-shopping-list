
( function (){

  function add_to_shopping_list (){

    //handles getting data from the form and adding it to myShoppingList.items array.
    var targetNameOfItemField = document.querySelector( '#itemNameField' );
    var targetDescriptionOfItemField = document.querySelector( '#itemDescriptionField' );
    var newGroceryItem = new ShoppingListItem( targetNameOfItemField.value, targetDescriptionOfItemField.value, false );
    myShoppingList.addItem( newGroceryItem );

    //rerenders content area with myShoppingList.items array items.
/*    var renderTest = myShoppingList.render();
    var renderTarget = document.getElementById( 'content' );
    renderTarget.innerHTML = renderTest;*/
    renderContent();

    //clears input fields.
    targetNameOfItemField.value = '';
    targetDescriptionOfItemField.value = '';
  }

  function renderContent (){
    var renderTest = myShoppingList.render();
    var renderTarget = document.getElementById( 'content' );
    renderTarget.innerHTML = renderTest;

    var appendCheckBoxToItems = document.getElementsByClassName("checkbox");

    for( var i = 0; i < appendCheckBoxToItems.length; i++ ){
      appendCheckBoxToItems[i].addEventListener( 'change', function ( event ){
        var idOfItem = event.target.parentNode.id;
        var checkbox = event.target;
        changeCheckedStatus( idOfItem, checkbox );
      /*event.target.parentNode.id

      gets the id of the parent(li) of the checkbox.*/
      } );
    }
  }


/*
add checkbox to render method of ShoppingListItem.
make something that sticks ids on the elements
add eventListener to the checkbox that call changeCheckedStatus( idx, checkbox )
changedCheckedStatus() finds shoppingListItem element based on idx
determine if checkbox is checked or not
if checked invoke shoppingListItem.check().
if not checked invoke shoppingListItem.uncheck().


*/
  //how to assign idx to each shopping list item...
  //not sure if this structure will work..
  function changeCheckedStatus (idx, checkbox){
    /*var checkBox = document.getElementByClassName("checkbox");
    checkBox.addEventListener("change", function(){*/
    var listArrayItem = myShoppingList.items[idx];
    console.log( 'array equiv', listArrayItem );
    if(checkbox.checked === true){
      console.log("checked");
      listArrayItem.check();
      // run check()
    } else if(checkbox.checked === false){
      console.log("not checked");
      listArrayItem.uncheck();
      // run uncheck()
    }
    console.log( 'array equiv after', listArrayItem );
      //console.log( this.checked );
  }//);

  //this part handles all the dom/event handler stuff

  var attachListenerToAddItemButton = document.querySelector( '#add_shopping_list_item_button' );
  attachListenerToAddItemButton.addEventListener( 'click', add_to_shopping_list );


  //create instances and stuff down here
  var myShoppingList = new ShoppingList();


} )();