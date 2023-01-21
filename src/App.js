import Ending from "./components/Heading/Ending";
import { Heading } from "./components/Heading/Heading";
import { Hero } from "./components/Home/Hero";
import { Agri } from "./components/Service/Agri";
import { Ecommerce } from "./components/Service/Ecomerce";
import { FMCG } from "./components/Service/FMCG";
import { Hotel } from "./components/Service/Hotel";
import { Packing } from "./components/Service/Packing";
import { Technology } from "./components/Service/Technology";
// import {Technology, FMCG, Packing, Hotel, Ecommerce, Agri } from './components/Service/index'

function App() {
  return (
    <div className="App">
      <Hero />
      <div className="bg-gradient-to-r from-black to-black/80 w-max ">
        <Heading />
        <Technology />
        <Hotel />
        <Packing />
        <FMCG />
        <Agri />
        <Ecommerce />
        <Ending />
      </div>
    </div>
  );
}

export default App;
