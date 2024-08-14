import { gql } from '@apollo/client'
const getPostByID = gql`
    query FindAllCustomers($slug: ID!) {
        findProductByID(id: $slug) {
            description
        }
    }
`

const FindallCustomer = gql`
    query Find {
        allCustomers {
            data {
                firstName
                lastName
            }
        }
    }
`

export { FindallCustomer, getPostByID }
