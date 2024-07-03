import React from "react";
import { Pencil } from "phosphor-react";
import Bio from "./components/Bio";
import UserInfo from "./components/UserInfo";
import ContactInfo from "./components/ContactInfo";
import { useStateShareContext } from "../../Context/StateContext";
import Analytics from "./components/Analytics";

const Profile = () => {
  // const { showEditInfoModal } = useStateShareContext();
  return (
    <div className="w-full px-[1rem] pb-5 dark:bg-darkMode-body">
      <div className="relative bg-black w-full h-[17rem] rounded-[2rem]">
        {/* user info */}
        <UserInfo />
      </div>
      <Bio />
      <ContactInfo />
      <Analytics />
    </div>
  );
};

export default Profile;
