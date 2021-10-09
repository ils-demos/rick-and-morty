import * as React from "react";
import CharacterDetailBody from "../CharacterDetailBody";
import Locations from "./index.i";

export default class CharacterDetailLocation extends React.Component<Locations, {}> {
    constructor(props: Locations) {
        super(props)
    }

    render() {
        return(
            <CharacterDetailBody column>
                <h2>Location</h2>
                <p>Dimension: {this.props.curr_dimension}</p>
                <p>Origin: {this.props.origin_dimension}</p>
            </CharacterDetailBody>
        )
    }
}