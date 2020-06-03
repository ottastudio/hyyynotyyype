import { useAccordionContext } from "../../../lib/context/AccordionContext";

const AccordionContainer: React.FC<{}> = ({ children }) => {
  const {
    data: {
      actives: { ACTIVE_INDEX, ACTIVE_TYPEFACES, ACTIVE_ACCOUNT },
    },
  } = useAccordionContext();

  return (
    <>
      <div
        id="accordion-container"
        className={
          ACTIVE_INDEX
            ? "accordion-container accordion-container-index"
            : ACTIVE_TYPEFACES
            ? "accordion-container accordion-container-typefaces"
            : ACTIVE_ACCOUNT
            ? "accordion-container accordion-container-account"
            : "accordion-container accordion-container-etc"
        }
      >
        {children}
      </div>

      <style jsx>{`
        .accordion-container {
          position: relative;
          transition: margin 300ms cubic-bezier(1, 0, 0.5, 1) 150ms;
        }

        .accordion-container-index {
          margin: 0px 163px 0px 40px;
        }
        .accordion-container-typefaces {
          margin: 0px 120px 0px 80px;
        }
        .accordion-container-account {
          margin: 0px 82px 0px 120px;
        }
        .accordion-container-etc {
          margin: 0px 40px 0px 160px;
        }
      `}</style>
    </>
  );
};

export default AccordionContainer;
