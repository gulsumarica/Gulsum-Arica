import React from "react";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Profile from "../components/Profile";
import Project from "../components/Project";

function Home() {
  return (
    <div>
      <Hero />
      <Skills />
      <Profile />
      <Project />
      <Footer />
    </div>
  );
}

export default Home;
