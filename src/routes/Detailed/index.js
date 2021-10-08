import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client"
import { CharacterDetailedGQL } from "../../components/GQL/CharacterDetailedGQL"
import DetailBody from "../../components/DetailBody";

function cleanup(data){
    return data.character
}

function Detailed() {
    let {id} = useParams()
    const { loading, error, data } = useQuery(CharacterDetailedGQL,{
        variables: {
            characterId: id
          },
    })

    if(loading) return <p>Loading...</p>
    if(error) return <p>Error: {error}</p>
    return <DetailBody data={cleanup(data)} />
}

export default Detailed;