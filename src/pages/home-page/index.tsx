import React, { useContext } from "react";
import { ScreenSizeContext } from "../../contexts/screen-size-context";

import HeaderMenuMobile from "../../components/header-menu-mobile";
import HeaderMenuDesktop from "../../components/header-menu-desktop";
import Footer from "../../components/footer";

const HomePage = () => {
  const { desktop } = useContext(ScreenSizeContext);

  return (
    <div className="flex flex-col min-h-screen">
      {desktop !== null ? (
        desktop ? (
          <HeaderMenuDesktop />
        ) : (
          <HeaderMenuMobile />
        )
      ) : null}

      <main className="flex-1 h-heightMinusHeader">
        <img src="./banner.png" alt="Banner" />

        <section className="px-4 py-10 lg:flex">
          <div className="max-w-[32.5em] mx-auto">
            <h1 className="mt-10 text-4xl font-black">
              Quem Somos<span className="text-primary">?</span>
            </h1>

            <p className="mt-4">
              Somos uma equipe apaixonada pela arte de criar hambúrgueres
              irresistíveis e proporcionar momentos de prazer gastronômico aos
              nossos clientes. Na Hamburguer House, não somente buscamos
              satisfazer o seu paladar, mas também queremos fazer você se sentir
              em casa. Nossos hambúrgueres são mais do que apenas uma refeição;
              são uma experiência culinária cuidadosamente elaborada. Utilizamos
              ingredientes frescos e selecionados para garantir um sabor
              autêntico em cada mordida. Desde os pães macios até os toppings
              suculentos, cada detalhe é pensado para proporcionar uma explosão
              de sabores inesquecíveis.
            </p>
          </div>

          <div className="mt-10 min-w-[20.5em] max-w-[20.5em] mx-auto">
            <img src="./hamburguer-banner.png" alt="Hamburguer Banner Image" />
          </div>
        </section>
      </main>

      <div className="mt-10">
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
