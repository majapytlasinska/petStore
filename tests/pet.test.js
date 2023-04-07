const request = require('supertest');
const assert = require('assert');
const express = require('express');

const app = express();

app.get('/pet', function(req, res) {
  //res.status(200).json({ name: 'john' });
});

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
    .expect(405, done)
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
  .expect(404, done)
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
  .expect(400, done)
})

it('deleting nonexisting pet gives 404', () => {
  request(app, { http2: true })
  .delete('/pet/dhsjaskdjhfghdssk')
  .expect(404, done)
})

});