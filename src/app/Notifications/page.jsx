import React from "react";
import PageHeader from "../../SharedComponents/PageHeader";
import NotificationCard from "./components/NotificationCard";
import Footer from "../Footer/page";
import notifications from "../../assets/notifications.png";

const Notifications = () => {
  const notif = true;
  return (
    <div className={`relative w-full px-4 md:px-[2rem] dark:bg-darkMode-body`}>
      <div className="w-full md:w-[55%] h-full">
        <PageHeader
          title={"Notifications"}
          subTitle={"Stay updated with the latest notifications and alerts."}
        />
        <div
          className={`${
            !notif ? "hidden" : ""
          } rounded-lg min-h-screen pb-[7rem] dark:bg-darkMode-cardBg overflow-hidden mt-2  bg-neutral-50`}
        >
          <NotificationCard isRead={false} type="NEARING_DEADLINE" />
          <NotificationCard type="ASSIGNED_WORK" />
          <NotificationCard type="NEW_REVISION" />
          <NotificationCard type="UPDATE_PROFILE" />
          <NotificationCard type="NEARING_DEADLINE" />
          <NotificationCard type="ASSIGNED_WORK" />
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
        <div
          className={`${
            !notif ? "" : "hidden"
          } min-h-screen dark:text-darkMode-text`}
        >
          <img
            className="w-[14rem] mx-auto h-auto"
            src={notifications}
            alt=""
          />
          <p className="font-bold text-2xl text-center">
            No notifications yet!
          </p>
          <p className="font-medium text-sm text-center mt-2">
            Any new notifications will appear here.
          </p>
        </div>
        <div className="fixed top-[5rem] w-0 md:w-[30%] bg-blue-200 right-[2rem] hidden md:block z-40">
          <Footer side={true} />
        </div>
      </div>
    </div>
  );
};

export default Notifications;
