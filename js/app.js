
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
      appendCheckBoxToItems[i].addEventListener( 'change', changeCheckedStatus( i, appendCheckBoxToItems[i] ) );

    }
  }

  //how to assign idx to each shopping list item...
  //not sure if this structure will work..
  function changeCheckedStatus (idx, checkbox){
    console.log( arguments );
    /*var checkBox = document.getElementByClassName("checkbox");
    checkBox.addEventListener("change", function(){*/
    if(this.value === 'on'){
      console.log("checked");
      // run check()
    } else if(this.value === 'off'){
      console.log("not checked");
      // run uncheck()
    }
      //console.log( this.checked );
  }//);

  //this part handles all the dom/event handler stuff

  var attachListenerToAddItemButton = document.querySelector( '#add_shopping_list_item_button' );
  attachListenerToAddItemButton.addEventListener( 'click', add_to_shopping_list );


  //create instances and stuff down here
  var myShoppingList = new ShoppingList();


} )();