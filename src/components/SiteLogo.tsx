import IcyLogo from "../assets/icycoder-logo.svg";

const SiteLogo = () => {
    return (
        <>
        <div className="logo-container">
            <div className="logo">
                <IcyLogo width={30} height={30}></IcyLogo>
            </div>
        </div>
        <style jsx>
        {`
          .logo-container {
            position: fixed;
            width: 38px;
            height: 38px;
            cursor: pointer;
            top: 1.0rem;
            left: auto;
            right: 1.25rem;
            z-index: 2;
            border-radius: 50px;
            border-color: #9ecaed;
          }

          .logo {
            position: absolute;
            top: calc(50% - 150px);
            left: calc(50% - 150px);
            width: 300px;
            height: 300px;
            border-radius: 50%;
            top: 0.25em;
            left: 0.25rem;
            transition: all 1000ms ease-in;
          }

          @media (min-width: 769px) {
            .logo-container {
              display: hidden;
            }
          }
        `}
      </style>
        </>
    );
}

export default SiteLogo;