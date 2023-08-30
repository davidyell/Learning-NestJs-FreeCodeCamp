import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!<br> This is the NestJS Beginner course!';
  }
}
