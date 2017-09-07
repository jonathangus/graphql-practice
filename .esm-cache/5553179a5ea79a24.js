let express;_5ea‍.w('express',[["default",function(v){express=v}]]);let bodyParser;_5ea‍.w('body-parser',[["default",function(v){bodyParser=v}]]);let Apollo;_5ea‍.w('apollo-server-express',[["default",function(v){Apollo=v}]]);






//
// import { createServer } from 'http';
// import { execute, subscribe } from 'graphql';
// import { PubSub } from 'graphql-subscriptions';
// import { SubscriptionServer } from 'subscriptions-transport-ws';
// import { myGraphQLSchema } from './my-schema';
//
// const PORT = 3000;
// const app = express();
//
// app.use('/graphql', bodyParser.json(), graphqlExpress({ schema: myGraphQLSchema }));
//
// const pubsub = new PubSub();
// const server = createServer(app);
//
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