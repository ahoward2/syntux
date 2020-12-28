import IcyLogo from "../assets/icycoder-logo.svg";


const SiteLogo = () => {
    return (
        <>
            <div className="logo-container">
                <IcyLogo width={35} height={35}></IcyLogo>
            </div>
            <style jsx>
        {`
          .logo-container {
            position: fixed;
            width: 38px;
            height: 38px;
            cursor: pointer;
            top: 1rem;
            left: auto;
            right: 1.25rem;
            z-index: 2;
            background-color: rgba(255, 255, 255, 0.7);
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