import { Link } from "react-router-dom";
import Loading from "../../Loading";
import BasicCharacter from "../BasicCharacter";

function Characters({results}) {

    const isLoading = results ? false : true

    return(
        <Loading isLoading={isLoading}>
            {
                results.map((v,k)=>{
                    return <Link to={'/detailed/' + v.id}>
                        <BasicCharacter character={v} key={k} />
                    </Link>
                })
            }
            hello
        </Loading>
    )
}

export default Characters;