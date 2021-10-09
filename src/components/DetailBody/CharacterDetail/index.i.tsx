export default interface CharacterDetails{
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string,
    image: string,
    origin: {
        id: string;
        dimension: string;
        name: string;
    },
    location: {
        id: string;
        dimension: string;
        name: string;
    }
    episode: [
        {
            id: string;
            episode: string;
            name: string;
        }
    ]
}