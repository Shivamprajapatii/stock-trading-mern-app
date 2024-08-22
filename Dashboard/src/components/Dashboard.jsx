import React from 'react'
import { Route, Routes } from "react-router-dom";

import {Apps } from "./Apps";
import  { Founds } from "./Founds";
import { Holdings} from "./Holdings";

import {Orders} from "./Orders";
import {Positions} from "./Positions";
import {Summary} from "./Summary";
import {WatchList} from "./WatchList";

export const Dashboard = () => {
  return (
    <div className="dashboard-container">
      
        <WatchList />
      <div className="content">
        <Routes>
          <Route exact path="/" element={<Summary />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/holdings" element={<Holdings />} />
          <Route path="/positions" element={<Positions />} />
          <Route path="/founds" element={<Founds />} />
          <Route path="/apps" element={<Apps />} />
        </Routes>
      </div>
    </div>
  )
}