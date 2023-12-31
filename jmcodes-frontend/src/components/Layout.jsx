import React from "react";
import NavigationBar from "./NavigationBar";
import Footer from "./Footer";
import {AppRouter} from "../AppRouter";

function Layout (){ 
  return (
    <div className="bg-slate-200">
      <NavigationBar />
      <div>
        <AppRouter/>
      </div>
      <Footer />
    </div>
  )
} 

export default Layout;
