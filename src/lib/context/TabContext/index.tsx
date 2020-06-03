import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";

export type TabContextProps = {
  activeTab: string;
  setActiveTab: Dispatch<SetStateAction<string>>;
};

export const TabContext = createContext<TabContextProps>({
  activeTab: "",
  setActiveTab: () => {},
});

export const TabConsumer = TabContext.Consumer;
export const useTabContext = () => useContext(TabContext);

export const TabProvider: React.FC<{ initialTab: string }> = ({
  children,
  initialTab,
}) => {
  const [activeTab, setActiveTab] = useState<string>(initialTab);

  return (
    <TabContext.Provider value={{ activeTab, setActiveTab }}>
      {children}
    </TabContext.Provider>
  );
};
