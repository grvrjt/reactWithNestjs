import { Controller, Get } from '@nestjs/common';
import { UsersService } from '../users/users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getHello(): string {
    console.log('first get methodcallde');
    return this.usersService.getHello();
  }
}
