import IInfo from "../IInfo/index.i";
import IResult from "../IResults/index.i";

export default interface ICharacterBasicsGQL {
    __typename: string;
    info: IInfo;
    results: [IResult];
}

export interface ICBasicGQL {
    characters: ICharacterBasicsGQL
}