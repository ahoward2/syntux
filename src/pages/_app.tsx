import "normalize.css";
import { AppProps } from "next/app";
// NOTE: Do not move the styles dir to the src.
// They are used by the Netlify CMS preview feature.
import "../../public/styles/global.css";
import {initGA} from "../lib/analytics";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }: AppProps) {

  const [analytics, setAnalytics] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined' && !analytics) {
      initGA();
      setAnalytics(true);
    }
  }, [])

  return <Component {...pageProps} />;
}
