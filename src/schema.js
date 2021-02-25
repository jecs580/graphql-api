import { makeExecutableSchema } from 'graphql-tools'
import { resolvers } from './resolvers'

// Como analogia, podemos decir q este archivo funciona como las rutas de la api
const typesDefs = `
    type Query{
        hello:String
        greet(name:String): String
        tasks:[Task]
        users:[User]
    }
    type Mutation{
        createTask(input:TaskInput):Task
        createUser(input: UserInput):User
    }
    type Task{
        _id:ID
        title:String!
        description:String!
        number:Int
    }
    type User{
        _id:ID
        firstname:String!
        lastname:String!
        age:Int
    }
    input TaskInput{
        title:String!
        description:String!
        number:Int
    }
    input UserInput {
        firstname:String!
        lastname:String
        age:Int
    }
`;

export default makeExecutableSchema({
    typeDefs:typesDefs,
    resolvers:resolvers
});