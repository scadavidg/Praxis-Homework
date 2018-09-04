import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {Note} from './interfaces/note.interface';
import {CreateNoteDto} from './dto/create-note.dto'

@Injectable()
export class NotesService {

    constructor(@InjectModel('Note') private readonly noteModel: Model<Note>){}

    async create(createNoteDto : CreateNoteDto): Promise<Note>{
        const createdNote = new this.noteModel(createNoteDto)
        return await createdNote.save();
    }

    async findAll(): Promise<Note[]>{
        return await this.noteModel.find().exec();
    }

    async find(id:string){
        return await this.noteModel.findById(id).exec();
    } 

    async delete(id:string){
        return await this.noteModel.findByIdAndRemove(id);
    } 
    
}
