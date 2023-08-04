import { links } from "../constants";
import { BiSolidContact } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
const Navbar = ({ menu, setMenu }) => {
  return (
    <>
      <div
        className="fixed w-full top-[0] z-[200] flex justify-between px-[4rem] py-[1rem] navbar"
        id="top"
      >
        <i title="email">
          <BiSolidContact fontSize="2rem" title="amenyenudaniel321@gamil.com" />
        </i>
        <i title="Menu" onClick={() => setMenu(true)}>
          <GiHamburgerMenu fontSize="2rem" cursor="pointer" />
        </i>
      </div>
      {menu && (
        <div className="menu">
          <div className="menu__container slide_bottom">
            <i
              title="Close"
              className="close_icon"
              onClick={() => setMenu(false)}
            >
              <IoMdClose fontSize="2rem" cursor="pointer" />
            </i>

            <div className="links__container">
              {links.map((link) => (
                <a
                  className="links__link"
                  href={link.hashtag}
                  key={link.id}
                  onClick={() => setMenu(false)}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
