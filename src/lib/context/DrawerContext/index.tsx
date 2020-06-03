import {
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
  useState,
} from "react";

export type DrawerProps = {
  rightDrawer: boolean;
  setRightDrawer: Dispatch<SetStateAction<boolean>>;
  topDrawer: boolean;
  setTopDrawer: Dispatch<SetStateAction<boolean>>;
};

const initialState: DrawerProps = {
  rightDrawer: true,
  setRightDrawer: () => {},
  topDrawer: true,
  setTopDrawer: () => {},
};

export const DrawerContext = createContext<DrawerProps>(initialState);
export const DrawerConsumer = DrawerContext.Consumer;
export const useDrawerContext = () => useContext(DrawerContext);

export const DrawerProvider: React.FC<{}> = ({ children }) => {
  const [rightDrawer, setRightDrawer] = useState(initialState.rightDrawer);
  const [topDrawer, setTopDrawer] = useState(initialState.topDrawer);

  return (
    <DrawerContext.Provider
      value={{ rightDrawer, setRightDrawer, topDrawer, setTopDrawer }}
    >
      {children}
    </DrawerContext.Provider>
  );
};
