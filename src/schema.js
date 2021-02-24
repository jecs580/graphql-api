import { makeExecutableSchema } from 'graphql-tools'
import { resolvers } from './resolvers'

// Como analogia, podemos decir q este archivo funciona como las rutas de la api
const typesDefs = `
    type Query{
        hello:String
        greet(name:String): String
        tasks:[Task]
    }
    type Mutation{
        createTask(input:TaskInput):Task
    }
    type Task{
        _id:ID
        title:String!
        description:String!
        number:Int
    }
    input TaskInput{
        title:String!
        description:String!
        number:Int
    }
`;

export default makeExecutableSchema({
    typeDefs:typesDefs,
    resolvers:resolvers
});