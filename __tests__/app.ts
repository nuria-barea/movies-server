
import request,{Response} from 'supertest';
import app from '../src/app';


describe('testing api',()=>{
    let response:Response;
    /** responda con un código 200
     *  responda con un json
     *  responda con un json de movies
     * ____
     *
     * responda con código 404 cuando la ruta no es correcta
     * responda con un mensaje de "no hay películas"
     *
    */


    describe('testing route "/"',()=>{
        beforeAll(async ()=>{
            response = await request(app)
            .get('/');
        })
        test('should return code 200 and content-type "application/json"',async ()=>{


        expect(response.status).toBe(200);
        expect(response.headers['content-type']).toContain('application/json')
    })
        test('should return "hello world"', async ()=>{
            expect(response.body).toBe('hello world')
        })
})
    describe('/movies', ()=>{
        beforeAll(async ()=>{
            response = await request(app)
                .get('/movies')
        })
        test('should return status 200 & content-type "application/json"',()=>{
            expect(response.status).toBe(200);
            expect(response.headers['content-type']).toContain('application/json')
        })

    })

    describe("POST /user", () => {
        beforeAll(async ()=>{
            response = await request(app)
            .post('/user')
            .send({mail:"mi@mail.com",
                   password:"1234"});
        })
        describe("when passed a username and password", () => {

        test('should respond with a 200 status code',()=>{
            expect(response.status).toEqual(200);
        })
        // should save the username and password in the database
        // should respond with a json object that contains the id from the database. (probably jwt in the real world)
        // should specify json as the content type in the http header.
        })

        describe("when the username or password is missing", () => {
        // should return a 400 status code to show there was a user error.
        // should return a json object that contains an error message.
        // should specify json as the content type in the http header.
        })
      })
})