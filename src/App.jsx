import { Analytics } from "@vercel/analytics/react";
import { Routes, Route } from "react-router";
import HeroMain from "./pages/HeroMain";
import Obituary from "./pages/Obituary";
import TributesMain from "./pages/TributesMain";
import Gallery from "./pages/Gallery";
import Memorial from "./pages/Memorial";
import Footer from "./pages/Footer";
import Navbar from "./components/Navbar";
function App() {
  return (
    <main className="bg-gray-900">
      <Analytics />
      <Navbar />
      <Routes>
        <Route path="/" element={<HeroMain />} />
        <Route path="/obituary" element={<Obituary />} />
        <Route path="/tributes" element={<TributesMain />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/memorial" element={<Memorial />} />
        <Route path="/contact" element={<Footer />} />
      </Routes>
    </main>
  );
}

export default App;
