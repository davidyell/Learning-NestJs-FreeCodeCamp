import { DataSource, DataSourceOptions } from 'typeorm';

// Set some relative glob patterns for TypeORM, so you can both run migrations and service the application
let entities = ['**/*.entity.ts'];
let migrations = ['src/migrations/*.ts'];
if (__dirname.includes('dist')) {
  entities = ['**/*.entity.js'];
  migrations = ['../src/migrations/*.ts'];
}

export const appDataSourceOptions: DataSourceOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'root',
  database: 'nestjs-beginner',
  timezone: '+00:00',
  entities,
  migrations,
  logging: true,
};
export const appDataSource = new DataSource(appDataSourceOptions);
