"use script";// import express from 'express';
// import bodyParser from 'body-parser';


const { graphqlExpress } = require('apollo-server-express')


// import { graphqlExpress } from 'apollo-server-express';
// import { createServer } from 'http';
// import { execute, subscribe } from 'graphql';
// import { PubSub } from 'graphql-subscriptions';
// import { SubscriptionServer } from 'subscriptions-transport-ws';
// import { userSchema } from './graphql/schemas/User';
// import { makeExecutableSchema } from 'graph-tools'
// import resolvers from './resolvers/resolver'

// const PORT = 3000;
// const app = express();


// console.log({
//     userSchema, res: resolvers.userResolver
// })

// const mergedUserSchema = makeExecutableSchema({
//     typeDefs: userSchema,
//     resolver : resolvers.userResolver
// })




// app.use('/', (req, res) => res.json('Hej'))
// app.use('/graphql', bodyParser.json(), graphqlExpress({ schema: myGraphQLSchema }));

// const pubsub = new PubSub();
// const server = createServer(app);

// server.listen(PORT, () => {
//     new SubscriptionServer({
//         execute,
//         subscribe,
//         schema: myGraphQLSchema,
//     }, {
//         server: server,
//         path: '/subscriptions',
//     });
// });
