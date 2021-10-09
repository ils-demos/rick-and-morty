import * as React from 'react'
import { useQuery } from '@apollo/client'
import { CharacterBasicsGQL } from '../../components/GQL/CharacterBasicsGQL'
import Results from '../../components/Results'
import { ICBasicGQL } from '../../components/GQL/CharacterBasicsGQL/interfaces/ICharacterBasicsGQL/index.i'
import IResult from '../../components/GQL/CharacterBasicsGQL/interfaces/IResults/index.i'

interface ICharacterBasicsGQLVars {
  name: string;
}

export default function Home() {
  const { data, loading, error } = useQuery<ICBasicGQL, ICharacterBasicsGQLVars>(
    CharacterBasicsGQL,
    { variables: { name: "rick" } }
  )
  if(loading || data === undefined) return <p>Loading...</p>
  if(error) return <p>Error: {error}</p>
  
  
  var results: [IResult]
  
  if (data && data.characters) {
    const characters = data.characters
    const results = characters.results
    console.log("Home: results: " + JSON.stringify(results))
  }

  return(
    <div>
      { data && data.characters.results ? <Results results={data.characters.results}/> : "" }
    </div>
  )
}