import { Injectable } from '@nestjs/common';
import { SignupDto } from './dto';

@Injectable()
export class AuthService {
  register(dto: SignupDto) {
    return { message: 'This would register an account for you.' };
  }

  login() {
    return { message: 'This would log you into your account.' };
  }
}
