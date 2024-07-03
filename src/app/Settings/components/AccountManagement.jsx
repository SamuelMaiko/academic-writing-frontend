import React from "react";
import SettingsBlock from "./SettingsBlock";
import { useStateShareContext } from "../../../Context/StateContext";
import { Divider } from "keep-react";

const AccountManagement = () => {
  const { setShowEditInfoModal, setSettingsOpen } = useStateShareContext();
  return (
    <div className=" bg-neutral-100 rounded-lg mt-3">
      <h1 className="p-2 pb-0 text-lg mb-2 font-semibold ">
        Account management
      </h1>
      <SettingsBlock
        onClick={() => {
          //   setShowEditInfoModal(true);
          setSettingsOpen(false);
        }}
        title="Deactivate account"
      />
      <Divider color="primary" />
      <SettingsBlock
        onClick={() => {
          //   setShowEditInfoModal(true);
          setSettingsOpen(false);
        }}
        title="Delete account"
      />
    </div>
  );
};

export default AccountManagement;
