import Particles from "react-particles-js";

const planetOrb = () => {
  return (
    <>
      <div className="planet">
        <Particles width={"300px"} height={"300px"}></Particles>
      </div>
      <style jsx>
        {`
          .planet {
            position: relative;
            width: 300px;
            height: 300px;
            border-radius: 50%;
            box-shadow: inset 0 0 50px #fff, inset 20px 0 80px #01b2ff,
              inset -20px 0 80px #8000ff, inset 20px 0 300px #00785c,
              inset -20px 0 300px #8300f5, 0 0 50px #00785c,
              -10px 0 80px #000278, 10px 0 80px #8000ff;
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
};

export default planetOrb;
