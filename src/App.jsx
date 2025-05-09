import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "./components/Navbar/Navbar";
import HeroMain from "./components/Hero/HeroMain";
import Obituary from "./components/Obituary/Obituary";
import TributesMain from "./components/Tributes/TributesMain";
import Gallery from "./components/Gallery/Gallery";
import Memorial from "./components/Memorial/Memorial";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <main className="bg-gray-900">
      <Helmet>
        <title>In Loving Memory of Jean-Carol Muganda</title>
        <meta
          name="description"
          content="A memorial website dedicated to Jean-Carol Muganda, featuring an obituary, tributes, photo gallery, and memory wall to honor their life and legacy."
        />
        <meta
          name="keywords"
          content="Jean-Carol Muganda, memorial, obituary, tributes, gallery, memory wall, remembrance"
        />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://jc-muganda.vercel.app" />

        <meta
          property="og:title"
          content="Jean-Carol Muganda | Memorial Website"
        />
        <meta
          property="og:description"
          content="Join us in remembering Jean-Carol Muganda through stories, photos, and tributes on this dedicated memorial website."
        />
        <meta property="og:image" content="/images/jean-1.jpg" />
        <meta property="og:url" content="https://jc-muganda.vercel.app" />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Jean-Carol Muganda Memorial" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Jean-Carol Muganda | Memorial Website"
        />
        <meta
          name="twitter:description"
          content="A place to honor Jean-Carol Muganda with memories, photos, and tributes."
        />
        <meta name="twitter:image" content="/images/jean-1.jpg" />

        <meta property="og:title" content="WhatsApp" />
        <meta
          property="og:description"
          content="A place to honor Jean-Carol Muganda with memories, photos, and tributes."
        />
        <meta property="og:url" content="https://jc-muganda.vercel.app/" />
        <meta property="og:image" content="/images/jean-1.jpg" />
      </Helmet>

      <Navbar />
      <HeroMain />
      <Obituary />
      <TributesMain />
      <Gallery />
      <Memorial />
      <Footer />
    </main>
  );
}

export default App;
