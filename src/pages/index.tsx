import Layout from "../components/Layout";
import BasicMeta from "../components/meta/BasicMeta";
import OpenGraphMeta from "../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../components/meta/TwitterCardMeta";
import PlanetOrb from "../components/planetOrb";
import Button from "../components/Button";
import Particles from "react-particles-js";
import Callout from "../components/Callout/Callout";
import Link from "next/link";

export default function Index() {
  return (
    <Layout>
      <BasicMeta url={"/"} />
      <OpenGraphMeta url={"/"} />
      <TwitterCardMeta url={"/"} />

      <div className="container">
        <h3>🏠 Home</h3>
        {/* <div className="graphic-wrapper">
          <ArtisticEditor></ArtisticEditor>
        </div> */}
        <h1>A Knowledge Base For Web Developers 🧠</h1>
        <div className={"callout-wrapper"}>
          <Link href={"/posts/tags/typescript"}>
            <a>
              <Callout
                content="New TypeScript Guides ↗"
                color={"lightgrey"}
              ></Callout>
            </a>
          </Link>
        </div>
        <p></p>
        <div className="learn-button-wrapper">
          <Button text={"🔎 Browse"} href="/posts"></Button>
        </div>
        <div className="particles-wrapper">
          <Particles width={"300px"} height={"300px"}></Particles>
          <PlanetOrb></PlanetOrb>
        </div>
      </div>
      <style jsx>{`
        .container {
          padding: 0 1.5rem;
          margin: 2rem auto 2rem auto;
        }
        .graphic-wrapper {
          display: flex;
        }
        .callout-wrapper {
          text-align: center;
        }
        .gap {
          width: 0.5em;
        }
        @keyframes rotation {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(359deg);
          }
        }

        h3 {
          position: fixed;
          top: 1.5rem;
          left: auto;
          right: 1.5rem;
          text-align: center;
          font-size: 1.5rem;
          margin: 0;
          color: white;
        }
        .fancy {
          color: #15847d;
        }
        .handle {
          display: inline-block;
          margin-top: 0.275em;
          color: #9b9b9b;
          letter-spacing: 0.05em;
        }

        .learn-button-wrapper {
          margin: 2rem 0 0 0;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .particles-wrapper {
          margin: 6rem 0 0 0;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        @media (min-width: 769px) {
          .container {
            padding: 0 1.5rem;
            margin: 0rem auto 0rem auto;
          }
          h1 {
            font-size: 2.75rem;
            position: relative;
            top: 0;
            right: 0;
          }
        }
      `}</style>
    </Layout>
  );
}
