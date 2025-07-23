import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateNoteDto } from './dto/createNoteDto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('/notes')
  createNote(
    @Body() createNoteDto: CreateNoteDto
  ): Promise<void> {
    return this.appService.createNote(createNoteDto.name, createNoteDto.content);
  }
}
