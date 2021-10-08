import { useQuery } from '@apollo/client'
import { CharacterBasicsGQL } from '../../components/GQL/CharacterBasicsGQL'
import Results from '../../components/Results'


function Home() {
  const { loading, error, data } = useQuery(CharacterBasicsGQL,{
    charactersFilter: 
      {
        name: "rick"
      }
  })

  if(loading) return <p>Loading...</p>
  if(error) return <p>Error: {error}</p>
  return(
    <div>
      <Results data={data}/>
    </div>
  )
}

export default Home;