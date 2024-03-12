import { IoClose } from "react-icons/io5";

const NavMobile = ({ handleOpenNav, openNav }) => {
  return (
    <div
      className="absolute top-0 left-0 w-full h-screen flex transition-all duration-300 z-50"
      style={{
        visibility: openNav ? "visible" : "hidden",
        opacity: openNav ? "1" : "0",
      }}
    >
      <div className="flex-1 bg-blackTransparent" onClick={handleOpenNav}></div>

      <nav className="flex-[9] bg-light">
        <div className="w-full h-20 bg-dark flex items-center justify-between px-4">
          <img src="./logo.svg" alt="Logo Hamburguer House" />

          <button onClick={handleOpenNav}>
            <IoClose size={40} color="#FCBA11" />
          </button>
        </div>

        <ul className="p-6 flex flex-col gap-4 font-semibold">
          <li>Home</li>
          <li>Cardápio</li>
          <li>Faça seu pedido</li>
        </ul>
      </nav>
    </div>
  );
};

export default NavMobile;

// visibility: "visible", opacity: "1"
