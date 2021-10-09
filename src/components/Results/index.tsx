import * as React from "react";
import { IResults } from "../GQL/CharacterBasicsGQL/interfaces/IResults/index.i";
import Characters from "./Characters";

export default class Results extends React.Component<IResults>{
    constructor(props: IResults) {
        super(props)
    }
    
    render(){
        console.log("Results: props:")
        return(
            <div>
                <Characters characters={this.props.results} />
            </div>
        )
    }
}