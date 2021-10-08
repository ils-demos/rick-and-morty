import CharacterDetailBasics from "./CharacterDetailBasics";
import CharacterDetailEpisodes from "./CharacterDetailEpisodes";
import CharacterDetailLocation from "./CharacterDetailLocation";

function CharacterDetailed({data}) {
    return (
        <div>
            <CharacterDetailBasics data={data} />
            <CharacterDetailLocation location={data.location} origin={data.origin} />
            <CharacterDetailEpisodes episodes={data.episode} />
        </div>
    )
}

export default CharacterDetailed;