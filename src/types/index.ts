export interface RickAndMortyCharacter {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string | null; // Assuming type can be null
    gender: string;
    origin: {
      name: string;
      url: string;
    };
    location: {
      name: string;
      url: string;
    };
    image: string;
    episode: string[];
    url: string;
    created: string;
  }
  