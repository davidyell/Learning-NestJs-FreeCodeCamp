import { DataSource, DataSourceOptions } from 'typeorm';

export const appDataSourceOptions: DataSourceOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'root',
  database: 'nestjs-beginner',
  timezone: '+00:00',
  entities: ['*.entity.ts'],
  migrations: ['migrations/*-migrations.ts'],
  logging: true,
};
export const appDataSource = new DataSource(appDataSourceOptions);
