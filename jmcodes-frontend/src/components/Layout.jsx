import React from "react";
import NavigationBar from "./NavigationBar";
import Footer from "./Footer";
import {AppRouter} from "../AppRouter";

function Layout (){ 
  return (
    <>
      <NavigationBar />
      <AppRouter />
      <Footer />
    </>
  )
} 

export default Layout;
