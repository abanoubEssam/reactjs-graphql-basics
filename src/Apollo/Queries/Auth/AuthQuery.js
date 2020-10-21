import { gql } from "apollo-boost";

export const LOGIN_QUERY = gql`
query Login($input:UserInput) {
    login(input: $input) {
    token
    user{
      _id
      email
    }
    tokenExpiration
  }
}
`;