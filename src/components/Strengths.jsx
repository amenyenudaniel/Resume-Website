import { ImPower } from "react-icons/im";
const Strengths = () => {
  return (
    <div className="relative">
      <i className="flex justify-center mt-[5rem]" id="strengths">
        <ImPower fontSize={"3rem"} />
      </i>
      <div className="header__title">
        <h1>Strengths</h1>
      </div>

      <div className="contain__strength flex flex-wrap justify-center gap-8 mt-[3rem]">
        <div className="strengths">Ambitious</div>
        <div className="strengths">Curious</div>
        <div className="strengths">Punctual</div>
        <div className="strengths">Lean Startup</div>
        <div className="strengths">Team Management</div>
        <div className="strengths">Decision-making</div>
        <div className="strengths">Teamwork</div>
        <div className="strengths">Adaptable</div>
        <div className="strengths">Analytical</div>
        <div className="strengths">Persistent</div>
        <div className="strengths">Resourceful</div>
        <div className="strengths">Comfortable in conversation</div>
      </div>
      <div className="line mt-[3rem]"></div>
      <div className="round4 mt-[-2rem] ml-[-3rem] absolute top-0"></div>
    </div>
  );
};

export default Strengths;
