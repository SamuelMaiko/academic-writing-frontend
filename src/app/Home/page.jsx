import React, { useEffect, useState } from "react";
import WorkCard from "./components/WorkCard";
import PageHeader from "../../SharedComponents/PageHeader";
import Footer from "../Footer/page";
import Loader from "../../SharedComponents/Loader";
import SearchInput from "./components/SearchInput";
import Filters from "./components/Filters";
import { useStateShareContext } from "../../Context/StateContext";

const Home = () => {
  const [loading, setLoading] = useState(false);
  const { filters } = useStateShareContext();

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
      </div>
      <div className="fixed top-[11rem] right-[2rem] md:w-[21%] z-40 overflow-hidden hidden md:block">
        <Footer side={true} />
      </div>
    </div>
  );
};

export default Home;
