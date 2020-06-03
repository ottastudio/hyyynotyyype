import { useRef } from "react";
import { useOnClickOutside } from "../../../lib/hooks/useOnClickOutside";
import { useDrawerContext } from "../../../lib/context/DrawerContext";
import { useAccordionContext } from "../../../lib/context/AccordionContext";

import DrawerRightHandle from "./DrawerRightHandle";
import DrawerRightTabs from "./DrawerRightTabs";
import DrawerRightFooter from "./DrawerRightFooter";

export default () => {
  const drawerRef = useRef(null);

  const { rightDrawer, setRightDrawer } = useDrawerContext();
  const {
    data: {
      actives: { ACTIVE_ETC },
    },
  } = useAccordionContext();

  useOnClickOutside(drawerRef, () => setRightDrawer(false));

  return (
    <>
      <div
        ref={drawerRef}
        className={`right-drawer ${rightDrawer ? "open" : ""}`}
        style={{
          boxShadow:
            ACTIVE_ETC && rightDrawer
              ? "-4px 0px 6px 0px rgba(0, 0, 0, 0.1)"
              : "0px 0px 0px 0px",
        }}
      >
        <DrawerRightHandle />
        <DrawerRightTabs />
        <DrawerRightFooter />
      </div>

      <style jsx>{`
        .right-drawer {
          position: fixed;
          top: 0;
          right: 0;
          width: 420px;
          height: 100vh;
          background-color: var(--background);

          display: flex;
          flex-direction: column;

          border-left: 1px solid var(--lightgrey);
          transform: translateX(calc(100% - 40px));
          transition: transform 300ms cubic-bezier(1, 0, 0, 1),
            padding-left 300ms cubic-bezier(1, 0, 0, 1);
          z-index: 2001;
        }
        .open {
          transform: translateX(0%);
          padding-left: 40px;
        }
      `}</style>
    </>
  );
};
