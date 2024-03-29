import { Inter } from 'next/font/google'
import Head from 'next/head'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Head>
    <title>ECommercE</title>
    </Head>
     <main
      className={`mx-auto h-auto mt-32 md:w-5/6 py-24 ${inter.className}`}
    >
     <h1 className="text-3xl text-center text-orange-500 font-bold">
      About this App
    </h1>
    <div className='flex-col p-10'>
    <p className='text-xl text mt-5'> The 
    <Link href='/characters/1' className='text-fuchsia-200'> Characters</Link> page is rendered Server-Side 
    and shows a list of Rick and Morty characters. From there, you can click each 
    character to follow a Statically-Generated path, and visit Character page 
    rendering with Static-Site-Generation. I've fetched the data for these pages from a REST API.</p>
    <p className='text-xl text mt-5'>The 
    <Link href='/episodes' className='text-fuchsia-200'> Episodes</Link> page is rendered Client-Side. 
    I've used a filtered GraphQL query to fetch the data.</p>
    </div>
    </main>
    </>
   
  )
}
