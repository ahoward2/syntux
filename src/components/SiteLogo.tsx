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
            border-radius: 100%;
            background-color: #001F29;
          }

          .logo {
            position: absolute;
            top: 0;
            top: 0.25em;
            left: 0.25rem;
            transition: all 150ms ease-in;
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