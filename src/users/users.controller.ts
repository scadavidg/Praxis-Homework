import { Controller, Get, Post, Body, Delete, Param, Put } from '@nestjs/common';
import {CreateUserDto} from './dto/create-user.dto'
import { ApiResponse, ApiOperation, ApiImplicitBody } from '@nestjs/swagger';

import {UsersService} from './users.service'

@Controller('users')
export class UsersController {

    constructor(public readonly usersService: UsersService){}

    @ApiResponse({ status: 201, description: 'The record has been successfully created.'})
    @ApiOperation({title: "Creates a user"})
    @Post()
    create(@Body() createUserDto:CreateUserDto){
        return this.usersService.create(createUserDto);
    }

    @ApiResponse({ status: 200, description: 'Successful response'})
    @ApiOperation({title: "Get all users"})
    @Get()
    findAll(){
        return this.usersService.findAll() ;
    }

    @ApiResponse({ status: 200, description: 'Successful response'})
    @ApiOperation({title: "Get specific user"})
    @ApiImplicitBody({ name: "id", required: true, type: String, description: "id of the user to retrieve" })
    @Get(':id')
    find(@Param('id') id:string){ 
        return this.usersService.find(id);
    }

    @ApiResponse({ status: 200, description: 'successfully deleted'})
    @ApiOperation({title: "Delete a user"})
    @ApiImplicitBody({ name: "id", required: true, type: String, description: "id of the user to delete" })
    @Delete(':id')
    delete(@Param('id') id:string){ 
        return this.usersService.delete(id);
    }

    @ApiResponse({ status: 200, description: 'successfully updated'})
    @ApiOperation({title: "Update a user"})
    @ApiImplicitBody({ name: "id", required: true, type: String, description: "id of the user to update" })
    @Put(':id')
    update(@Param('id') id:string, @Body() updatedUser:CreateUserDto ){
        return this.usersService.update(id, updatedUser);
    }
}
