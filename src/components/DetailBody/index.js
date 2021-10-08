import CharacterDetailed from "../CharacterDetail";

function DetailBody({data}) {
    return (
        <div>
            <h1> Details page for Rick and Morty Characters</h1>
            <CharacterDetailed data={data} />
        </div>
    )
}

export default DetailBody;  