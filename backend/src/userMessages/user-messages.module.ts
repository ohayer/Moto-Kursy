import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserMessages } from './user-messages.entity';
import { UserMessagesService } from './user-messages.service';
import { UserMessagesController } from './user-messages.controller';

@Module({
  imports: [TypeOrmModule.forFeature([UserMessages])],
  providers: [UserMessagesService],
  controllers: [UserMessagesController],
})
export class UserMessagesModule {}
