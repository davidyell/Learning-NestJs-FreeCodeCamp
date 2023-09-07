import { DataSource, DataSourceOptions } from 'typeorm';
import { User } from '../../user/user.entity';
import { Bookmark } from '../../bookmark/bookmark.entity';
import { Initial1694098624710 } from '../../migrations/1694098624710-Initial';

export const appDataSourceOptions: DataSourceOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'root',
  database: 'nestjs-beginner',
  timezone: '+00:00',
  // TODO: Need to figure out what glob pattern to use between entities and migrations from src and dist
  entities: [User, Bookmark],
  migrations: [Initial1694098624710],
  logging: true,
};
export const appDataSource = new DataSource(appDataSourceOptions);
