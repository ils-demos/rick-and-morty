import * as React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client"
import { CharacterDetailedGQL } from "../../components/GQL/CharacterDetailedGQL"
import ICharacterDetails, { IDimension, IEpisodes } from "./index.i";
import DetailBody from "../../components/DetailBody";
import ICDetails from "../../components/DetailBody/index.i";

type IDParams = {
    id: string;
}

interface ICharacterBasicsGQLVars {
    characterId: string;
}

function Detailed() {
    let {id} = useParams<IDParams>()
    const { loading, error, data } = useQuery<ICDetails, ICharacterBasicsGQLVars>(
        CharacterDetailedGQL,{
        variables: {
            characterId: id
          },
    })

    if(loading || data === undefined) return <p>Loading...</p>
    if(error) return <p>Error: {error}</p>

    const origin = {
        id: data.character.origin.id,
        dimension: data.character.origin.name,
        name: data.character.origin.name
    } as IDimension
    const location = {
        id: data.character.location.id,
        dimension: data.character.location.name,
        name: data.character.location.name
    } as IDimension

    var episodes: [IEpisodes] = [] as unknown as [IEpisodes]
    data.character.episode.map((v)=>{
        console.log("map: " + JSON.stringify(v))
        episodes.push(v)
    })

    const character = {
        name: data.character.name,
        status: data.character.status,
        species: data.character.species,
        type: data.character.type,
        gender: data.character.gender,
        image: data.character.image,
        origin: origin,
        location: location,
        episode: episodes,
    } as ICharacterDetails
    
    console.log("episodes: " + JSON.stringify(character.episode))
    if (character === undefined) {
        return <div>Loading</div>
    }
    return <DetailBody character={character}/>
}

export default Detailed;