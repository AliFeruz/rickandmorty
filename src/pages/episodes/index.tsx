import React from 'react'
import { gql, useQuery } from '@apollo/client'
import { EpisodeData } from '@/types';
import Image from 'next/image';

const Get_Episodes = gql`
query GetEpisodes {
  episodes{
    results{
      name
      characters{
        image
      }
    }
  }
}
`

const Characters = () => {
  const { loading, error, data } = useQuery<EpisodeData>(Get_Episodes);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  
  return (
    <div className="flex mt-24 px-3 flex-col items-center py-20 mx-auto">
      <h1 className="font-bold text-fuchsia-200 text-3xl">Client Side Render with GraphQL</h1>
      <div className="mt-8 w-full max-w-xl mx-auto">
        {data?.episodes.results.map((episode, index) => (
          <div key={index} className="mb-8 p-6 border border-gray-300
          rounded-md shadow-fuchsia-100 shadow-xl">
            <h2 className="text-center mt-2 text-xl text-orange-500/95">Episode:
            <span className='underline text-2xl  font-bold underline-offset-8 text-fuchsia-100 ml-4'>
            {episode.name}</span></h2>
            <div className="grid grid-cols-3 gap-4 mt-4">
              {episode.characters.map((character, index) => (
                <div key={index} className='flex justify-center mt-3 p-2'>
                   <Image  src={character.image} alt="Character" 
                className="rounded-full" width={62} height={62} priority/>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Characters