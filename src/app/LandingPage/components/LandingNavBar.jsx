import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useStateShareContext } from "../../../Context/StateContext";
import LogoLight from "../../../assets/LogoLight.png";
import LogoDark from "../../../assets/LogoDark.png";

const NAV_LINKS = [
  {
    linkName: "Home",
    link: "/",
  },
  {
    linkName: "Services",
    link: "#",
  },
  {
    linkName: "Contact",
    link: "#",
  },
  {
    linkName: "FAQs",
    link: "#",
  },
];
const LandingNavBar = () => {
  const { show, setShow, darkMode } = useStateShareContext();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const handleLogin = () => {
    setShow((current) => !current);
    navigate("/login");
  };
  const handleNavLinkClick = (e) => {
    e.preventDefault();
    setShow(!show);
  };

  return (
    <div className="relative w-full h-[5.7rem] bg-secondary text-tcolor shadow-[0_0_4px_rgba(0,0,0,0.2)]">
      <div className="w-[90%] h-full mx-auto flex justify-between items-center lg:pr-6 ">
        <div className="h-[2.7rem] w-[11rem] ">
          <img
            className="w-full h-full object-cover object-center"
            src={darkMode ? LogoDark : LogoLight}
            alt=""
          />
        </div>
        <ul
          className={`${
            show ? "visible" : "invisible "
          } lg:visible transition-all duration-500 absolute left-10 top-[8rem] right-10 z-10 lg:w-fit
           lg:flex lg:static gap-20 items-center font-semibold text-[1rem] `}
        >
          {NAV_LINKS.map((navLink, index) => {
            return (
              <li
                onClick={() => setShow(!show)}
                className="mb-0 lg:mb-0 mt-0 lg:mt-0 lg:p-0 py-3 px-3  rounded-md lg:hover:text-hover
                 hover:bg-gray-200 lg:hover:bg-transparent cursor-pointer transition-colors duration-300"
                key={index}
              >
                <NavLink to={navLink.link}>{navLink.linkName}</NavLink>
              </li>
            );
          })}
          <button
            onClick={handleLogin}
            className="bg-chocolate text-white hover:bg-neutral-600 rounded-3xl px-5 py-2 mt-7 lg:mt-0 font-medium
             text-[1.1rem] transition-colors duration-300 "
          >
            Login
          </button>
        </ul>
        <button
          className={`${
            pathname == "/login" || pathname == "/signup" ? " " : "hidden"
          }t hidden text-white hover:bg-primary rounded-3xl md:px-5 py-2 font-normal text-md lg:text-lg
           underline bg-[rgba(128,0,0,0.7)] mr-16 lg:mr-0`}
        >
          Back to home
        </button>
        <div className="lg:hidden absolute cursor-pointer right-0 text-3xl duration-500 mr-7">
          {/* nav menu icon */}
          <div>
            <input
              onClick={handleNavLinkClick}
              id="checkbox"
              type="checkbox"
            ></input>
            <label className="toggle" htmlFor="checkbox">
              <div id="bar1" className="bars"></div>
              <div id="bar2" className="bars"></div>
              <div id="bar3" className="bars"></div>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingNavBar;
