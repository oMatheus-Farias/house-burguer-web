import { createContext, useEffect, useState } from "react";

export const ScreenSizeContext = createContext();

const ScreenSizeProvider = ({ children }) => {
  const [desktop, setDesktop] = useState(null);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
  }, []);

  const handleResize = () => {
    const sizeScreen = window.innerWidth;

    sizeScreen >= 768 ? setDesktop(true) : setDesktop(false);
  };

  return (
    <ScreenSizeContext.Provider value={{ desktop }}>
      {children}
    </ScreenSizeContext.Provider>
  );
};

export default ScreenSizeProvider;
