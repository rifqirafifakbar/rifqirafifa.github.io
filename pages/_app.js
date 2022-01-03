import '../styles/globals.scss'
import { useEffect } from "react";
import AOS from 'aos';

// bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import 'aos/dist/aos.css'; 

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
    AOS.init();
  }, []);

  return <Component {...pageProps} />
}

export default MyApp
