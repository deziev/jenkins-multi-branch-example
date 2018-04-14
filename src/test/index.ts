import { expect } from 'chai';
import * as request from 'supertest';
import { server } from '../server';


describe('Server test: ', () => {
  it('should return 200', (done: any) => {
    request(server)
      .get('/')
      .set('Content-Type', 'application/json')
      .expect(200)
      .end(() => done());
  });
});
