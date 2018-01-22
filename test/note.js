import test from 'ava';
import request from 'supertest';
import app from '../app';

test('Get list of notes', async (t) => {
  const noteToCreate = { title: 'Title', body: 'Body' }; // same as axios.post....

  const creation = await request(app) // same as axios.post.... supertest lib syntax
    .post('/note')
    .send(noteToCreate);

  const res = await request(app) // get the list of notes - get the results to test - check the db
    .get('/note');

  t.is(res.status, 200); // check if this test is successfull
  t.true(Array.isArray(res.body), 'Body should be an array');
  t.true(res.body.length > 0); // there should be at least 1 note
});
