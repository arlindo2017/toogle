const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String!
    firstName: String!
    lastName: String!
    email: String!
    password: String!
    isProvider: Boolean!
    # Should users have services or should they be Providers vs Users?
    services: [Service]
  }

  type Category {
    _id: ID
    categoryName: String!
  }

  type Service {
    _id: ID
    serviceName: String!
    serviceDesc: String!
    servicePrice: Float!
    serviceQty: Int!
    serviceCategory: [Category]
    serviceProviders: [User]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    service(serviceId: ID!): Service
    category(categoryId: ID!): [Service]
  }

  type Mutation {
    addUser(
      username: String!
      firstName: String!
      lastName: String!
      email: String!
      password: String!
      isProvider: Boolean!
    ): Auth
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
