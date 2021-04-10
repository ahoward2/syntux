import Head from "next/head";
import Navigation from "./Navigation";
import { useEffect } from "react";
import { logPageView } from "../lib/analytics";
// import  discordHook  from "../utils/discordHook";

type Props = {
  children: React.ReactNode;
};
export default function Layout({ children }: Props) {
  useEffect(() => {
    // discordHook();
    logPageView();
  }, []);

  return (
    <div className="root">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="apple-touch-icon" href="/icon.png" />
        <meta name="theme-color" content="#fff" />
      </Head>
      <header></header>
      <nav>
        <Navigation />
      </nav>
      <main>{children}</main>
      <style jsx>
        {`
          .root {
            display: block;
            padding: 4rem 0;
            box-sizing: border-box;
            height: 100%;
          }
          main {
            display: flex;
            min-height: 100%;
          }
          header {
            position: fixed;
            top: 0;
            left: 0:
            width: 100%;
            width: 100vw;
            height: 4rem;
            background: #010f34;
            display: flex;
            border-bottom: 1px solid lightgrey;
          }

          @media (min-width: 769px) {
            .root {
              display: flex;
              flex: 1 0 auto;
            }
            main {
              flex: 1 0 auto;
            }
          }
        `}
      </style>
    </div>
  );
}
