import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";
const Footer = () => {
  return (
    <div className="flex justify-end p-6 gap-5">
      <a href="https://twitter.com/Daniel_Amenyenu" target="_blank">
        <i>
          <AiFillTwitterCircle fontSize={"2rem"} cursor={"pointer"} />
        </i>
      </a>
      <a
        href="https://www.linkedin.com/in/daniel-amenyenu-868020277/"
        target="_blank"
      >
        <i>
          <AiFillLinkedin fontSize={"2rem"} cursor={"pointer"} />
        </i>
      </a>
      <a href="https://github.com/amenyenudaniel" target="_blank">
        <i>
          <AiFillGithub fontSize={"2rem"} cursor={"pointer"} />
        </i>
      </a>
    </div>
  );
};

export default Footer;
