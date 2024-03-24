import { Router } from "express"
import { IendPoint } from "../interfaces/interface.endpoint"

export class Controller {
    public path: string="/"

    private instance: Router

    public endpoints?: IendPoint[] 

    constructor() {
      
        this.instance = Router()
       
    }

   public defineRoutes() {
        if(this.path[0]!='/'){
            throw new Error("The path must start with '/'")
        }
        if (this.endpoints) {
            this.endpoints.forEach(endpoint => {
                if(endpoint.path[0]!='/'){
                    throw new Error("The path must start with '/'")
                }       
                console.log('define path \x1b[32m[ %s ]\x1b[0m: %s%s',endpoint.method.toUpperCase(), this.path.replace('/',''), endpoint.path)
                this.instance[endpoint.method](endpoint.path, endpoint.callback)
            })
        }
    }

    public getInstance() {
        return this.instance
    }

}

