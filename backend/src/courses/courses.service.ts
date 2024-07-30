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
    return this.coursesRepository
      .createQueryBuilder('course')
      .orderBy('course.position', 'ASC')
      .getMany();
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

  async update(id: number, course: Course): Promise<Course | null> {
    await this.coursesRepository.update(id, course);
    await this.updateAllValidCoursesPositions(course);

    return this.coursesRepository.findOne({ where: { id } });
  }

  async remove(id: number): Promise<boolean> {
    const course = await this.coursesRepository.findOne({ where: { id } });
    if (course) {
      const deleted = await this.coursesRepository.delete(id);
      if (course.valid) {
        await this.updateAllValidCoursesPositions(course);
      }
      return !!deleted.affected;
    }
    return false;
  }

  // This method updates the positions of all valid courses
  async updateAllValidCoursesPositions(updatedCourse: Course): Promise<void> {
    const validCourses = await this.findAllValid();
    const updatedCourseIndex = validCourses.findIndex(
      (course) => course.id === updatedCourse.id,
    );

    if (updatedCourseIndex !== -1) {
      validCourses.splice(updatedCourseIndex, 1);
    }

    if (updatedCourse.position === null) {
      validCourses.push(updatedCourse); // Add to the end if position is null
    } else {
      validCourses.splice(updatedCourse.position - 1, 0, updatedCourse);
    }

    for (let i = 0; i < validCourses.length; i++) {
      validCourses[i].position = i + 1;
    }

    await this.coursesRepository.save(validCourses);
  }
}
