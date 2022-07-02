
import express from 'express';
import request from 'supertest';
import {movieRoute} from '../../src/route';

const app = express();
app.use(movieRoute);

  describe('/movies', ()=>
    test('should return status 200 & content-type "application/json"',async ()=>{
        const response = await request(app)
        .get('/movies')
        expect(response.status).toBe(200);
        expect(response.headers['content-type']).toContain('application/json')
    }))