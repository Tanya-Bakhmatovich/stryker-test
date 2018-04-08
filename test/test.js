var assert = require('assert');
var example = require('../src/example.js')

describe('Example', function() {
  it('substractPositive', function() {
    assert.equal('2', example.substractPositive(1, -1));
  });

  it('substractPositive', function() {
    assert.equal('0', example.substractPositive(0, -1));
  });

  it('add', function() {
    assert.equal('2', example.add(1, 1));
  });

  // it('addForExample', function() {
  //   assert.equal('2', example.addForExample(1, 1));
  // });
})
