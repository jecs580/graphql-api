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
        }
    }
}