var chai = require('chai');
var chaihttp = require('chai-http');
var should = chai.should();

chai.use(chaihttp);
var request = chai.request;

var baseUrl  = "http://localhost:3000"
describe("Test the user",function(){
    it("Check the user",function(done){

        chai.request(baseUrl+"/users/userlist")
        .get("/")
        .end(function(err,res){
            res.should.have.status(200);
        })
        done();
    })
})
