import { gql } from "@apollo/client";

export const CharacterDetailedGQL = gql`
    query Character($characterId: ID!)  {
        character(id: $characterId) {
            id
            name
            status
            species
            type
            gender
            image
            location {
                dimension
                id
            }
            origin {
                id
                dimension
            }
            episode {
                id
                name
                episode
            }
        }
    }
`