import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { Note } from './entities/note.entity';
import { CreateNoteDto } from './dto/createNote.dto';
import { UpdateNoteDto } from './dto/updateNote.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/notes')
  getAllNotes(): Promise<Note[]> {
    return this.appService.getAllNotes();
  }
  
  @Post('/notes')
  createNote(
    @Body() createNoteDto: CreateNoteDto
  ): Promise<void> {
    return this.appService.createNote(createNoteDto);
  }

  @Delete('/notes/:noteId')
  deleteNote(
    @Param('noteId') noteId: string
  ): Promise<void> {
    return this.appService.deleteNote(String(noteId));
  }

  @Patch('/notes/:noteId')
  updateNote(
    @Param('noteId') noteId: string,
    @Body() updateNoteDto: UpdateNoteDto
  ): Promise<void> {
    return this.appService.updateNote(String(noteId), updateNoteDto);
  }
}
