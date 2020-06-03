import { NextPage } from "next";
import { AccordionProvider } from "./AccordionContext";
import { DrawerProvider } from "./DrawerContext";

export const AppProvider: NextPage<{}> = ({ children }) => {
  return (
    <>
      <AccordionProvider>
        <DrawerProvider>{children}</DrawerProvider>
      </AccordionProvider>
    </>
  );
};
