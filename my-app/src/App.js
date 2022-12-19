import React from "react";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import Navbar from "./components/navbar/Navbar";
import ProductList from "./components/productlist/ProductList";

const App = () => {
  return (
    <div>
      <Navbar />
      <Intro />
      <About />
      <ProductList />
      <Contact />
    </div>
  );
};

export default App;
