import React from "react";
import PageHeader from "../../SharedComponents/PageHeader";
import NotificationCard from "./components/NotificationCard";
import Footer from "../Footer/page";

const Notifications = () => {
  return (
    <div className={`relative w-full px-[2rem] dark:bg-darkMode-body`}>
      <div className="w-[55%] h-full">
        <PageHeader
          title={"Notifications"}
          subTitle={"Stay updated with the latest notifications and alerts."}
        />
        <div className=" rounded-lg min-h-screen pb-[7rem] dark:bg-darkMode-cardBg overflow-hidden mt-2  bg-neutral-50">
          <NotificationCard isRead={false} />
          <NotificationCard />
          <NotificationCard />
          <NotificationCard />
          <NotificationCard />
          <NotificationCard />
          <NotificationCard />
          <NotificationCard />
          <NotificationCard />
          <NotificationCard />
          <NotificationCard />
          <NotificationCard />
          <NotificationCard />
          <NotificationCard />
          <NotificationCard />
        </div>
        <div className="fixed top-[5rem] w-[30%] bg-blue-200 right-[2rem] z-40">
          <Footer side={true} />
        </div>
      </div>
    </div>
  );
};

export default Notifications;
