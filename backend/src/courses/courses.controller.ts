import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  UseGuards,
  NotFoundException,
} from '@nestjs/common';
import { CoursesService } from './courses.service';
import { Course } from './course.entity';
import { AuthGuard } from '../auth/auth.guard';

@Controller('courses')
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {}

  @UseGuards(AuthGuard)
  @Get()
  findAll(): Promise<Course[]> {
    return this.coursesService.findAll();
  }

  @Get('valid')
  findAllValid(): Promise<Course[]> {
    return this.coursesService.findAllValid();
  }

  @UseGuards(AuthGuard)
  @Post()
  create(@Body() course: Course): Promise<Course> {
    return this.coursesService.create(course);
  }

  @UseGuards(AuthGuard)
  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() course: Course,
  ): Promise<Course> {
    const updatedCourse = await this.coursesService.update(+id, course);
    if (!updatedCourse) {
      throw new NotFoundException(`Course with ID ${id} not found`);
    }
    return updatedCourse;
  }

  @UseGuards(AuthGuard)
  @Delete(':id')
  async remove(@Param('id') id: number): Promise<boolean> {
    const result = await this.coursesService.remove(+id);
    if (!result) {
      throw new NotFoundException(`Course with ID ${id} not found`);
    }
    return result;
  }
}
