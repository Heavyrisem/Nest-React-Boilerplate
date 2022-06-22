import { All, Controller, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';

import { ReactService } from './react.service';

@Controller()
export class ReactController {
  constructor(private readonly reactService: ReactService) {}

  @All('*')
  reactView(@Req() request: Request, @Res() response: Response) {
    this.reactService.requestReact(request, response);
  }
}
