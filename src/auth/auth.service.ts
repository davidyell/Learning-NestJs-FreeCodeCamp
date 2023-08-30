import { Injectable } from '@nestjs/common';
import { SignupDto } from './dto';
import * as argon from 'argon2';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}

  async register(dto: SignupDto) {
    // hash the password
    const hashedPassword = await argon.hash(dto.password);

    // persist the user
    const user = await this.userService.save({
      email: dto.email,
      password: hashedPassword,
    });

    // respond
    delete user.password;
    return user;
  }

  login() {
    return { message: 'This would log you into your account.' };
  }
}
