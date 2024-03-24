import { NextFunction, Request, Response } from "express"

export interface IendPoint {
    method:'get'|'post'|'put'|'delete'
    path: string,
    middleware?: (req:Request,res:Response,nextFunction:NextFunction) => any | Promise<any>,
    
    callback: (req:Request,res:Response) => any | Promise<any>
}