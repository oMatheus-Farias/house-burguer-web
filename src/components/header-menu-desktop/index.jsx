import { Link } from "react-router-dom";
import NavDesktop from "../nav-desktop";

const HeaderMenuDesktop = () => {
  return (
    <header className="w-full h-20 flex items-center justify-between bg-dark px-5 lg:px-[6.25em]">
      <Link to="/">
        <img src="./logo.svg" alt="Logo Hamburguer House" />
      </Link>

      <NavDesktop />
    </header>
  );
};

export default HeaderMenuDesktop;
