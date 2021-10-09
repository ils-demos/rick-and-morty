import * as React from "react";
import CharacterDetailBody from "../CharacterDetailBody";
import Episodes from "./index.i";
import SpottedList from "./SpottedList";

export default class CharacterDetailEpisodes extends React.Component<Episodes, {}>{
    constructor(props: Episodes) {
        super(props)
    }
    render(){
        console.log("CharacterDetailEpisodes: props: " + JSON.stringify(this.props))
        return(
            <CharacterDetailBody column={false}>
                Spotted in the following Locations
                <SpottedList episodes={this.props.episodes} />
            </CharacterDetailBody>
        )
    }
}