import { gql } from '@apollo/client'

export const POST_OPPO = gql`
  mutation PostOppo($oppoId: String!) {
    postOppo(oppoId: $oppoId)
  }
`
