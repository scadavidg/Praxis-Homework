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

    async delete(id:string){
        return await this.userModel.findByIdAndRemove(id);
    } 

    async update(id:string, params:object){
        return await this.userModel.findByIdAndUpdate(id,params,{new: true})
     }

}
