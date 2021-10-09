import * as React from "react";
import CharacterDetailed from "./CharacterDetail";
import ICDetails from "./index.i";


export default class DetailBody extends React.Component<ICDetails, {}> {
    constructor(props: ICDetails) {
        super(props)
    }

    render(){
        return (
            <div>
                <h1> Details page for Rick and Morty Characters</h1>
                <CharacterDetailed character={this.props.character} />
            </div>
        )
    }
}