import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { BookmarkModule } from './bookmark/bookmark.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { appDataSourceOptions } from './database/datasource/app.datasource';
import { UserService } from './user/user.service';
import { DataSource, DataSourceOptions } from 'typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => {
        return {
          ...appDataSourceOptions,
          ...{
            host: configService.getOrThrow('DB_HOST'),
            port: configService.getOrThrow('DB_PORT'),
            username: configService.getOrThrow('DB_USER'),
            password: configService.getOrThrow('DB_PWD'),
          },
        } as DataSourceOptions;
      },
      inject: [ConfigService],
    }),
    AuthModule,
    UserModule,
    BookmarkModule,
    ConfigModule.forRoot({}),
  ],
  controllers: [AppController],
  providers: [AppService, UserService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
