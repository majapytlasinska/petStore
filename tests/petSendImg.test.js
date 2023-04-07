const request = require('supertest');
const assert = require('assert');
const express = require('express');

const app = express();

app.get('/pet/{petId}/uploadImage', function(req, res) {
  //res.status(200).json({ name: 'john' });
});

describe('POST /pet/{petId}/uploadImage', function() {
    
it('upload an image gets 200', () => {
    request(app, { http2: true })
    .post('/pet/{petId}/uploadImage')
    .send({petId: '999'})
    .field('file')
    .set("Content-Type", "application/octet-stream")
    .send('doggo1', 'test/fixtures/doggo1.png')
    .expect(200)
    .end((err, res) => {
        console.log(err);
        console.log(res);
    })
})

});