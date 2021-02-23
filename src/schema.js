import { makeExecutableSchema } from 'graphql-tools'
import { resolvers } from './resolvers'

// Como analogia, podemos decir q este archivo funciona como las rutas de la api
const typesDefs = `
    type Query{
        hello:String
        greet(name:String): String
    }
`;

export default makeExecutableSchema({
    typeDefs:typesDefs,
    resolvers:resolvers
});