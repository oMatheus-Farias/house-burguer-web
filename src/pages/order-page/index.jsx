import React, { useContext } from "react";
import { ScreenSizeContext } from "../../contexts/screen-size-context";

import HeaderMenuMobile from "../../components/header-menu-mobile";
import HeaderMenuDesktop from "../../components/header-menu-desktop";
import Footer from "../../components/footer";

import { FaArrowDownLong } from "react-icons/fa6";

const OrderPage = () => {
  const { desktop } = useContext(ScreenSizeContext);

  return (
    <div className="flex flex-col min-h-screen relative">
      {desktop !== null ? (
        desktop ? (
          <HeaderMenuDesktop />
        ) : (
          <HeaderMenuMobile />
        )
      ) : null}

      <main className="flex-1 h-heightMinusHeader">
        <div className="w-full flex flex-col items-center px-4">
          <div className="flex flex-col items-center gap-11">
            <h1 className="text-center mt-12 text-xl md:text-4xl font-black">
              Seu pedido a um clique de distância
            </h1>

            <FaArrowDownLong size={60} color="#FCBA11" />
          </div>

          <button className="absolute top-[50%] bg-primary rounded-xl text-2xl sm:text-4xl font-black p-8 max-w-[90%] hover:scale-105 duration-150">
            Faça seu pedido!
          </button>
        </div>
      </main>

      <div className="mt-10">
        <Footer />
      </div>
    </div>
  );
};

export default OrderPage;
