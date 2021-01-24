import { gql } from '@apollo/client'

export const OPPOS_QUERY = gql`
  query GetOppos {
    opposForToday(restId: "sam") {
      objectId
      created
      discount
      startTime
      endTime
      prediction
    }
  }
`
