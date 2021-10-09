import * as React from "react";
import CharacterDetailBody from "../CharacterDetailBody";
import CharacterBasics from "./index.i";

export default class CharacterDetailBasics extends React.Component<CharacterBasics, {}> {
    constructor(props: CharacterBasics) {
        super(props);
    }

    render(){
        return(
            <CharacterDetailBody column={false}>
                <div className="col-4">
                    <img src={this.props.image} alt="alt" />
                </div>
                <div className="col-8">
                    <h2>{this.props.name}</h2>
                    <p>Species: {this.props.species}</p>
                    <p>Type: {this.props.type}</p>
                    <p>Gender: {this.props.gender}</p>
                </div>
            </CharacterDetailBody>
        )
    }
}