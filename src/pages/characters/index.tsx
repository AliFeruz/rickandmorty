import React from 'react'
import { GetServerSideProps } from 'next'
import { RickAndMortyCharacter } from '@/types';
import CharacterCard from '@/components/CharacterCard';


export const getServerSideProps: GetServerSideProps<Props> = async () => {
    try {
        const response = await fetch("https://rickandmortyapi.com/api/character/?page=1");
        const results = await response.json();
  
        return {
            props: {
                characters: results.results,
                info: results.info,
            },
        };
    } catch (error) {
        return {
            notFound: true,
        };
    }
  };


type Props = {
    characters: RickAndMortyCharacter[];
    info: object;
}

const Characters = ({characters, info}: Props) => {
  console.log(info)
  
  return (
    <div className="flex mt-24 flex-col items-center py-20 justify-start mx-10">
      <h1 className='font-bold text-fuchsia-400 text-2xl'>Server Side Render</h1>
          <div className='grid-container mt-10'>
          {characters.map((character: RickAndMortyCharacter) => (
          <CharacterCard
            key={character.id}
            character={character}
          />
        ))}
          </div>
    </div>
  )
}

export default Characters