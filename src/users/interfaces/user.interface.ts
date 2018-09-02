import { Document } from 'mongoose';

export interface User extends Document {
    name: String,
    username: String,
    notes: [{text:String, createDate:Date, updateDate: Date}]
} 