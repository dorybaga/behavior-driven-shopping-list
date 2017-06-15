var chai = require('chai');

var expect = chai.expect;
var should = chai.should();

var ShoppingListItem = require('../js/shopping_list_item.js');

describe('ShoppingListItem Class', function(){
  var shopList = ShoppingListItem;
  var grocery;

  beforeEach( function (){
    grocery = new ShoppingListItem( 'onions' );
  } );

  it('should be a Class', function(){
    expect(shopList).to.be.a('function');
  });

  it( 'should have a property named "name"', function(){
    expect( shopList.name ).to.equal( 'onions' );
  } );

});