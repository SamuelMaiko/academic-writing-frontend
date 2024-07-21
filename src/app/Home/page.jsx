import React, { useEffect, useState } from "react";
import WorkCard from "./components/WorkCard";
import PageHeader from "../../SharedComponents/PageHeader";
import Footer from "../Footer/page";
import Loader from "../../SharedComponents/Loader";
import SearchInput from "./components/SearchInput";
import Filters from "./components/Filters";
import { useStateShareContext } from "../../Context/StateContext";
import UnavailableDark from "../../assets/UnavailableDark.png";
import UnavailableLight from "../../assets/UnavailableLight.png";

const Home = () => {
  const [loading, setLoading] = useState(false);
  const { filters, darkMode } = useStateShareContext();

  // update the search params here
  useEffect(() => console.log("Hey"), [filters]);

  return (
    <div
      className={` relative px-[2rem] pb-[5rem] dark:bg-darkMode-body dark:text-darkMode-text`}
    >
      <div className="sticky top-[5rem] bg-white dark:bg-darkMode-body z-40 pb-3 pt-4">
        <SearchInput />
        <Filters />
      </div>
      <div className="h-full w-[100%] md:w-[70%]">
        <PageHeader
          title={"Available work"}
          subTitle={
            "Browse work that matches your experience. Ordered by closest to deadline."
          }
        />
        <Loader loading={loading} />
        <WorkCard bookmark={true} deadline="2024-07-05T14:40:03" />
        <WorkCard />
        <WorkCard />
        <WorkCard />
        <WorkCard bookmark={true} deadline="2024-07-05T14:40:03" />
        <WorkCard />
        <WorkCard />
        <WorkCard />
        <WorkCard />
        <WorkCard />
        <WorkCard />
        <WorkCard />
        <WorkCard />
        <div className="pb-[8rem] hidden">
          <img
            className="mx-auto w-[16rem]"
            src={darkMode ? UnavailableDark : UnavailableLight}
            alt=""
          />
          <p className="font-bold text-2xl text-center">No work found!</p>
          <p className="font-medium text-sm text-center mt-2">
            work will appear here.
          </p>
        </div>
      </div>
      <div className="fixed top-[11rem] right-[2rem] md:w-[21%] z-40 overflow-hidden hidden md:block">
        <Footer side={true} />
      </div>
    </div>
  );
};

export default Home;
