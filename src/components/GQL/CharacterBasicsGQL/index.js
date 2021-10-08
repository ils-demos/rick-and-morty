import { gql } from "@apollo/client";

export const CharacterBasicsGQL = gql`
    query Characters($charactersFilter: FilterCharacter)  {
        characters(filter: $charactersFilter) {
            info {
                count
                pages
                next
                prev
            }
            results {
                id
                name
                species
                gender
                image
                origin {
                    dimension
                }
            }
        }
    }
`