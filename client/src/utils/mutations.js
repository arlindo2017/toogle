import { gql } from '@apollo/client';

//tested 6/2 - working
export const ADD_USER = gql`
  mutation addUser($username: String!, $firstName: String!, $lastName: String!, $email: String!, $password: String!) {
  addUser(username: $username, firstName: $firstName, lastName: $lastName, email: $email, password: $password) {
    user {
      email
      firstName
      isProvider
    }
    token
  }
}
`;

//tested 6/2 - working
export const LOGIN = gql`
  mutation Login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
  }
}
`;