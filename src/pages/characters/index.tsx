import React from 'react'
import { GetServerSideProps } from 'next'
import { RickAndMortyCharacter } from '@/types';
import CharacterCard from '@/components/CharacterCard';
import Link from 'next/link';
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid";


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
  
  return (
    <div className="flex mt-24 flex-col items-center py-20 justify-start mx-auto">
      <h1 className='font-bold text-fuchsia-200 text-3xl'>Server Side Render</h1>
      <div className='mt-8 h-auto w-5/6 p-2 flex mx-5 justify-between'>
      <button className='flex gap-6 text-orange-500 text-2xl justify-between'>
       <ArrowLeftIcon className="h-[30px] w-[30px]"/>
      <p>Prev</p>
      </button>
      <button className='flex gap-6 text-orange-500 text-2xl justify-between'>
      <p>Next</p>
      <ArrowRightIcon className="h-[30px] w-[30px]"/>
      </button>
      </div>
          <div className='grid-container mt-10'>
          {characters.map((character: RickAndMortyCharacter) => (
            <Link key={character.id} href={`/characters/character/[id]`} as={`/characters/character/${character.id}`}>
            <CharacterCard
            character={character}
          />
            </Link>
          
        ))}
          </div>
    </div>
  )
}

export default Characters