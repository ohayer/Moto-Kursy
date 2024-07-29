import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  UseGuards,
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
  update(@Param('id') id: string, @Body() course: Course): Promise<void> {
    return this.coursesService.update(+id, course);
  }

  @UseGuards(AuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.coursesService.remove(+id);
  }
}
