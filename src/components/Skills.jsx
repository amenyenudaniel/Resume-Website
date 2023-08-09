import { GiSkills } from "react-icons/gi";
const Skills = () => {
  return (
    <>
      <div className="mt-[4rem] p-6" id="skills">
        <i className="flex justify-center">
          <GiSkills fontSize={"3rem"} />
        </i>
        <div className="header__title">
          <h1>Skills</h1>
        </div>
        <div className="skills__main">
          <div className="flex gap-5 flex-col mt-[3rem]">
            <div className="skill__container">
              <p>HTML5</p>
              <div className="skill__box relative">
                <div className="skill__boxIn"></div>
              </div>
            </div>
            <div className="skill__container">
              <p>CSS3</p>
              <div className="skill__box relative">
                <div className="skill__boxIn"></div>
              </div>
            </div>
            <div className="skill__container">
              <p>Javascript</p>
              <div className="skill__box relative">
                <div className="skill__boxIn"></div>
              </div>
            </div>

            <div className="skill__container">
              <p>React JS</p>
              <div className="skill__box relative">
                <div className="skill__boxIn"></div>
              </div>
            </div>
            <div className="skill__container1">
              <p>Tailwind CSS</p>
              <div className="skill__box1 relative">
                <div className="skill__boxIn1"></div>
              </div>
            </div>
            <div className="skill__container3">
              <p>Next JS</p>
              <div className="skill__box3 relative">
                <div className="skill__boxIn3"></div>
              </div>
            </div>

            <div className="skill__container3">
              <p>Typescript</p>
              <div className="skill__box3 relative">
                <div className="skill__boxIn3"></div>
              </div>
            </div>
            <div className="skill__container3">
              <p>Restful API</p>
              <div className="skill__box3 relative">
                <div className="skill__boxIn3"></div>
              </div>
            </div>

            <div className="skill__container2">
              <p>WebDesign/UX</p>
              <div className="skill__box2 relative">
                <div className="skill__boxIn2"></div>
              </div>
            </div>

            <div className="skill__container4">
              <p>Test/Jest</p>
              <div className="skill__box4 relative">
                <div className="skill__boxIn4"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="line mt-[5rem]"></div>
    </>
  );
};

export default Skills;
