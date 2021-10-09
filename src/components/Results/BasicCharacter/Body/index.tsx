import * as React from "react";

export default class Body extends React.Component{
    render() {
        return (
            <div className="
                    m-3
                    d-flex
                    flex-sm-row flex-column
                    align-sm-items-start align-items-center
                    border
                "
                >
                {this.props.children}
            </div>
        )
    }
}