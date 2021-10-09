import IOrigin from "../IOrigin/index.i";

export default interface IResult {
    id: string;
    name: string;
    species: string;
    gender: string;
    image: string;
    origin: IOrigin;
 }

export interface IResults {
     results: [IResult]
 }