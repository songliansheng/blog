// import { useQuery, gql } from "@apollo/client";

const FindallCustomer = gql`
  query Find {
    allCustomers {
      data {
        firstName
        lastName
      }
    }
  }
`;
export {FindallCustomer}