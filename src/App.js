import React from "react";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import HeadlineCards from "./components/headlineCards";
import Foods from "./components/foods";
import Category from "./components/category";
function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <HeadlineCards/>
      <Foods/>
      <Category />
    </div>
  );
}

export default App;
