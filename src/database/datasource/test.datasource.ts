import { DataSource, DataSourceOptions } from 'typeorm';

const dataSourceOptions: DataSourceOptions = {
  type: 'mysql',
  host: '127.0.0.1',
  port: 3306,
  username: 'root',
  password: 'root',
  database: 'nestjs-beginner-test',
  timezone: '+00:00',
  entities: ['src/**/*.entity.ts'],
};
export const testDataSource = new DataSource(dataSourceOptions);
