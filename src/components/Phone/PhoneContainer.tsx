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
          margin-top: 60px;
          padding: 0.5rem;
          transition: margin-top 300ms cubic-bezier(1, 0, 0, 1);
        }
        .phone-container-with-drawer {
          margin-top: 50vh;
        }
      `}</style>
    </>
  );
};
