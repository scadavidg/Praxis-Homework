import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {User} from './interfaces/user.interface';
import { Model } from 'mongoose';
import {CreateUserDto} from './dto/create-user.dto'

@Injectable()
export class UsersService {
    constructor(@InjectModel('User') private readonly userModel: Model<User>){}

    async create(createUserDto : CreateUserDto): Promise<User>{
        const createdUser = new this.userModel(createUserDto)
        return await createdUser.save();
    }

    async findAll(): Promise<User[]>{
        return await this.userModel.find().exec();
    }

    async find(id:string){
        return await this.userModel.findById(id).exec();
    } 

    /*

    async createNote(id: string, createNoteDto:CreateNoteDto){
        const note = {text: createNoteDto.text, createDate: Date.now(), updateDate: Date.now()}
        return await this.userModel.update({_id: id}, {$push: { notes: note}})

    }

    async findNotes(id:string){
        return await this.userModel.findById(id).select('notes').exec();
    } */
}
