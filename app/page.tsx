//import React, { useEffect } from "react";
import Link from "@/node_modules/next/link";
import React from "react";
//import Cards from "./components/Feature/cards";
import Content from "./components/Feature/content";
import HeroBanner from "./components/Feature/herobanner";
import Statcards from "./components/Feature/statcard";
import StickyFooter from "./components/footer";

import Nav from "./components/nav";

/*const theme = createTheme({
  palette: {
    primary: lime
    secondary: purple,
  },
});*/

export default function Home() {
  return (
    <>
      <Nav></Nav>
      <HeroBanner></HeroBanner>
      <Statcards></Statcards>
      <React.StrictMode>
      <Content></Content>
      </React.StrictMode>
      <StickyFooter></StickyFooter>
    </>    
  );
}
