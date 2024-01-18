import { GetStaticPaths, GetStaticProps } from 'next';
import React from 'react'
import { Inter } from 'next/font/google'
import { RickAndMortyCharacter } from '@/types';
import Link from 'next/link';
import { ArrowLeftIcon } from "@heroicons/react/24/solid";

const inter = Inter({ subsets: ['latin'] })


type Props = {
    character: RickAndMortyCharacter;
}


export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch("https://rickandmortyapi.com/api/character/?page=1");
  const result = await response.json();
  const characters = result.results;  
  const paths = characters.map((character:RickAndMortyCharacter) => ({
    params: { id: character.id.toString() },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<Props> =async ({params}) => {
  try {
      const id = params?.id
      const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
      const result: RickAndMortyCharacter = await response.json();

    return {
        props: {
            character: result,
        },
        revalidate: 1*60,
    };

  } catch (error) {
      return {
          notFound: true,
      };
  }
  
}

const character = ({character}: Props) => {


  return (
    <div className={`mx-auto relative h-auto mt-32 md:w-5/6 py-24 ${inter.className}`}>
      <h1 className='font-bold text-fuchsia-400 text-center text-3xl'>Static Site Generation</h1>
      <Link href='/characters' className="absolute mt-4 flex ml-4">
        <ArrowLeftIcon className="h-[30px] w-[30px] text-orange-500"/>
        <p className='text-orange-500 ml-8 text-2xl'>Back</p>
      </Link>
      <div className='flex p-8 flex-col justify-between md:w-5/6 sm:flex-row w-full mt-10'>
        <div className='items-center md:mt-8 mb-10 shadow-md p-4 bg-fuchsia-200 rounded-md'>
          <img src={character?.image} alt="image" className='w-full h-full object-cover rounded-md' />
          <div className="mt-6 pt-4">
            <h1 className="text-3xl text-center text-fuchsia-600 font-bold">{character.name}</h1>
          </div>
        </div>
        <div className='items-center mt-16'>
          <div className='flex-col justify-center items-center w-full'>
            <div className='flex justify-between p-2 gap-9'>
            <p className='text-orange-100 text-xl mt-2'>Origin:</p>
            <h1 className="text-2xl text-fuchsia-100 font-bold mt-2">{character?.origin.name}</h1>
            </div>
            <div className='flex justify-between p-2 gap-9'>
            <p className='text-orange-100 text-xl mt-2'>Species:</p>
            <p className="text-2xl text-fuchsia-100 font-bold mt-2">{character?.species}</p>
            </div>
            <div className='flex justify-between p-2 gap-9'>
            <p className='text-orange-100 text-xl mt-2'>Type:</p>
            <p className="text-2xl text-fuchsia-100 font-bold mt-2">{character?.type}</p>
            </div> 
            <div className='flex justify-between p-2 gap-9'>
            <p className='text-orange-100 text-xl mt-2'>Gender:</p>
            <p className="text-2xl text-fuchsia-100 font-bold mt-2">{character?.gender}</p>
            </div>
            <div className='flex justify-between p-2 gap-9'>
            <p className='text-orange-100 text-xl mt-2'>Location:</p>
            <p className="text-2xl text-fuchsia-100 font-bold mt-2">{character?.location.name}</p>
            </div>        
          </div>
        </div>
      L</div>
    </div>
  )
}

export default character