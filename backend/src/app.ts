import cors from 'cors'
import express, { Express } from 'express'
import { Controller } from './controllers/global.controller';
import { ChildController } from './controllers/child.controller';
import listEndpoints from 'express-list-endpoints';

export class App {

    private instance: Express;
    private port: number;

    private controllers: typeof Controller[] = [ChildController]

    constructor(port: number) {
        this.instance = express()
        this.port = port
    }
    init() {
        this.instance.use(cors())
        this.instance.use(express.json())
        this.instance.use(express.urlencoded())

        this.defineEndPoints()
      
        this.instance.listen(this.port, () => { console.log('api listen in port %d', this.port) })
    }
    private defineEndPoints() {
        this.controllers.map(controllerClass => {

            const controller = new controllerClass()
            controller.defineRoutes()

            this.instance.use(controller.path, controller.getInstance())
        })


    }
}


