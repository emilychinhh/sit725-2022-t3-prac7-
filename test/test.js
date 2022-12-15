// global variables...
let express = require("express");
var expect = require("chai").expect;
var request = require("request");

describe("Add Two Numbers", function()
{
    //local varibales...
    var url = "http://localhost:8080/addTwoNumbers/3/5"; //addTwoNumbers is actually end of the route, so the number is 3 and 5

    // it functions.....
    // first it function - test integer
    it("return status 200 to check if api works", function(done){
        request(url,function(error,response,body){
            expect(response.statusCode).to.equal(200);
            done()
        });
    })
    // second it function - test integer
    it("returns statusCode key in body to check if api give right result should be 200", function(done) {
        request(url, function(error, response, body) {
            body = JSON.parse(body)
            expect(body.statusCode).to.equal(200);
            done()
          });
    });
    // third it function - test integer
    it("returns the result as number", function(done) {
        request(url, function(error, response, body) {
            body = JSON.parse(body)
            expect(body.result).to.be.a('number');
            done()
          });
    });
    // fourth it function - test integer
    it("returns the result equal to 8", function(done) {
        request(url, function(error, response, body) {
            body = JSON.parse(body)
            expect(body.result).to.equal(8);
            done()
          });
    });
    // fifth it function - test integer
    it("returns the result not equal to 15", function(done) {
        request(url, function(error, response, body) {
            body = JSON.parse(body)
            expect(body.result).to.not.equal(15);
            done()
          });
    });
    
});
  
describe("Add Two strings", function() 
{
    // now test with strings...
    var url = "http://localhost:8080/addTwoNumbers/a/b";

    // sixth it function - test string
    it("should not returns status 200", function(done) {
        request(url, function(error, response, body) {
            expect(response.statusCode).to.equal(200);
            done()
        });
    });
    // seventh it function - test string
    it("returns statusCode key in body to check if api gives right result should be 400", function(done) {
        request(url, function(error, response, body) {
            body = JSON.parse(body)
            expect(body.statusCode).to.equal(400);
            done()
          });
    });
    // eigth it function - test string
    it("returns the result as null", function(done) {
        request(url, function(error, response, body) {
            body = JSON.parse(body)
            expect(body.result).to.be.a('null');
            done()
          });
    });

});