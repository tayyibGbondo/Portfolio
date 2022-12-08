import React from "react";
import "./App.scss";

import { Navbar } from "./components/Navigation";
import { About, Footer, Header, Skills, Testimonial, Work } from "./containers";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default App;
