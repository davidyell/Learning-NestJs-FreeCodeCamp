import { Controller, Get, UseGuards } from '@nestjs/common';
import { JwtGuard } from '../auth/guard';
import { GetUser } from '../auth/decorator';
import { User } from './user.entity';

@UseGuards(JwtGuard)
@Controller('users')
export class UserController {
  @Get('profile')
  profile(@GetUser() user: User) {
    delete user.password;
    return user;
  }
}
