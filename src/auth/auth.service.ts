import { ForbiddenException, Injectable, UnprocessableEntityException } from '@nestjs/common';
import { AuthDto } from './dto';
import * as argon from 'argon2';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
    private configService: ConfigService,
  ) {}

  async register(dto: AuthDto) {
    // hash the password
    const hashedPassword = await argon.hash(dto.password);

    try {
      // persist the user
      const user = await this.userService.save({
        email: dto.email,
        password: hashedPassword,
      });

      return { access_token: await this.signToken(user.id, user.email) };
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

      return { access_token: await this.signToken(user.id, user.email) };
    } catch (error) {
      throw new ForbiddenException('Invalid credentials');
    }
  }

  signToken(userId: string, email: string): Promise<string> {
    const payload = {
      sub: userId,
      email,
    };

    return this.jwtService.signAsync(payload, {
      secret: this.configService.getOrThrow('JWT_SECRET'),
    });
  }
}
