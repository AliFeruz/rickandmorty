import { RickAndMortyCharacter } from '@/types'
import React from 'react'

type Props = {
    character: RickAndMortyCharacter;
}


const CharacterCard = ({character}: Props) => {
  return (
    <div className="flex-col items-center border border-fuchsia-100 justify-center dark:bg-gradient-to-t dark:from-[#17065c] dark:to-fuchsia-800 p-4 shadow-text rounded-md shadow-lg">
        <div className="items-center justify-center border border-fuchsia-200 rounded-md">
        <img src={character.image} alt="charcter image" />
        </div>
      <div className="mt-4 border-t border-fuchsia-100 pt-4">
      <h1 className="text-xl text-center text-fuchsia-300 font-bold mb-2">{character.name}</h1>
      </div>
    </div>
  )
}

export default CharacterCard