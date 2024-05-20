// install dependencies
const { execSync } = require('child_process');
execSync('npm install');
execSync('npm run seed');

const request = require("supertest")
const { db } = require('./db/connection');
const { Musician } = require('./models/index')
const app = require('./src/app');
const seedMusician = require("./seedData");

const obj = [{"id":1,"name":"Mick Jagger","instrument":"Voice","bandId":null},{"id":2,"name":"Drake","instrument":"Voice","bandId":null},{"id":3,"name":"Jimi Hendrix","instrument":"Guitar","bandId":null}];


describe('./musicians endpoint', () => {
    // Write your tests here
    test('testing endpoint', async function() {
        const res = await request(app).get("/musicians");
        expect(res.statusCode).toBe(200);
        const data = JSON.parse(res.text);
        expect(data[0].name).toBe("Mick Jagger");
        
    });
    
    




    
})