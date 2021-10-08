import Characters from "./Characters";
// import { data } from "./data/dummy";

function Results({data}) {
    const results = data.characters.results
    return(
        <div>
            <Characters results={results} />
        </div>
    )
}

export default Results;