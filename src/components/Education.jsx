import { IoIosSchool } from "react-icons/io";
const Education = () => {
  return (
    <div className="relative overflow-hidden" id="education">
      <i className="flex justify-center mt-[3rem]">
        <IoIosSchool fontSize={"3rem"} />
      </i>
      <div className="header__title">
        <h1>Education</h1>
      </div>
      <div className="education">
        <div className="coursera">
          <p>2022-2023</p>
          <h1>
            Meta Frontend <br />
            Developer Certificate
          </h1>
          <p>completed</p>
          <p>Coursera</p>
        </div>
        <div className="line2"></div>
        <div className="wassce">
          <p>2019-2022</p>
          <h1>
            Wassce Certificate
            <br /> Examination
          </h1>
          <p>completed</p>
          <p> Osei Kyeretwie Senior High School</p>
        </div>
      </div>

      <div className="round1 absolute top-[0] left-[-8rem]"></div>
      <div className="round3 absolute bottom-[0] right-[-8rem]"></div>
      <div className="line mt-[14rem]"></div>
    </div>
  );
};

export default Education;
