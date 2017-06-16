var expect = chai.expect;
var should = chai.should();

/*var ShoppingListItem = require('../js/shopping_list_item.js');
var ShoppingList = require('../js/shopping_list.js');*/

describe('ShoppingListItem Class', function(){
  var shopList = ShoppingListItem;
  var grocery;

  beforeEach( function (){
    grocery = new ShoppingListItem( 'onions', 'produce', false );

  } );

  it('should be a Class', function(){
    expect( shopList ).to.be.a('function');
  } );

  it( 'should have a property "name"', function(){
    expect( grocery.name ).to.equal( 'onions' );
  } );

  it( 'should have a property "description"', function(){
    expect( grocery.description ).to.equal( 'produce' );
  } );

  it( 'should have a property"is_done"', function(){
    expect( grocery.is_done ).to.equal( false );
  } );

  it( 'should have a constructor method that accepts 2 arguments, name and description', function(){
    var produceName = 'carrot';
    var produceDescription = 'orange';
    var grocery2 = new ShoppingListItem( produceName, produceDescription, false );
    expect( grocery2.name ).to.equal( produceName );
    expect( grocery2.description ).to.equal( produceDescription );
  } );


} );

describe('check', function() {
  var shopList = ShoppingListItem;
  var grocery = new ShoppingListItem('onions', 'produce', false);
  it('should be a function', function(){
    expect(grocery.check).to.be.a('function');
  });
  it('should set the is_done property to true', function() {
    grocery.check();
    expect( grocery.is_done ).to.equal( true );
  });
});

describe('uncheck', function() {
  var shopList = ShoppingListItem;
  var grocery = new ShoppingListItem('onions', 'produce', false);
  it('should be a function', function(){
    expect(grocery.uncheck).to.be.a('function');
  });
  it('should set the is_done property to false', function() {
    grocery.uncheck();
    expect( grocery.is_done ).to.equal( false );
  });
});

describe( 'render method', function (){
  var grocery = new ShoppingListItem( 'onion', 'produce', false );

  var result = grocery.render();

  it( 'should be a function', function(){
    expect(grocery.render).to.be.a('function');
  });

  it( 'render should return ...', function(){
    expect(grocery.render()).to.equal( '<li class="completed_false"><span>onion</span><span>produce</span></li>' );
  });


});


describe('ShoppingList Class', function(){
  var myShopList = ShoppingList;
  var list;

  beforeEach( function (){
    list = new ShoppingList();

  } );

  it('should be a Class', function(){
    expect( myShopList ).to.be.a('function');
  });

  it('should have a property named "items"', function(){
    expect(list).to.have.property('items');
  });

  it('should have a constructor method that initializes items as an empty array', function(){
    expect( list.items ).to.be.an('Array');
  });

});

describe('addItem method', function(){
  var list = new ShoppingList();
  var item = new ShoppingListItem('onion', 'produce', false);

  it('should be a function', function(){
    expect(list.addItem).to.be.a('function');
  });

  it('should add item to items array', function(){
    list.addItem(item, item);
    expect (list.items[0] instanceof ShoppingListItem).to.equal(true);
  });

  it.skip('should not add the item to the items array if not an instance of ShoppingListItem', function(){
    var notItem = 12;
    expect(list.addItem(notItem)).to.be.an('error');
    // expect(item).to.be.an.instanceof(ShoppingListItem);
  });

});

describe('removeItem method', function(){
  var list;
  var item = new ShoppingListItem('onion', 'produce', false);
  var item2 = new ShoppingListItem('garlic', 'produce', false);

  beforeEach(function(){
    list = new ShoppingList();
    list.addItem(item);
    list.addItem(item2);

  });


  it( 'removeItem is a function', function(){
    expect( list.removeItem ).to.be.a('function');
  });

  it( 'removeItem accepts one argument', function(){
    list.removeItem( 'onion', 'garlic' );
    expect( list.items ).to.deep.equal([item2]);
  } );

  it( 'removeItem can remove items from items array', function(){
    list.removeItem( 'garlic' );
    expect( list.items ).to.deep.equal([item]);
  });

});



