import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Course } from './course.entity';

@Injectable()
export class CoursesService {
  constructor(
    @InjectRepository(Course)
    private coursesRepository: Repository<Course>,
  ) {}

  findAll(): Promise<Course[]> {
    return this.coursesRepository.find();
  }

  findAllValid(): Promise<Course[]> {
    return this.coursesRepository
      .createQueryBuilder('course')
      .where('course.valid = :valid', { valid: true })
      .orderBy('course.position', 'ASC')
      .getMany();
  }

  async create(course: Course): Promise<Course> {
    return this.coursesRepository.save(course);
  }

  async update(id: number, course: Course): Promise<void> {
    await this.coursesRepository.update(id, course);
  }

  async remove(id: number): Promise<void> {
    await this.coursesRepository.delete(id);
  }
}
