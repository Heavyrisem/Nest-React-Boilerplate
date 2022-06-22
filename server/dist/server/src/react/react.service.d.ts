import { Request, Response } from 'express';
import { ConfigService } from '@nestjs/config';
export declare class ReactService {
    private readonly config;
    private devProxyServer;
    constructor(config: ConfigService);
    requestReact(request: Request, response: Response): void;
}
