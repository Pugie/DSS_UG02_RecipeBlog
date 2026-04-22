import SignUp from '../public/js/signup.js';
var test_SignUp = new SignUp;

describe("Testing bad values in details", function (){

    it("Test should not allow blank username", function(){
        testuser = new SignUp();
        ;
        assert.equal(test_car.speed, 0);
    });

});