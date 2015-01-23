/*
 * treemap
 * https://github.com/Akshit-/treemap
 *
 * Copyright (c) 2014 akshit
 * Licensed under the Apache 2 license.
 */

// chai is an assertion library
var chai = require('chai');

// @see http://chaijs.com/api/assert/
var assert = chai.assert;

// register alternative styles
// @see http://chaijs.com/api/bdd/
chai.expect();
chai.should();

// requires your main app (specified in index.js)
var treemap = require('../');

describe('treemap module', function(){
  describe('#hello()', function(){
    it('should return a hello', function(){

      assert.equal(treemap.hello('biojs'), ("hello biojs"));
      
      // alternative styles
      treemap.hello('biojs').should.equal("hello biojs");
    });
  });
});
