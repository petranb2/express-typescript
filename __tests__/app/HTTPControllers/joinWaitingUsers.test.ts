import app from '@app/app'
import setupApp from '@app/setupApp'
import request from "supertest";
import express, { Express } from 'express';
import { Connection } from 'typeorm'
import setupMiddlewares from 'src/app/middlewares/setupMiddlewares'
import setupRouting from 'src/app/routers/setupRouting'
import setupDB from 'src/app/databases/setupDB';

describe('Join Waiting Users Test Routes', () => {
    let appInstance: Express;
    let DB: Connection;

    beforeAll(async () => {
        appInstance = app.app;
        // setup middlewares
        setupMiddlewares(express, appInstance)

        // setup routing
        setupRouting(appInstance)

        // setup DB
        DB = await setupDB()

    });
    afterAll(async () => {
        console.log('afterAll callback::start')
        await DB.close();
        console.log('afterAll callback::end')

    }, 50000);
    test('test index route', async (done) => {
        const response = await request(appInstance).post("/join-waiting-users").send({ email: 'petranb3@gmail.com' });
        expect(response.statusCode).toBe(200);
        done();
    }, 10000)
    test('test index route too long email', async (done) => {
        // const response = await request(appInstance).post("/join-waiting-users").send({ email: '111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111@gmail.com' });
        // expect(response.statusCode).toBe(500);
        // done();
        return request(appInstance)
            .post("/join-waiting-users")
            .send({ email: '111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111@gmail.com' })
            .then(response => {
                expect(response.statusCode).toBe(200);
                done()
            });
    }, 10000)
})
