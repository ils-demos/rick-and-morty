import * as React from "react";
import ICDetails from "../index.i";
import CharacterDetailBasics from "./CharacterDetailBasics";
import CharacterDetailEpisodes from "./CharacterDetailEpisodes";
import CharacterDetailLocation from "./CharacterDetailLocation";

export default class CharacterDetailed extends React.Component<ICDetails, {}> {
    constructor(props: ICDetails) {
        super(props)
    }

    render(){
        return (
            <div>
                <CharacterDetailBasics 
                    image={this.props.character.image}
                    name={this.props.character.name}
                    species={this.props.character.species}
                    type={this.props.character.type}
                    gender={this.props.character.gender}
                    />
                <CharacterDetailLocation
                    curr_dimension={this.props.character.location.dimension}
                    origin_dimension={this.props.character.origin.dimension}
                    />
                <CharacterDetailEpisodes
                    episodes={this.props.character.episode}
                    />
            </div>
        )
    }
}