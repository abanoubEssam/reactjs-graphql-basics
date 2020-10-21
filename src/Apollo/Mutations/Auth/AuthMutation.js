import { gql } from "apollo-boost";

export const CREATE_USER = gql`
mutation CreateUser($input:UserInput) {
    createUser(input: $input) {
    _id
    email
  }
}
`;