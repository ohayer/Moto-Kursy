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

  findAll(): Promise<UserMessages[]> {
    return this.userMessagesRepository.find();
  }

  async findGrouped(): Promise<
    { email: string; count: number; unreadCount: number }[]
  > {
    return this.userMessagesRepository
      .createQueryBuilder('userMessages')
      .select('email', 'created_at')
      .addSelect('COUNT(*)', 'count')
      .addSelect('COUNT(CASE WHEN read = false THEN 1 END)', 'unreadCount')
      .groupBy('email')
      .orderBy('MAX(createdAt)', 'DESC')
      .getRawMany();
  }

  async updateReadStatus(id: number, read: boolean): Promise<UserMessages> {
    await this.userMessagesRepository.update(id, { read });
    return this.userMessagesRepository.findOne({ where: { id } });
  }
}
