const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String!
    firstName: String!
    lastName: String!
    email: String!
    password: String!
    isProvider: Boolean!
    #services: [Service]
  }

  type Category {
    _id: ID
    categoryName: String!
    #services: [Service]
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

  input CategoryInput {
    categoryName: String!
  }

  type Query {
    categories: [Category]
    services(category: ID, name: String): [Service]
    service(serviceId: ID!): Service
    order(_id: ID!): Order
    orders: [Order]
    me: User
  }

  type Order {
    _id: ID
    orderDate: String
    services: [Service]
    user: User
    provider: User
    orderPrice: Float!
  }

  type Mutation {
    addUser(
      username: String!
      firstName: String!
      lastName: String!
      email: String!
      password: String!
      isProvider: Boolean
    ): Auth
    addOrder(services: [ID]!): Service
    addService(
      serviceName: String!
      serviceDesc: String!
      servicePrice: Float!
      serviceQty: Int!
      serviceCategory: String
      serviceProviders: [String]
    ): Service
    login(email: String!, password: String!): Auth
    updateService(_id: ID!, quantity: Int!): Service
    addCategory(categoryName: String!): Category
  }
`;

module.exports = typeDefs;
