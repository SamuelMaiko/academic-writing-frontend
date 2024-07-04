import React from "react";
import { Divider } from "keep-react";
import WorkCard from "./components/WorkCard";
import PageHeader from "../../SharedComponents/PageHeader";
import Footer from "../Footer/page";

const Home = () => {
  return (
    <div
      className={`relative px-[2rem] pb-[5rem] dark:bg-darkMode-body dark:text-darkMode-text`}
    >
      <div className="h-full w-[70%]">
        <PageHeader
          title={"Available work"}
          subTitle={
            "Browse work that matches your experience. Ordered by closest to deadline."
          }
        />
        <WorkCard bookmark={true} />
        <WorkCard />
        <WorkCard />
      </div>
      <div className="fixed top-[5rem] right-[2rem] w-[21%] z-40 overflow-hidden">
        <Footer side={true} />
      </div>
    </div>
  );
};

export default Home;
