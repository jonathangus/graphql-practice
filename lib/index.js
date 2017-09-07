const express = require('express');
const bodyParser = require('body-parser');
const { graphqlExpress } = require('apollo-server-express');
const { createServer } = require('http');
const { execute, subscribe } = require('graphql');
const { PubSub } = require('graphql-subscriptions');
const { SubscriptionServer } = require('subscriptions-transport-ws');
const UserSchema = require('./graphql/schemas/User');
const { makeExecutableSchema } = require('graphql-tools');
const { graphiqlExpress } = require('graphql-server-express');
const resolvers = require('./graphql/resolvers/resolver');

const PORT = 3000;
const app = express();

const schema = makeExecutableSchema({
    typeDefs: UserSchema,
    resolvers: resolvers.userResolver,
});


// app.use('/', (req, res) => res.json('Hej'))
app.use('/graphql', bodyParser.json(), graphqlExpress({ schema: schema }));


app.use('/graphiql', graphiqlExpress({
    endpointURL: '/graphql',
  }));


const pubsub = new PubSub();
const server = createServer(app);

server.listen(PORT, () => {
    new SubscriptionServer({
        execute,
        subscribe,
        schema: schema,
    }, {
        server: server,
        path: '/subscriptions',
    });
});
