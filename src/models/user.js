import mongoose, { model, Schema } from 'mongoose'

const userSchema = new Schema({
    firstname:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
    },
    age:{
        type:Number
    }
})

export default model('User',userSchema);