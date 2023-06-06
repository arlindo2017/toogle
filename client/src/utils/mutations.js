import { gql } from '@apollo/client';

//tested 6/2 - working
export const ADD_USER = gql`
  mutation addUser($firstName: String!, $lastName: String!, $email: String!, $password: String!) {
  addUser(firstName: $firstName, lastName: $lastName, email: $email, password: $password) {
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

//tested 6/5 - working
export const DELETE_USER = gql`
  mutation deleteUser($id: ID!) {
  deleteUser(_id: $id) {
    _id
  }
}
`;

//tested 6/5 - working
export const UPDATE_PW = gql`
  mutation updatePassword($id: ID!, $password: String!, $newPassword: String!) {
  updatePassword(_id: $id, password: $password, newPassword: $newPassword) {
    _id
    email
  }
}
`;