
const planetOrb = () => {
    return (
        <>
        <div className="planet">

        </div>
        <style jsx>
        {`
          .planet {
            position: fixed;
            top: calc(100% - 150px);
            left: calc(50% - 150px);
            width: 300px;
            height: 300px;
            border-radius: 50%;
            box-shadow:
                inset 0 0 50px #fff,
                inset 20px 0 80px #01B2FF,
                inset -20px 0 80px #8000FF,
                inset 20px 0 300px #00785C,
                inset -20px 0 300px #8300F5,
                0 0 50px #00785C,
                -10px 0 80px #000278,
                10px 0 80px #8000FF;
            transition: all 1000ms ease-in;
          }

          @media (min-width: 769px) {
            .planet {
              display: hidden;
            }
          }
        `}
      </style>
        </>
        
    );
}

export default planetOrb;