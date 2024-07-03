import React from "react";
import PageHeader from "../../SharedComponents/PageHeader";
import WorkCard from "../Home/components/WorkCard";
import Footer from "../Footer/page";

const Bookmark = () => {
  return (
    <div className="relative w-full px-[2rem] pb-[5rem] dark:bg-darkMode-body">
      <div className="h-full w-[70%]">
        <PageHeader
          title={"Bookmarks"}
          subTitle={"See the work that you saved to keep tabs on."}
        />
        <WorkCard />
        <WorkCard />
        <WorkCard />
        <WorkCard />
        <WorkCard />
      </div>
      <div className="fixed top-[5rem] w-[21%] right-[2rem] z-40">
        <Footer side={true} />
      </div>
    </div>
  );
};

export default Bookmark;
