import * as mongoose from 'mongoose';


export const UserSchema = new mongoose.Schema({
    name: String,
    username: String,
    /*notes: [{text:String, createDate:Date, updateDate: Date}]*/
})  