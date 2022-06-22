import { Request, Response } from 'express';
import { ReactService } from './react.service';
export declare class ReactController {
    private readonly reactService;
    constructor(reactService: ReactService);
    reactView(request: Request, response: Response): void;
}
