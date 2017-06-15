var chai = require( 'chai' );

var expect = chai.expect;
var should = chai.should();

var ShoppingListItem = require('../js/shopping_list_item.js');

describe('ShoppingListItem Class', function(){
  var shopList = ShoppingListItem;
  var grocery;

  beforeEach( function (){
    grocery = new ShoppingListItem( 'onions', 'produce', false );

  } );

  it('should be a Class', function(){
    expect( shopList ).to.be.a('function');
  } );

  it( 'should have a property named onions', function(){
    expect( grocery.name ).to.equal( 'onions' );
  } );

  it( 'should have a property named produce', function(){
    expect( grocery.description ).to.equal( 'produce' );
  } );

  it( 'should have a property name is_done', function(){
    expect( grocery.is_done ).to.equal( false );
  } );



} );

describe('check', function() {
  var shopList = ShoppingListItem;
  var grocery = new ShoppingListItem('onions', 'produce', false);

  it('should be a function', function(){
    expect(shopList.check).to.be.a('function');

  it('should set the is_done property to true', function() {
    grocery.is_done = true;
  });


  });
});