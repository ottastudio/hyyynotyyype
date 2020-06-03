import { TabProvider } from "../../../lib/context/TabContext";
import { ReactElement } from "react";
import TabHead from "./TabHead";
import TabContent from "./TabContent";

export type TabProps = {
  label: string;
  element: ReactElement;
};

export interface CompoundTabProps {
  tabs: TabProps[];
  initialTabs?: string;
  minHeight?: string;
}

export default ({ tabs, initialTabs, minHeight }: CompoundTabProps) => {
  return (
    <TabProvider initialTab={initialTabs ? initialTabs : tabs[0].label}>
      <TabHead tabs={tabs} />
      <TabContent tabs={tabs} minHeight={minHeight} />
    </TabProvider>
  );
};
