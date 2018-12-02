import request from 'supertest';
const { app } = require('../app.js');

describe('Basic Express Server Tests', () => {

  it('should return Server Home for a get request on /', (done) => {
    request(app)
      .get('/')
      .then(response => {
        expect(response.status).toBe(200);
        expect(response.text).toBe('Server Home');
        done();
      });
  });

  it('should return content.json for a get request on /content', (done) => {
    request(app)
      .get('/content')
      .then(response => { 
        expect(response.status).toBe(200);
        expect(response.body).toBeInstanceOf(Array);
        done();
      });
  });

  it('should return 404 for a get request on /page', (done) => {
    request(app)
      .get('/page')
      .then(response => {
        expect(response.status).toBe(404);
        expect(response.text).toMatch(/Page Not Found/);
        done();
      });
  });

  it('should return 400 for a bad request', (done) => {
    request(app)
      .post('/%')
      .then(response => {
        expect(response.status).toBe(400);
        expect(response.text).toMatch(/Error/);
        done();
      });
  });

});
