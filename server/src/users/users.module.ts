import { Module } from '@nestjs/common';
import { TypegooseModule } from 'nestjs-typegoose';
import { UsersController } from './users.contoller';
import User from './users.model';
import { UsersService } from './users.service';
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

@Module({
  imports: [
    TypegooseModule.forFeature([User]),
    TypegooseModule.forRoot(`mongodb://${process.env.MONGO_URI}/practice`),
  ],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
