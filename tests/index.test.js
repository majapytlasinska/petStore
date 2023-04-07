const request = require('supertest');
const app = 'https://petstore.swagger.io/v2';

describe("POST /user", () => {

    //given a username and password"
        it("should respond with a 200 status code", async() => {
            const response = await 
            request(app)
            .post("/user")
            .send(
                {
                    "id": 0,
                    "username": "majatest",
                    "firstName": "Maja",
                    "lastName": "Test",
                    "email": "mmm@mm.mm",
                    "password": "majatest",
                    "puserStatus": 0
                  }
            )
            expect(response.statusCode).toBe(200)
        })

})



// const request = require('supertest');
// const assert = require('assert');
// const express = require('express');

// const app = express();

// app.get('/api/breeds/image/random', function(req, res) {
//     res.status(200).json({ 
//         message : 'https://example.com/',
//         status : 'success'
//     });
// });

// describe('register', () => {
//     it('return 200', async() => {
//         const res = await 

// request('https://dog.ceo')
//   .get('/api/breeds/image/random')
//   .end(function(err, res) {
//         if (err) throw err;
//         console.log(res.body);
//   });


//     })
// })
