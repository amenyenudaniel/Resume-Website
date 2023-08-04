import { SiWorkplace } from "react-icons/si";
const Experience = () => {
  return (
    <>
      <div className="mt-8 relative overflow-hidden experience" id="work">
        <i className="flex justify-center">
          <SiWorkplace fontSize={"3rem"} />
        </i>
        <div className="header__title">
          <h1>Work experience</h1>
        </div>

        <div className="experience">
          <h2>
            Frontend Development
            <br />
            [React JS & Next JS]
          </h2>
          <p>
            Working with clients to develop the overall look and design of a
            website. Writing website code with programming languages such as
            HTML, CSS, Tailwind CSS, Javascript, React JS and Next JS.
            Producing, maintaining and modifying websites and user interfaces.
          </p>
        </div>
        <div className="round3 experience__round1"></div>
        <div className="round4 experience__round2"></div>
      </div>
      <div className="line"></div>
    </>
  );
};

export default Experience;
