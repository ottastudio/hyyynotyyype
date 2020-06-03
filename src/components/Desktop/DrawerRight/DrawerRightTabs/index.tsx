import CompoundTab, { TabProps } from "../../../Utils/CompoundTab";
import Settings from "./Settings";

export default () => {
  const defaultTabs: TabProps[] = [
    { label: "settings", element: <Settings /> },
    { label: "login", element: <>Account</> },
  ];
  return (
    <>
      <div className="tabs-container">
        <CompoundTab tabs={defaultTabs} />
      </div>

      <style jsx>{`
        .tabs-container {
          padding: 0rem 0rem 0rem 0rem;
          height: 75vh;
        }
      `}</style>
    </>
  );
};
