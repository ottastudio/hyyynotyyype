import { useDrawerContext } from "../../../lib/context/DrawerContext";

export default () => {
  const { topDrawer, setTopDrawer } = useDrawerContext();
  return (
    <>
      <a
        className={
          topDrawer ? "drawer-handle drawer-handle__active" : "drawer-handle"
        }
        onClick={() => setTopDrawer(!topDrawer)}
      >
        <span className="text">Hyno Type.</span>
        <span className={topDrawer ? "mark mark__active" : "mark"}>
          <label />
        </span>
      </a>

      <style jsx>{`
        .drawer-handle {
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0rem 0.5rem 0rem 0.5rem;
          overflow: hidden;
          border-bottom: 1px solid transparent;
          font-size: 2.3rem;
        }
        .drawer-handle__active {
          border-bottom: 1px solid;
          padding: 0rem 0.5rem 0rem 0.5rem;
        }

        .drawer-handle .mark {
          height: 40px;
          width: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 300ms ease;
          font-size: 2.5rem;
          padding-top: 4px;
        }
        .mark__active {
          transform: rotate(0deg);
        }

        .mark label {
          display: inline-flex;
          width: 24px;
          height: 24px;
          border: 2px solid;
          border-radius: 100%;
          transition: border-radius 300ms ease-in;
        }
        .mark__active label {
          background-color: var(--lightgrey);
          border-radius: 100%;
        }
      `}</style>
    </>
  );
};
