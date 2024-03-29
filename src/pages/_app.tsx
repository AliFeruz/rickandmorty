import NavBar from '@/components/NavBar'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  cache: new InMemoryCache(),
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <ApolloProvider client={client}>
      <NavBar />
      <Component {...pageProps} />
    </ApolloProvider>
    </>
  
  )
}
