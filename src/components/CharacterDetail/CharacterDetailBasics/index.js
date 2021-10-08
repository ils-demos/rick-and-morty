import CharacterDetailBody from "../CharacterDetailBody";

function CharacterDetailBasics({data}) {
    return(
        <CharacterDetailBody>
            <div className="col-4">
                <img src={data.image} alt="alt" />
            </div>
            <div className="col-8">
                <h2>{data.name}</h2>
                <p>Status: {data.status}</p>
                <p>Species: {data.species}</p>
                <p>Type: {data.type}</p>
                <p>Gender: {data.gender}</p>
                <p>Status: {data.status}</p>
            </div>
        </CharacterDetailBody>
    )
}

export default CharacterDetailBasics;