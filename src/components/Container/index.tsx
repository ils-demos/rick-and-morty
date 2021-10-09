import * as React from "react";

export default class Container extends React.Component{
    render(){
        return (
            <div className="mx-3">
                {this.props.children}
            </div>
        )
    }
}