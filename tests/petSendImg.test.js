const request = require('supertest');


describe.skip('POST /pet/{petId}/uploadImage', function() {
    
it('upload an image gets 200', async () => {
    await request('https://petstore.swagger.io/v2', { http2: true })
    .post('/pet/{petId}/uploadImage')
    .send({petId: '999'})
    .send('doggo1', 'test/fixtures/doggo1.png')
    .expect(200)
    .end((err, res) => {
        console.log(err);
        console.log(res);
    })
})

});