import { IoMenu } from "react-icons/io5";

const HeaderMenuMobile = () => {
  return (
    <header className="w-full h-20 flex items-center justify-between bg-dark px-4">
      <button>
        <img src="./logo.svg" alt="Logo Hamburguer House" />
      </button>

      <button>
        <IoMenu size={46} color="#FCBA11" />
      </button>
    </header>
  );
};

export default HeaderMenuMobile;
