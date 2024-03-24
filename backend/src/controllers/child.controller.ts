import { Request, Response } from "express";
import { IendPoint } from "../interfaces/interface.endpoint";
import { Controller } from "./global.controller";

export class ChildController extends Controller {
    public path: string = "/";

    public endpoints: IendPoint[] = [
        // GET endpoints
        {
            path: '/abc',
            method: 'get',
            callback: (req: Request, res: Response) => {
          
                const data = { message: 'upload hihih' };
                res.json(data);
            }
        },
        {
            path: '/xyz',
            method: 'get',
            callback: (req: Request, res: Response) => {
              
                res.json({ message: 'Another GET endpoint' });
            }
        },

        // POST endpoints
        {
            path: '/create-data',
            method: 'post',
            callback: (req: Request, res: Response) => {
                const newData = req.body;
             
                res.json({ message: 'Data created successfully' });
            }
        },
        {
            path: '/add-item',
            method: 'post',
            callback: (req: Request, res: Response) => {
                const item = req.body;
              
                res.json({ message: 'Item added' });
            }
        },

      
        {
            path: '/update-data/:id',
            method: 'put',
            callback: (req: Request, res: Response) => {
                const updatedData = req.body;
                const id = req.params.id;
                // Update existing data
                res.json({ message: 'Data updated' });
            }
        },
        {
            path: '/edit-item/:itemId',
            method: 'put',
            callback: (req: Request, res: Response) => {
                const itemChanges = req.body;
                const itemId = req.params.itemId;
                
                res.json({ message: 'Item updated' });
            }
        },

        // DELETE endpoints
        {
            path: '/delete-data/:id',
            method: 'delete',
            callback: (req: Request, res: Response) => {
                const id = req.params.id;
                // Delete data
                res.json({ message: 'Data deleted' });
            }
        },
        {
            path: '/remove-item/:itemId',
            method: 'delete',
            callback: (req: Request, res: Response) => {
                const itemId = req.params.itemId;
                // Remove item
                res.json({ message: 'Item removed' });
            }
        }
    ]

    constructor() {
        super()
    }

}