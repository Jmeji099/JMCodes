import React from "react";
import { Route, Router } from "react-router-dom";
import Home from "./pages/home/Home";

/**
* functional component Router that will handle all routes of the page. 
**/
export const AppRouter = () => {
  return(    
    <Router>
      <Route path="/" element={<Home />} />
    </Router>
  );

};

