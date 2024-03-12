import React, { useContext } from "react";
import { ScreenSizeContext } from "../../contexts/screen-size-context";

import HeaderMenuMobile from "../../components/header-menu-mobile";
import HeaderMenuDesktop from "../../components/header-menu-desktop";

const HomePage = () => {
  const { desktop } = useContext(ScreenSizeContext);

  return (
    <>
      {desktop !== null ? (
        desktop ? (
          <HeaderMenuDesktop />
        ) : (
          <HeaderMenuMobile />
        )
      ) : null}
    </>
  );
};

export default HomePage;
