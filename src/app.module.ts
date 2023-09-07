import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { BookmarkModule } from './bookmark/bookmark.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { appDataSourceOptions } from './database/datasource/app.datasource';
import { UserService } from './user/user.service';
import { DataSource } from 'typeorm';

@Module({
  imports: [TypeOrmModule.forRoot(appDataSourceOptions), AuthModule, UserModule, BookmarkModule],
  controllers: [AppController],
  providers: [AppService, UserService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
