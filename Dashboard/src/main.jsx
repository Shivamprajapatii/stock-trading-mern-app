import React from "react";
import "./index.css";
import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";

import {Home} from './components/Home'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
