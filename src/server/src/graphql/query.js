import {gql } from '@apollo/client'
const GET_DATA=gql`
query GetData($id:String!){
    getData(id:$id)
}
`;
export default GET_DATA;