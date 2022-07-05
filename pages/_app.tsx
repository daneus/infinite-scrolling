import type { AppProps } from 'next/app';
import '../styles/index.scss';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps}></Component>;
};

export default MyApp;
