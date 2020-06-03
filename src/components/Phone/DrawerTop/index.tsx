import { useDrawerContext } from "../../../lib/context/DrawerContext";
import { useRef } from "react";
import { useOnClickOutside } from "../../../lib/hooks/useOnClickOutside";
import Router from "next/router";
import DrawerTopToggleDarkMode from "./DrawerTopToggleDarkMode";
import DrawerTopHandle from "./DrawerTopHandle";
import DrawerTopLinks from "./DrawerTopLinks";

export default () => {
  const drawerRef = useRef(null);
  const { topDrawer, setTopDrawer } = useDrawerContext();

  useOnClickOutside(drawerRef, () => setTopDrawer(false));
  Router.events.on("routeChangeComplete", () =>
    setTimeout(() => {
      setTopDrawer(false);
    }, 300)
  );

  return (
    <>
      <div
        ref={drawerRef}
        className={topDrawer ? "drawer-top open" : "drawer-top"}
      >
        <DrawerTopLinks />
        <DrawerTopToggleDarkMode />
        <DrawerTopHandle />
      </div>

      <style jsx>{`
        .drawer-top {
          background-color: var(--background);
          color: var(--lightgrey);
          position: fixed;
          top: 0;
          right: 0;
          left: 0;
          transform: translateY(calc(-100% + 60px));
          box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0);
          z-index: 2002;
          transition: transform 300ms cubic-bezier(1, 0, 0, 1),
            box-shadow 300ms ease;
        }
        .open {
          transform: translateY(0%);
          box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.1);
        }
      `}</style>
    </>
  );
};
