import { createContext, useContext, useMemo } from "react";
import { useWindowDimension } from "../hooks/useWindowDimensions";

export type AppContextProps = {
  isPhone: boolean;
};

export const AppContext = createContext<AppContextProps>({ isPhone: false });

export const AppConsumer = AppContext.Consumer;
export const useAppContext = () => useContext(AppContext);

export const AppProvider: React.FC<{}> = ({ children }) => {
  const { width } = useWindowDimension();
  const isPhone = width < 768;

  return useMemo(
    () => (
      <AppContext.Provider value={{ isPhone }}>{children}</AppContext.Provider>
    ),
    [isPhone]
  );
};
