import request from 'supertest';
import app from '../src/app';

describe('testing api',()=>{

    describe('testing route "/movies"',()=>{
        test('',async ()=>{
        const response = await request(app)
            .get('/')

        expect(response.status).toBe(200);
        expect(response.headers['content-type']).toContain('application/json')
    })
})
})