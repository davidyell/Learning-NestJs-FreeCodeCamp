import { Injectable } from '@nestjs/common';
import { User } from './user.entity';
import { DataSource } from 'typeorm';
import { UUID } from 'crypto';

@Injectable()
export class UserService {
  constructor(private dataSource: DataSource) {}

  async save(user: Partial<User>): Promise<User> {
    return this.dataSource.getRepository(User).save(user);
  }

  async get(uuid: UUID): Promise<User> {
    return this.dataSource.getRepository(User).findOneByOrFail({ id: uuid });
  }
}
