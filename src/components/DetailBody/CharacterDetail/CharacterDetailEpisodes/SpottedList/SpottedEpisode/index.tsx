import * as React from "react";
import Episode from "./index.i";

export default class SpottedEpisode extends React.Component<Episode, {}>{
    constructor(props: Episode) {
        super(props)
    }

    render(){
        return(
            <div>
                <ul>
                    <li>Episode: {this.props.episode}</li>
                    <li>Title: {this.props.title}</li>
                </ul>
            </div>
        )
    }
}