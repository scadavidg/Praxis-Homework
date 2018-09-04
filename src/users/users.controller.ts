import { Controller, Get, Post, Body, Delete, Param } from '@nestjs/common';
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

    @Delete(':id')
    delete(@Param('id') id:string){ 
        return this.usersService.delete(id);
    }
}
