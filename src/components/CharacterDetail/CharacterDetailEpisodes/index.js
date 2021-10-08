import CharacterDetailBody from "../CharacterDetailBody";
import SpottedList from "./SpottedList";

function CharacterDetailEpisodes({episodes}) {
    return(
        <CharacterDetailBody>
            Spotted in the following Locations
            <SpottedList episodes={episodes} />
        </CharacterDetailBody>
    )
}

export default CharacterDetailEpisodes;