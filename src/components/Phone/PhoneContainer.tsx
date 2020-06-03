import { useDrawerContext } from "../../lib/context/DrawerContext";

export const PhoneContainer: React.FC<{}> = ({ children }) => {
  const { topDrawer } = useDrawerContext();
  return (
    <>
      <div
        className={
          topDrawer
            ? "phone-container phone-container-with-drawer"
            : "phone-container"
        }
      >
        {children}
      </div>

      <style jsx>{`
        .phone-container {
          background-color: var(--background);
          position: relative;
          padding: calc(60px + 0.5rem) 0.5rem 0.5rem 0.5rem;
          transition: padding 300ms cubic-bezier(1, 0, 0, 1);
        }
        .phone-container-with-drawer {
          padding: calc(50vh + 0.5rem) 0.5rem 0.5rem 0.5rem;
        }
      `}</style>
    </>
  );
};
