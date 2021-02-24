import { tasks } from './sample'
import User from './models/user'
export const resolvers ={
    // Como analogia, podemos decir que este archivo funciona como los controladores de las rutas
    Query:{
        hello: ()=>{
            return 'Hello World with GraphQL'
        },
        greet(root, args){
            /*Es necesario colocar root como parametro, de otro modo no se puede acceder a 
            los argumentos*/
            return `Hello ${args['name']}`
        },
        tasks(){
            return tasks
        }
    },
    Mutation:{
        createTask(_, {input}){
            // El "_" significa que no queremos el primero parametro
            input['_id'] = tasks.length;
            tasks.push(input);
            return input
        }
    }
}