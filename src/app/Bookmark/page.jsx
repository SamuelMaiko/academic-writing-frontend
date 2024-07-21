import React from "react";
import PageHeader from "../../SharedComponents/PageHeader";
import WorkCard from "../Home/components/WorkCard";
import Footer from "../Footer/page";
import { useStateShareContext } from "../../Context/StateContext";
import BookmarkDark from "../../assets/BookmarkDark.png";
import BookmarkLight from "../../assets/BookmarkLight.png";

const Bookmark = () => {
  const { darkMode } = useStateShareContext();

  return (
    <div className="relative w-full min-h-screen px-[1rem] md:px-[2rem] pb-[5rem] dark:bg-darkMode-body">
      <div className="h-full w-full md:w-[70%]">
        <PageHeader
          title={"Bookmarks"}
          subTitle={"See the work that you saved to keep tabs on."}
        />
        {/* <WorkCard />
        <WorkCard />
        <WorkCard />
        <WorkCard />
        <WorkCard /> */}
        <div className="pb-[8rem] ">
          <img
            className="mx-auto w-[16rem]"
            src={darkMode ? BookmarkDark : BookmarkLight}
            alt=""
          />
          <p className="font-bold text-2xl text-center">No bookmarks yet!</p>
          <p className="font-medium text-sm text-center mt-2">
            Any bookmarks will appear here.
          </p>
        </div>
      </div>
      <div className="fixed top-[5rem] w-0 md:w-[21%] hidden md:block right-[2rem] z-40">
        <Footer side={true} />
      </div>
    </div>
  );
};

export default Bookmark;
