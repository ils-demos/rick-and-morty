export default interface ICharacterDetails{
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    image: string;
    origin: IDimension;
    location: IDimension;
    episode: [IEpisodes];
}

export interface IDimension{
    id: string;
    dimension: string;
    name: string;
}

export interface IEpisodes{
    id: string;
    episode: string;
    title: string;
}