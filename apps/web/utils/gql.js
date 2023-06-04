import { gql} from '@apollo/client'
const getPostByID = gql`
    query FindAllCustomers($slug: ID!) {
        findProductByID(id: $slug) {
            description
        }
    }
`
export { getPostByID }
