import { Document } from 'mongoose';

export interface Note extends Document {
    text: String,
    createDate: Date,
    updateDate: Date,
    id_user: String
    /*notes: [{text:String, createDate:Date, updateDate: Date}]*/
} 