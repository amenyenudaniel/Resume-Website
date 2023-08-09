import Cert from "../../cert.png";
import Danny from "../../Danny-Resume.pdf";
import CertificateCoursera from "../../FinalCertificate.pdf";
import { PiCertificateFill } from "react-icons/pi";
const Certificate = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="p-6 flex  justify-center  flex-col">
        <i className="flex justify-center mt-[5rem]" id="strengths">
          <PiCertificateFill fontSize={"3rem"} />
        </i>
        <div className="header__title">
          <h1>Certificate</h1>
        </div>
        <img src={Cert} alt="Certificate.png" className="cert__img mt-[3rem]" />
        <div className="flex flex-wrap gap-5 justify-center">
          <a href={CertificateCoursera} download>
            <button type="button" className="btn__download">
              View Certificate
            </button>
          </a>
          <a href={Danny} download>
            <button type="button" className="btn__download">
              Download Resume
            </button>
          </a>
        </div>
      </div>
      <div className="line mt-[3rem]"></div>
      <div className="round1 absolute z-0 bottom-[3rem] ml-[-7rem]"></div>
      <div className="round2 absolute right-[-17rem] top-[20px]"></div>
    </div>
  );
};

export default Certificate;
