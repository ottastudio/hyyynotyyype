import { useDrawerContext } from "../../../lib/context/DrawerContext";
import DotTyping from "../../Utils/Placeholders/DotTyping";

export default () => {
  const { setRightDrawer, rightDrawer } = useDrawerContext();
  return (
    <>
      <div
        onClick={() => setRightDrawer(!rightDrawer)}
        className={
          rightDrawer ? "drawer-handle drawer-handle__open" : "drawer-handle"
        }
      >
        <label>Tools{rightDrawer ? <DotTyping /> : "."}</label>
      </div>

      <style jsx>{`
        .drawer-handle {
          position: absolute;
          top: 0;
          left: 0;
          width: 40px;
          height: 100%;
          cursor: pointer;
          overflow: hidden;
          background-color: var(--background);
          color: var(--lightgrey);
          z-index: 100;
        }
        .drawer-handle:hover {
          color: var(--foreground);
        }
        .drawer-handle__open {
          background-color: var(--background);
          color: var(--foreground);
        }

        label {
          position: absolute;
          width: 180px;
          padding: 0px 5px;
          top: 20px;
          font-size: 1.5rem;
          left: 50%;
          transform: rotate(-90deg) translateX(-100%) translateY(-50%);
          transform-origin: 0 0;
          cursor: inherit;
          user-select: none;
        }
      `}</style>
    </>
  );
};
