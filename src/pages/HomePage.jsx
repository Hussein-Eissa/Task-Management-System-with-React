import React, { useState } from 'react'
import Filters from '../Components/Home/Filters'
import Tasks from '../Components/Home/Tasks'
import SideNav from '../Components/Home/SideNav'
import Navbar from '../Components/Home/NavBar'
import TaskFetcher from '../Components/Home/Search/TaskFetcher'

const HomePage = () => {
  return (
    <div>
       <TaskFetcher />
      <div className="containers">
        <SideNav />
        <div className="items">
          <Navbar />
          <Filters />
          <Tasks />
        </div>
      </div>
      
    </div>
  )
}

export default HomePage
