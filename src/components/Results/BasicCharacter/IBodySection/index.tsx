import * as React from "react";
import IBodySection from "./index.i";

export default class BodySection extends React.Component<IBodySection, {}>{
    constructor(props: IBodySection) {
        super(props);
    }

    render() {
        return (
            <div className={
                "col "
                + "m-3 "
                + (this.props.hideMobile ? "d-sm-flex d-none " : "d-flex ")
                + (this.props.columns ? "flex-column " : "")
                + (this.props.justifyEnd ? "justify-content-end " : "")
                + "align-items-center "
                }>
                {this.props.children}
            </div>
        )
    }
}