import { useState } from "react";
import { Link } from "react-router-dom";
import { IoMenu } from "react-icons/io5";

import NavMobile from "../nav-mobile";

const HeaderMenuMobile = () => {
  const [openNav, setOpenNav] = useState(false);

  const handleOpenNav = () => {
    setOpenNav(!openNav);
  };

  return (
    <>
      <header className="w-full h-20 flex items-center justify-between bg-dark px-4">
        <Link to="/">
          <img src="./logo.svg" alt="Logo Hamburguer House" />
        </Link>

        <button onClick={handleOpenNav}>
          <IoMenu size={46} color="#FCBA11" />
        </button>
      </header>

      <NavMobile handleOpenNav={handleOpenNav} openNav={openNav} />
    </>
  );
};

export default HeaderMenuMobile;
