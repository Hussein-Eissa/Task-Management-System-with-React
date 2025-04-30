import React, { useState } from "react";
import Filters from "../Components/Home/Filters";
import Tasks from "../Components/Home/Tasks";
import SideNav from "../Components/Home/SideNav";
import Navbar from "../Components/Home/NavBar";

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <div>
      <div className="containers">
        <SideNav />
        <div className="items">
          <Navbar
            searchQuery={searchQuery}
            onSearchChange={(e) => setSearchQuery(e.target.value)}
          />
          <Tasks searchQuery={searchQuery} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
