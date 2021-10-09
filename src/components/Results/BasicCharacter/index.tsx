import * as React from "react";
import IBasicCharacter from "./index.i";
import ImageFormatter from "../../utilities/ImageFormatter";
import Body from "./Body";
import rightArrow from '../../../assets/images/right-arrow.png'
import BodySection from "./IBodySection";

export default class BasicCharacter extends React.Component<IBasicCharacter, {}> {
    constructor(props: IBasicCharacter){
        super(props)
    }
    
    render() {
        return(
            <Body>
                <BodySection>
                    <ImageFormatter src={this.props.image} height="112px" />
                </BodySection>
                <BodySection columns>
                    <h3>{this.props.name}</h3>
                    <p>Species: {this.props.species}</p>
                    <p>Dimension: {this.props.origin}</p>
                </BodySection>
                <BodySection hideMobile justifyEnd>
                    <ImageFormatter src={rightArrow} height="112px" />
                </BodySection>
            </Body>
        )
    }
}