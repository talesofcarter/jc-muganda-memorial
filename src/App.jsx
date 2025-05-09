import React from "react";
import Navbar from "./components/Navbar/Navbar";
import HeroMain from "./components/Hero/HeroMain";
import Obituary from "./components/Obituary/Obituary";
import TributesMain from "./components/Tributes/TributesMain";
import Gallery from "./components/Gallery/Gallery";
import Memorial from "./components/Memorial/Memorial";
import Footer from "./components/Footer/Footer";
import { Analytics } from "@vercel/analytics/next";
function App() {
  return (
    <main className="bg-gray-900">
      <Navbar />
      <HeroMain />
      <Obituary />
      <TributesMain />
      <Gallery />
      <Memorial />
      <Footer />
      <Analytics />
    </main>
  );
}

export default App;
