import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex h-screen flex-col p-10 ${inter.className}`}
    >
     <h1 className="text-3xl text-center text-blue-600 font-bold underline">
      About this App
    </h1>
    <div className='flex-col p-10 mt-10'>
    <p className='text-xl text-violet-200 mt-5'> The Characters page is rendered Server-Side and shows a list of Rick and Morty characters. From there, you can click each character to follow a Statically-Generated path, and visit Character page rendering with Static-Site-Generation. I've fetched the data for these pages from a REST API.</p>
    <p className='text-xl text-violet-200 mt-5'>The Episodes page is rendered Client-Side. I've used a filtered GraphQL query to fetch the data. Here is a good article to help you use Graph QL together with the Fetch API.</p>
    </div>
    </main>
  )
}
