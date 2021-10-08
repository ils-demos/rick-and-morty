import ImageFormatter from "../../utilities/ImageFormatter";
import Body from "./Body";
import rightArrow from '../../../assets/images/right-arrow.png'
import BodySection from "./BodySection";

function BasicCharacter({character}) {
    console.log("BasicCharacter: character: " + JSON.stringify(character))
    return(
        <Body>
            <BodySection>
                <ImageFormatter src={character.image} height="112px" />
            </BodySection>
            <BodySection columns>
                <h3>{character.name}</h3>
                <p>Species: {character.species}</p>
                <p>Dimension: {character.origin.dimension}</p>
            </BodySection>
            <BodySection hideMobile justifyEnd>
                <ImageFormatter src={rightArrow} height="112px" />
            </BodySection>
        </Body>
    )
}

export default BasicCharacter;