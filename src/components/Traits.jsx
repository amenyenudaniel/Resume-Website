import "./Traits.css";
import { FcPortraitMode } from "react-icons/fc";
import { RiEmotionLine } from "react-icons/ri";
import { TbSocialOff } from "react-icons/tb";
const Circle = ({ title, percent }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-3">
      <div className="circle_content">
        <p className="font-bold text-[21px]">{percent}</p>
      </div>
      <p className="text-[18px] max-w-[250px] text-center">{title}</p>
    </div>
  );
};

const Traits = () => {
  return (
    <div className="traits">
      <div id="cognitive" className="relative">
        <i className="flex justify-center mt-[5rem]" id="strengths">
          <FcPortraitMode fontSize={"3rem"} />
        </i>
        <div className="header__title">
          <h1>Cognitive traits</h1>
        </div>

        <div className="mt-[3rem] p-6">
          <div className="flex gap-[3rem] items-center justify-center flex-wrap">
            <Circle title="Planning Accuracy" percent="90%" />
            <Circle title="Flexibility with Switching" percent="92%" />
            <Circle title="Attention Control" percent="70%" />
            <Circle title="Planning Efficiency" percent="75%" />
          </div>
        </div>
        <div className="line mt-[3rem]"></div>
        <div className="round4 absolute ml-[-5rem] mt-[2rem]"></div>
      </div>

      <div id="emotional" className="overflow-hidden">
        <i className="flex justify-center mt-[5rem]" id="strengths">
          <RiEmotionLine fontSize={"3rem"} />
        </i>
        <div className="header__title">
          <h1>Emotional traits</h1>
        </div>

        <div className="mt-[3rem] p-6">
          <div className="flex gap-[3rem] items-center justify-center flex-wrap">
            <Circle title="Emotion Identification from Context" percent="75%" />
            <Circle title="Effort with Low Chance of Success" percent="65%" />
            <Circle title="Effort for Low Reward" percent="66%" />
            <Circle title="Effort Overall" percent="75%" />
          </div>
        </div>
        <div className="line mt-[3rem]"></div>
        <div className="round3 absolute ml-[-60px] mt-[2rem]"></div>
      </div>

      <div id="social" className="overflow-hidden">
        <i className="flex justify-center mt-[5rem]" id="strengths">
          <TbSocialOff fontSize={"3rem"} />
        </i>
        <div className="header__title">
          <h1>Social traits</h1>
        </div>

        <div className="mt-[3rem] p-6">
          <div className="flex gap-[3rem] items-center justify-center flex-wrap">
            <Circle title="Fairness" percent="85%" />
            <Circle title="Altruism Preferences" percent="75%" />
            <Circle title="Learning from Mistakes Well" percent="95%" />
            <Circle title="Learning from Feedback" percent="70%" />
          </div>
        </div>
        <div className="line mt-[3rem]"></div>
      </div>
    </div>
  );
};

export default Traits;
