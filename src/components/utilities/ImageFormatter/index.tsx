import * as React from "react";
import IImageFormatter from "./index.i";

export default class ImageFormatter extends React.Component<IImageFormatter, {}> {
    constructor(props: IImageFormatter){
        super(props)
    }

    render() {
        return <img
            src={this.props.src}
            style={{maxHeight: this.props.height}}
            alt="hi"
        />
    }
}