import type { AppProps } from 'next/app';
import { Provider } from "react-redux";
import store from "../state-management/store";
import { Montserrat } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.min.css';
import '@/styles/globals.css';
// import "~slick-carousel/slick/slick.css"; 
// import "~slick-carousel/slick/slick-theme.css";

const fontFace = Montserrat({ subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <main className={fontFace.className}>
        <Component {...pageProps} />
      </main>
    </Provider>
  );
}
