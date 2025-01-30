import Image from "next/image";
import Cards from "./components/Feature/cards";
import HeroBanner from "./components/Feature/herobanner";
//import { AppBar, Toolbar } from '@mui/material';

import Nav from "./components/nav";
//import Navbar from "./components/navbar";

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
      <Cards></Cards>
    </>    
  );
}
