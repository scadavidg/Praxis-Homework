import { Controller , Get, Post, Body, Param, Delete } from '@nestjs/common';
import {CreateNoteDto} from './dto/create-note.dto'
import {NotesService} from './notes.service'


@Controller('notes')
export class NotesController {

    constructor(private readonly notesService: NotesService){}

    @Post()
    create(@Body() createNoteDto:CreateNoteDto){
        return this.notesService.create(createNoteDto);
    }

    @Get()
    findAll(){
        return this.notesService.findAll() ;
    }

    @Get(':id')
    find(@Param('id') id:string){ 
        return this.notesService.find(id);
    }

    @Delete(':id')
    delete(@Param('id') id:string){ 
        return this.notesService.delete(id);
    }
}
