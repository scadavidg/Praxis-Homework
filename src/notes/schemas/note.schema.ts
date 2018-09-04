import * as mongoose from 'mongoose';


export const NoteSchema = new mongoose.Schema({
    text: String,
    createDate: Date,
    updateDate: Date,
    id_user: String
    /*notes: [{text:String, createDate:Date, updateDate: Date}]*/
})  