import * as React from "react";
import IsLoading from "./index.i";

export default class Loading extends React.Component<IsLoading, {}>{
    constructor(props: IsLoading){
        super(props)
    }

    render(){
        if( this.props.isLoading ) {
            return <div>isLoading</div>
        }
        return this.props.children 
    }
}