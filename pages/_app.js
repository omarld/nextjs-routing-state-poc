import '../styles/globals.css';
import { AppProvider } from './store/appContext';

function MyApp({ Component, pageProps }) {
  return <AppProvider>
    <Component {...pageProps} />
   </AppProvider>
}

export default MyApp
