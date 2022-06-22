import { Controller, Get } from '@nestjs/common';

import { UserService } from './user.service';

@Controller('/api/users')
export class TodoController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getAllUsers() {
    return this.userService.getAllUsers();
  }
}
