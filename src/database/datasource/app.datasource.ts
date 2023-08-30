import { DataSource, DataSourceOptions } from 'typeorm';

export const appDataSourceOptions: DataSourceOptions = {
  type: 'mysql',
  host: '127.0.0.1',
  port: 3306,
  username: 'root',
  password: 'root',
  database: 'nestjs-beginner',
  timezone: '+00:00',
  entities: ['src/**/*.entity.ts'],
  migrations: ['src/migrations/*-migrations.ts'],
};
export const appDataSource = new DataSource(appDataSourceOptions);
