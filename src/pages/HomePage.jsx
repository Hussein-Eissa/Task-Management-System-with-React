import React, { useState } from "react";
import Filters from "../Components/Home/Filters";
import Tasks from "../Components/Home/Tasks";
import SideNav from "../Components/Home/SideNav";
import Navbar from "../Components/Home/Navbar";

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (query) => {
    setSearchQuery(query);
  };

  return (
    <div>
      <div className="containers">
        <SideNav />
        <div className="items">
          <Navbar onSearchChange={handleSearchChange} />
          <Tasks searchQuery={searchQuery} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
