import CharacterDetailBody from "../../CharacterDetailBody";
import SpottedEpisode from "./SpottedEpisode";

function SpottedList({episodes}) {
    return (
        <div>
            {
                episodes.map((v, k)=>{
                    return <SpottedEpisode episode={v} key={k} />
                })
            }
        </div>
    )
}

export default SpottedList;