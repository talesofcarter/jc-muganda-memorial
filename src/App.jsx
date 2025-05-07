import Navbar from "./components/Navbar/Navbar";
import HeroMain from "./components/Hero/HeroMain";

function App() {
  return (
    <main className="bg-gray-900">
      <Navbar />
      <HeroMain />
      <div className="h-screen"></div>
    </main>
  );
}

export default App;
