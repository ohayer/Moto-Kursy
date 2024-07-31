import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserMessages } from './user-messages.entity';

@Injectable()
export class UserMessagesService {
  constructor(
    @InjectRepository(UserMessages)
    private userMessagesRepository: Repository<UserMessages>,
  ) {}

  create(email: string, content: string): Promise<UserMessages> {
    const newMessage = this.userMessagesRepository.create({ email, content });
    return this.userMessagesRepository.save(newMessage);
  }

  async findMessagesByEmail(email: string): Promise<UserMessages[]> {
    return await this.userMessagesRepository
      .createQueryBuilder('user_messages')
      .where('email = :email', { email })
      .orderBy('created_at', 'ASC')
      .getMany();
  }

  async findGrouped(): Promise<
    { email: string; count: number; unreadCount: number; lastDate: Date }[]
  > {
    return await this.userMessagesRepository
      .createQueryBuilder('user_messages')
      .select('email')
      .addSelect('COUNT(*)', 'countAll')
      .addSelect('COUNT(CASE WHEN read = false THEN 1 END)', 'unreadCount')
      .addSelect('MAX(created_at)', 'lastDate')
      .groupBy('email')
      .orderBy('MAX(created_at)', 'DESC')
      .getRawMany();
  }

  async updateReadStatus(id: number, read: boolean): Promise<UserMessages> {
    await this.userMessagesRepository.update(id, { read });
    return this.userMessagesRepository.findOne({ where: { id } });
  }
}
