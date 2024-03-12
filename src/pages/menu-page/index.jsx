import { useContext, useEffect, useState } from "react";
import { ScreenSizeContext } from "../../contexts/screen-size-context";

import HeaderMenuMobile from "../../components/header-menu-mobile";
import HeaderMenuDesktop from "../../components/header-menu-desktop";
import Footer from "../../components/footer";
import CardItem from "../../components/card-item";
import LoadComponent from "../../components/load-component";

import { getItems } from "../../helpers/fakeApi";

const MenuPage = () => {
  const { desktop } = useContext(ScreenSizeContext);

  const [hamburguerItems, setHamburguerItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      setHamburguerItems(getItems());
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, []);

  if (loading) {
    return <LoadComponent size={40} color="#000" />;
  }

  return (
    <div className="flex flex-col min-h-screen">
      {desktop !== null ? (
        desktop ? (
          <HeaderMenuDesktop />
        ) : (
          <HeaderMenuMobile />
        )
      ) : null}

      <main className="h-heightMinusHeader flex-1">
        <div className="w-full h-full px-5 lg:px-[6.25em]">
          <h1 className="mt-12 text-4xl font-black">
            Nosso Cardápio<span className="text-primary">:</span>
          </h1>

          <div className="mt-16 grid grid-cols-1 xl:grid-cols-2">
            {hamburguerItems.map((item) => {
              return (
                <CardItem
                  key={item?.id}
                  burguerName={item?.burguerName}
                  price={item?.price}
                  image={item?.image}
                />
              );
            })}
          </div>
        </div>
      </main>

      <div className="mt-10">
        <Footer />
      </div>
    </div>
  );
};

export default MenuPage;
