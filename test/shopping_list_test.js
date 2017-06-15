var chai = require('chai');

var expect = chai.expect;
var should = chai.should();

var ShoppingListItem = require('../js/shopping_list_item.js');

describe('ShoppingListItem Class', function(){
  var shopList = ShoppingListItem;

  it('should be a Class', function(){
    expect(shopList).to.be.a('Class');
  });
});