import { DataSource, DataSourceOptions } from 'typeorm';
import { User } from '../../user/user.entity';
import { Bookmark } from '../../bookmark/bookmark.entity';

export const appDataSourceOptions: DataSourceOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'root',
  database: 'nestjs-beginner',
  timezone: '+00:00',
  entities: [User, Bookmark], // TODO: Need to figure out what glob pattern to use
  migrations: ['migrations/*-migrations.ts'],
  logging: true,
};
export const appDataSource = new DataSource(appDataSourceOptions);
