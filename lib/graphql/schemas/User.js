
const User = `
    input PersonInput {
        id: Int!
    }

    type PersonResult {
        name: String!
    }
    
    
    type Query {
        getUser(id: Int!): PersonResult
    }
`;


module.exports = User;