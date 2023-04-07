const request = require('supertest');
const app = 'https://petstore.swagger.io/v2';

describe('POST, GET, PUT and DELETE /pet', function() {

it('adding a new pet with wrong data gets 405', () => {
    request(app, { http2: true })
    .post('/pet')
    .send(
      {
        name: "doggie",
        photoUrls: [
          111
        ]
      }
    )
    .set('Accept', 'application/json')
    .expect(405)
})

it('finding nonexisting pet gives 404', () => {
  request(app, { http2: true })
  .get('/pet')
  .send(
    {
      name: "zbccjhedfbd",
      photoUrls: [
        "zzz"
      ]
    }
  )
  .set('Accept', 'application/json')
  .expect(404 )
})

it('updating a pet with wrong ID gives 400', () => {
  request(app, { http2: true })
  .put('/pet')
  .send(
    {
      id: "invalidID",
      name: "zbccjhedfbd",
      photoUrls: [
        "zzz"
      ]
    }
  )
  .set('Accept', 'application/json')
  .expect(400 )
})

it('deleting nonexisting pet gives 404', () => {
  request(app, { http2: true })
  .delete('/pet/dhsjaskdjhfghdssk')
  .expect(404 )
})

});