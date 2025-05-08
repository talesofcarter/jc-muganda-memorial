import Navbar from "./components/Navbar/Navbar";
import HeroMain from "./components/Hero/HeroMain";
import Obituary from "./components/Obituary/Obituary";
import TributesMain from "./components/Tributes/TributesMain";
import Gallery from "./components/Gallery/Gallery";
import Memorial from "./components/Memorial/Memorial";

function App() {
  return (
    <main className="bg-gray-900">
      <Navbar />
      <HeroMain />
      <Obituary />
      <TributesMain />
      <Gallery />
      <Memorial />
      <div className="h-screen"></div>
    </main>
  );
}

export default App;
