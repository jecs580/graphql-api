import mongoose from 'mongoose'
export async function connect(){
    try {
        await mongoose.connect('mongodb://localhost/mongodbgraphql',{
        useNewUrlParser:true,
        useUnifiedTopology: true
        });
        console.log(">>> DB esta conectada");
    } catch (error) {
        console.log(error);
    }
}
