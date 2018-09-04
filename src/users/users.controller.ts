import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import {CreateUserDto} from './dto/create-user.dto'

import {UsersService} from './users.service'

@Controller('users')
export class UsersController {

    constructor(private readonly usersService: UsersService){}

    @Post()
    create(@Body() createUserDto:CreateUserDto){
        return this.usersService.create(createUserDto);
    }

    @Get()
    findAll(){
        return this.usersService.findAll() ;
    }

    @Get(':id')
    find(@Param('id') id:string){ 
        return this.usersService.find(id);
    }
/*
    @Post(':id/notes')
    createNote(@Body() createNoteDto:CreateNoteDto, @Param('id') id:string){

        return this.usersService.createNote(id,createNoteDto)

    }

    @Get(':id/notes')
    findNotes(@Param('id') id:string){ 
        return this.usersService.findNotes(id);
    }
   */
}
