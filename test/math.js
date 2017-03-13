var expect = require('chai').expect,
	indexController = require('../routes/index'),
  request = require('request');

describe("Math calculations", function() {
  describe("Add function", function() {
    it("add two numbers", function() {
    	var sum   = indexController.add(2,2);
    	expect(sum).to.equal(4);
    });
  });

  describe("Subtract", function() {
    it("subtract two numbers", function() {
      var sum   = indexController.subtract(2,2);
      expect(sum).to.equal(0);
    });
  });
  describe("Test Sample Get API", function() {
    it("returns status 200", function() {
      var url   = 'https://jsonplaceholder.typicode.com/posts/1';
      request(url, function(error, response, body) {
        expect(response.statusCode).to.equal(200);
      });
    });
  });
});
