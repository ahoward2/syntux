import Layout from "../components/Layout";
import BasicMeta from "../components/meta/BasicMeta";
import OpenGraphMeta from "../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../components/meta/TwitterCardMeta";
import IcyLogo from "../assets/icycoder-logo.svg";
import ArtisticEditor from "../components/ArtisticEditor";
import PlanetOrb from "../components/planetOrb";


export default function Index() {
  return (
    <Layout>
      <BasicMeta url={"/"} />
      <OpenGraphMeta url={"/"} />
      <TwitterCardMeta url={"/"} />
      <div className="container">
        <div>
          <div className="graphic-wrapper">
            <div className="logo">
              <IcyLogo width={100} height={100}></IcyLogo>
            </div>
            <div className="gap"></div>
            <ArtisticEditor></ArtisticEditor>
          </div>
          <h1>
            Welcome To IcyCoder<span className="fancy">.</span>
          </h1>
          <span className="handle">Guides | Articles</span>
        </div>
        <PlanetOrb></PlanetOrb>
      </div>
      <style jsx>{`
        .container {
          display: flex;
          align-items: center;
          justify-content: center;
          flex: 1 1 auto;
          padding: 0 1.5rem;
        }
        .graphic-wrapper {
          display: flex;
          justify-content: space-between;
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
        .logo {
          margin: auto;
          animation: rotation 8s infinite linear;
        }
        h1 {
          font-size: 2.5rem;
          margin: 0;
          font-weight: 500;
          color: white;
          text-shadow: 
        }
        h2 {
          font-size: 1.75rem;
          font-weight: 400;
          line-height: 1.25;
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

        @media (min-width: 769px) {
          h1 {
            font-size: 3rem;
          }
          h2 {
            font-size: 2.25rem;
          }
        }
      `}</style>
    </Layout>
  );
}
