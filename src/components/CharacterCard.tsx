import { RickAndMortyCharacter } from '@/types'
import Image from 'next/image';
import React from 'react'

type Props = {
    character: RickAndMortyCharacter;
}


const CharacterCard = ({character}: Props) => {
  return (
    <div className="flex-col mx-3 items-center border border-orange-400 justify-center dark:bg-gradient-to-t dark:from-[#1c047e] dark:to-fuchsia-800 p-4 shadow-text rounded-md shadow-lg">
        <div className="items-center justify-center rounded-md">
        <Image src={character.image} className="w-auto h-auto" alt="character image" />
        </div>
      <div className="mt-4 border-t border-orange-500 pt-4">
      <h1 className="text-xl text-center text-orange-400 font-bold mb-2">{character.name}</h1>
      </div>
    </div>
  )
}

export default CharacterCard