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

  @Get('grouped')
  @UseGuards(AuthGuard)
  findGrouped(): Promise<
    { email: string; count: number; unreadCount: number; lastDate: Date }[]
  > {
    return this.userMessagesService.findGrouped();
  }

  @Get(':email')
  @UseGuards(AuthGuard)
  findOneByEmail(@Param('email') email: string): Promise<UserMessages[]> {
    return this.userMessagesService.findMessagesByEmail(email);
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
