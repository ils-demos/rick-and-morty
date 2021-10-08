import CharacterDetailBody from "../CharacterDetailBody";

function CharacterDetailLocation({location, origin}) {
    return(
        <CharacterDetailBody column>
            <h2>Location</h2>
            <p>Dimension: {location.dimension}</p>
            <p>Origin: {origin.dimension}</p>
        </CharacterDetailBody>
    )
}

export default CharacterDetailLocation;