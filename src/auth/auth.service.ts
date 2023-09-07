import { ForbiddenException, Injectable, UnprocessableEntityException } from '@nestjs/common';
import { AuthDto } from './dto';
import * as argon from 'argon2';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}

  async register(dto: AuthDto) {
    // hash the password
    const hashedPassword = await argon.hash(dto.password);

    try {
      // persist the user
      const user = await this.userService.save({
        email: dto.email,
        password: hashedPassword,
      });

      // respond
      delete user.password;
      return user;
    } catch (error) {
      throw new UnprocessableEntityException('Could not register the user');
    }
  }

  async login(dto: AuthDto) {
    try {
      const user = await this.userService.getByEmail(dto.email);

      if ((await argon.verify(user.password, dto.password)) === false) {
        throw new ForbiddenException();
      }

      delete user.password;
      return user;
    } catch (error) {
      throw new ForbiddenException();
    }
  }
}
