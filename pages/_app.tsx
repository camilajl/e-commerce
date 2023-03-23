import '../styles/globals.css'
import type { AppProps } from 'next/app'
import AppContext from '../src/context/AppContext'
import useInitialState from '../src/hooks/useInitialState'


export default function App({ Component, pageProps }: AppProps) {

  const initialState = useInitialState();

  return 
  <AppContext.Provider value={initialState}>
    <Component {...pageProps} />  
  </AppContext.Provider>
  
}

