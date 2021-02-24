import mongoose, { model, Schema } from 'mongoose'

const userSchema = new Schema({
    firstname:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
    },
    age:{
        type:Number
    }
})

export default model('User',userSchema);