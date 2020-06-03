import { createContext, useContext } from "react";
import { usePathChecker } from "../../hooks/usePathChecker";
import {
  SECTION_INDEX,
  SECTION_TYPEFACES,
  SECTION_ACCOUNT,
  SECTION_ETC,
  accordionLabel,
} from "../../misc";

export type AccordionDataType = {
  labels: {
    LABEL_INDEX: string;
    LABEL_TYPEFACES: string;
    LABEL_ACCOUNT: string;
    LABEL_ETC: string;
  };
  actives: {
    ACTIVE_INDEX: boolean;
    ACTIVE_TYPEFACES: boolean;
    ACTIVE_ACCOUNT: boolean;
    ACTIVE_ETC: boolean;
  };
};

export type AccordionProps = {
  data: AccordionDataType;
};

export const AccordionContext = createContext<AccordionProps>({
  data: {
    labels: {
      LABEL_INDEX: "",
      LABEL_TYPEFACES: "",
      LABEL_ACCOUNT: "",
      LABEL_ETC: "",
    },
    actives: {
      ACTIVE_INDEX: true,
      ACTIVE_TYPEFACES: false,
      ACTIVE_ACCOUNT: false,
      ACTIVE_ETC: false,
    },
  },
});

export const AccordionConsumer = AccordionContext.Consumer;
export const useAccordionContext = () => useContext(AccordionContext);

export const AccordionProvider: React.FC<{}> = ({ children }) => {
  const data: AccordionDataType = {
    actives: {
      ACTIVE_INDEX: usePathChecker(SECTION_INDEX),
      ACTIVE_TYPEFACES: usePathChecker(SECTION_TYPEFACES),
      ACTIVE_ACCOUNT: usePathChecker(SECTION_ACCOUNT),
      ACTIVE_ETC: usePathChecker(SECTION_ETC),
    },
    labels: {
      LABEL_INDEX: accordionLabel.LABEL_INDEX,
      LABEL_TYPEFACES: accordionLabel.LABEL_TYPEFACES,
      LABEL_ACCOUNT: accordionLabel.LABEL_ACCOUNT,
      LABEL_ETC: accordionLabel.LABEL_ETC,
    },
  };

  return (
    <AccordionContext.Provider value={{ data }}>
      {children}
    </AccordionContext.Provider>
  );
};
