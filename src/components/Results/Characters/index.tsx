import * as React from "react";
import { Link } from "react-router-dom";
import IResults from "../../GQL/CharacterBasicsGQL/interfaces/IResults/index.i";
import Loading from "../../Loading";
import BasicCharacter from "../BasicCharacter";
import ICharacters from "./index.i";

export default class Characters extends React.Component<ICharacters, {}> {
    constructor(props: ICharacters) {
        super(props)
    }

    render(){
        const isLoading = this.props ? false : true
        return(
            <Loading isLoading={isLoading}>
                {
                    this.props.characters.map((v,k)=>{
                        return <Link to={'/detailed/' + v.id}>
                            <BasicCharacter 
                                image={v.image}
                                name={v.name}
                                species={v.species}
                                origin={v.origin.dimension}
                                key={k} />
                        </Link>
                    })
                }
            </Loading>
        )
    }
}