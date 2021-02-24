import express from 'express';
import {graphqlHTTP} from 'express-graphql';
import schema from './schema'
import { connect } from './database'
const app = express();

connect();

app.use('/graphql', 
graphqlHTTP({
    graphiql: true,
    schema:schema,
    context:{
        // Context sirve para pasar cosas a los resolvers, algo general
        message:'Mensaje Global'
    }
}));

app.listen(5000,()=>console.log("Servidor en puerto 5000"));