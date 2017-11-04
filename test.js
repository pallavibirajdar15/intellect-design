var chai = require('chai');
var chaiHttp = require('chai-http');

it('should list all active users on /getActiveUsers GET', function(done) {
  chai.request(server)
    .get('/getActiveUsers')
    .end(function(err, res){
      res.should.have.status(200);
      res.should.be.json;
      done();
    });
});