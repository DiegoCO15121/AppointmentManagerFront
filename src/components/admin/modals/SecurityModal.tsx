import { tabListSecurityModal } from "@/data/admin";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import AdminSecurityAccounts from "../panels/AdminSecurityAccounts";
import CreateSecurityAccount from "../panels/CreateSecurityAccount";

export default function SecurityModal() {
  return (
    <div className="w-full mt-6">
      <TabGroup>
        <TabList className={"bg-slate-200 rounded-lg p-1 flex gap-1 mb-3"}>
          {tabListSecurityModal.map((tab) => (
            <Tab
              className={
                "data-focus:outline-none data-selected:bg-white w-full rounded-lg text-gray-700 font-semibold"
              }
            >
              {tab}
            </Tab>
          ))}
        </TabList>

        <TabPanels>
          <TabPanel>
            <AdminSecurityAccounts />
          </TabPanel>
          <TabPanel>
            <CreateSecurityAccount />
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </div>
  );
}
