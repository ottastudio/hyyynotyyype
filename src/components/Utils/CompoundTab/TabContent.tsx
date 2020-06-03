import { CompoundTabProps } from ".";
import { useTabContext } from "../../../lib/context/TabContext";

export default ({ tabs, minHeight }: CompoundTabProps) => {
  const { activeTab } = useTabContext();
  const filteredTab = tabs?.filter(({ label }) => label === activeTab);

  return (
    <>
      <div
        className="compound-tab__content"
        style={{
          minHeight: minHeight
            ? `calc(${minHeight} - calc(34px + 0.5rem))`
            : "calc(75vh - calc(34px + 0.5rem))",
        }}
      >
        {filteredTab[0].element}
      </div>

      <style jsx global>{`
        .compound-tab__content {
          width: 100%;
          /*height: 100%;*/
          background-color: var(--tab-foreground);
          padding: 0.5rem;
          text-transform: capitalize;
        }
      `}</style>
    </>
  );
};
