import request from 'supertest';
import app from '../src/app';

describe('testing api',()=>{
    
    test('api',async ()=>{
        const response = await request(app)
            .get('/')

        expect(response.status).toBe(200);
    })
})