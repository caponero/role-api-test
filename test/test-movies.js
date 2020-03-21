let chai = require('chai');
let chaiHttp = require('chai-http');
const expect = require('chai').expect;


chai.use(chaiHttp);
const url= 'http://localhost:3000';


describe('Insert a movie: ', () => {
    it('should insert a movie', (done) => {
        chai.request(url)
            .post('/movies')
            .send({"name": "Superman",
                 "description": "A superhero story",
                 "release-date": "2012-04-15" ,
                 "duration":"120 min",
                 "rating":"56" })
            .end( function(err,res){
                //console.log(res.body)
                expect(res).to.have.status(201);
                done();
            });
        });
   });

   
describe('get all movies: ', ()=>{
    it('should get all movies and their genres', (done) => {
        chai.request(url)
            .get('/movies')
            .end( function(err,res){
                //console.log(res.body)
                expect(res).to.have.status(200);
                done();
            });
        });
   });


describe('get the movie with id ',()=>{
    it('should get the movie with id ', (done) => {
        chai.request(url)
            .get('/movies/5e703fcc93415d0ca00f8a30')
            .end( function(err,res){
                // console.log(res.body)
                expect(res.body).to.have.property('_id').to.be.equal('5e703fcc93415d0ca00f8a30');
                expect(res).to.have.status(200);
                done();
        });
    });
});
   

describe('delete the movie with id ', () => {
    it('should delete the movie with id ', (done) => {
        chai.request(url)
            .del('/movies/5e75441e13581b0c3c0a74f3')
            .end( function(err,res){
                //console.log(res.body)
                expect(res).to.have.status(200);
                done();
        });
   });
});
   

describe('get the genre of movieId ',()=>{
    it('should get the genre with movieId ', (done) => {
        chai.request(url)
            .get('/movies/5e7047f2afe1c40fc80c3d29/genre')
            .end( function(err,res){
                //console.log(res.body)
                expect(res.body).to.have.a('array');
                expect(res).to.have.status(200);
                done();
        });
    });
});
   
 
describe('get the genre of movieId ',()=>{
    it('should get the genre with movieId ', (done) => {
        chai.request(url)
            .post('/movies/5e7047f2afe1c40fc80c3d29/genre')
            .send({"name": "Prueba",
                 "description": "A real great action "
                 })
            .end( function(err,res){
                //console.log(res.body)
                expect(res.body).to.have.a('object')
                expect(res).to.have.status(201);
                done();
        });
    });
});
   
   