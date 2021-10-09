import * as React from "react";
import Body from "./index.i";

export default class CharacterDetailBody extends React.Component<Body, {}> {
    constructor(props: Body){
        super(props)
    }

    render() {
        return (
            <div className={
                "mb-3 "
                + "p-3 "
                + "d-flex "
                + (this.props.column ? "flex-column " : "")
                + "border"
                }>
                {this.props.children}
            </div>
        )
    }
}