import { useState } from "react";

import NavMobile from "../nav-mobile";

import { IoMenu } from "react-icons/io5";

const HeaderMenuMobile = () => {
  const [openNav, setOpenNav] = useState(false);

  const handleOpenNav = () => {
    setOpenNav(!openNav);
  };

  return (
    <>
      <header className="w-full h-20 flex items-center justify-between bg-dark px-4">
        <button>
          <img src="./logo.svg" alt="Logo Hamburguer House" />
        </button>

        <button onClick={handleOpenNav}>
          <IoMenu size={46} color="#FCBA11" />
        </button>
      </header>

      <NavMobile handleOpenNav={handleOpenNav} openNav={openNav} />
    </>
  );
};

export default HeaderMenuMobile;
