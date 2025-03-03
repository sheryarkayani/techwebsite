// import { AppProps } from 'next/app'
// import App from '../App'

// function MyApp({ Component, pageProps }: AppProps) {
//   return <App />
// }

// export default MyApp
// pages/_app.tsx
// pages/_app.tsx
import { AppProps } from 'next/app';
import App from '../App';
import '../../app/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <App>
      <Component {...pageProps} />
    </App>
  );
}

export default MyApp;

