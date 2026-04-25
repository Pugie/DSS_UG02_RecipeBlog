

const authController = require('../app/controllers/auth');
const register = authController.register;

const recipeController = require("../app/controllers/recipes");

//variables to use in testing
var username = "";
var password = "password1234";
var email = "johndoe@yellowking.com"

const request = ({
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    username,
                    email,
                    password
                })
            });

describe("Testing User Sign Up", function (){

    it("blank fields should return error code 400", function(){
        
        var response = register(request)
        if (response.status == 400){
            console.log("Error code 400");
        }
    });

});