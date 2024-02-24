import React from 'react'
import { gql, useQuery } from '@apollo/client'

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
  const { loading, error, data } = useQuery(Get_Episodes);
  console.log(data)
  
  return (
    <div className="flex mt-24 px-3 flex-col items-center py-20 mx-auto">
      <h1 className='font-bold text-fuchsia-200 text-3xl'>Client Side Render with GraphQL</h1>
      <div className='mt-8 h-auto w-5/6 p-2 flex mx-5 justify-between'>
        <h1 className='text-2xl text-center text-fuchsia-100'>This page is under construction work</h1>
      </div>
    </div>
  )
}

export default Characters