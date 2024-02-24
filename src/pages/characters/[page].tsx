import React from 'react'
import { GetServerSideProps } from 'next'
import { RickAndMortyCharacter } from '@/types';
import CharacterCard from '@/components/CharacterCard';
import Link from 'next/link';
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid";
import { useRouter } from 'next/router';


export const getServerSideProps: GetServerSideProps<Props> = async (context) => {
    try {
        const page = context.params?.page || 1;
        const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}`);
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

  interface Info {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  }
  
type Props = {
    characters: RickAndMortyCharacter[];
    info: Info;
}

const Characters = ({characters, info}: Props) => {
  const router = useRouter();
  const currentPage = parseInt(router.query.page as string) || 1;

  const handlePagination = (page: number) => {
    router.push(`/characters/${page}`);
  };
  console.log(info)
  return (
    <div className="flex mt-24 flex-col items-center py-20 justify-start mx-auto">
      <h1 className='font-bold text-fuchsia-200 text-3xl'>Server Side Render</h1>
      <div className='mt-8 h-auto w-5/6 p-2 flex mx-5 justify-between'>
      <button className='flex gap-6 text-orange-500 text-2xl justify-between'
      onClick={() => handlePagination(currentPage - 1)}
      disabled={currentPage === 1}>
       <ArrowLeftIcon className="h-[30px] w-[30px]"/>
      <p>Prev</p>
      </button>
      <button className='flex gap-6 text-orange-500 text-2xl justify-between'
      onClick={() => handlePagination(currentPage + 1)}
      disabled={currentPage >= info.pages}>
      <p>Next</p>
      <ArrowRightIcon className="h-[30px] w-[30px]"/>
      </button>
      </div>
          <div className='grid-container mt-10'>
          {characters.map((character: RickAndMortyCharacter) => (
            <Link key={character.id} href={`/character/[id]`} as={`/character/${character.id}`}>
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