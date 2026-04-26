const supertest = require("supertest");
const assert = require("assert");
const app = require("../app/app");

//variables to use in testing
var username = "";
var password = "password1234";
var email = "johndoe@yellowking.com"

//let the testing begin

describe("GET CHECK", function() {
    it("should have a status code 200", function(done){
        supertest(app)
        .get("/")
        .expect(200)
        .end(function(err, res){
            if(err) done (err);
            done();
        });
    });
});

describe("Testing User Sign Up", function (){

    it("blank fields should return error code 422", function(){
        const testdata = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    username,
                    email,
                    password
                })
            };

        var res = register(testdata);
        assert.strictEqual(res, 422);

    });

    it("if the user exists, it should return error code 409", function(){

    })

});