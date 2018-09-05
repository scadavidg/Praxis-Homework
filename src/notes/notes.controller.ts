import { Controller , Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import {CreateNoteDto} from './dto/create-note.dto'
import {NotesService} from './notes.service'
import { ApiResponse, ApiOperation, ApiImplicitBody } from '@nestjs/swagger';


@Controller('notes')
export class NotesController {

    constructor(private readonly notesService: NotesService){}

    @ApiResponse({ status: 201, description: 'The record has been successfully created.'})
    @ApiOperation({title: "Creates a note"})
    @Post()
    create(@Body() createNoteDto:CreateNoteDto){
        return this.notesService.create(createNoteDto);
    }

    @ApiResponse({ status: 200, description: 'Successful response'})
    @ApiOperation({title: "Get all notes"})
    @Get()
    findAll(){
        return this.notesService.findAll() ;
    }

    @ApiResponse({ status: 200, description: 'Successful response'})
    @ApiOperation({title: "Get specific note"})
    @ApiImplicitBody({ name: "id", required: true, type: String, description: "id of the note to retrieve" })
    @Get(':id')
    find(@Param('id') id:string){ 
        return this.notesService.find(id);
    }

    @ApiResponse({ status: 200, description: 'successfully deleted'})
    @ApiOperation({title: "Delete a note"})
    @ApiImplicitBody({ name: "id", required: true, type: String, description: "id of the note to delete" })
    @Delete(':id')
    delete(@Param('id') id:string){ 
        return this.notesService.delete(id);
    }

    @ApiResponse({ status: 200, description: 'successfully updated'})
    @ApiOperation({title: "Update a note"})
    @ApiImplicitBody({ name: "id", required: true, type: String, description: "id of the note to update" })
    @Put(':id')
    update(@Param('id') id:string, @Body() updatedNote:CreateNoteDto ){
        return this.notesService.update(id, updatedNote);
    }
} 
