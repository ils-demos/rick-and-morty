import * as React from "react";
import Episodes from "../index.i";
import SpottedEpisode from "./SpottedEpisode";

export default class SpottedList extends React.Component<Episodes, {}> {
    constructor(props: Episodes) {
        super(props)
    }

    render() {
        return (
            <div>
                {
                    this.props.episodes.map((v, k)=>{
                        return <SpottedEpisode
                            episode={v.episode}
                            title={v.title}
                            key={k}
                        />
                    })
                }
            </div>
        )
    }
}