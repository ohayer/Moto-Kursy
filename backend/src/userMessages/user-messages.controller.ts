import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Patch,
  UseGuards,
} from '@nestjs/common';
import { UserMessagesService } from './user-messages.service';
import { UserMessages } from './user-messages.entity';
import { AuthGuard } from '../auth/auth.guard';

@Controller('user-messages')
export class UserMessagesController {
  constructor(private readonly userMessagesService: UserMessagesService) {}

  @Post()
  create(
    @Body('email') email: string,
    @Body('content') content: string,
  ): Promise<UserMessages> {
    return this.userMessagesService.create(email, content);
  }

  @Get()
  @UseGuards(AuthGuard)
  findAll(): Promise<UserMessages[]> {
    return this.userMessagesService.findAll();
  }

  @Get('grouped')
  @UseGuards(AuthGuard)
  findGrouped(): Promise<
    { email: string; count: number; unreadCount: number }[]
  > {
    return this.userMessagesService.findGrouped();
  }

  @Patch(':id/read')
  @UseGuards(AuthGuard)
  updateReadStatus(
    @Param('id') id: number,
    @Body('read') read: boolean,
  ): Promise<UserMessages> {
    return this.userMessagesService.updateReadStatus(id, read);
  }
}
