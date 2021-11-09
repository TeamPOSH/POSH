import { gql } from "@apollo/client"

export const FETCH_USED_ITEMS = gql`
  mutation fetchUseditems($search:String){
    fetchUseditems(search:$search){
      images
    }
  }
`