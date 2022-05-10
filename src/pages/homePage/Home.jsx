import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import banner from "../../images/banner.png";
import FaqCard from "../../components/card/FaqCard";
import "./home.css";

export default function Home() {
  return (
    <div>
      <Header />
      <img src={banner} alt="banner" className="banner" />

      <div className="intro">
        <h2 className="mainTitle">How it works</h2>
        <p> sea basket delivers fresh sourced seafood in a few easy clicks</p>
      </div>

      <div className="categories">
        <h3 className="mainTitle">Categories</h3>
        <div className="test"></div>
      </div>

      <div className="glance">
        <h2 className="mainTitle">a glance at our product</h2>
        <div className="video-container">{/* <video></video> */}</div>
      </div>

      <div className="faqs">
        <h2 className="mainTitle">FAQS</h2>
        <FaqCard
          cardTitle="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores, error!"
          cardDesc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam non illum repudiandae maxime fugit? Deleniti enim modi repellendus? Quisquam nisi minus recusandae? Quas, quasi iure dicta quaerat tempora ab animi illo libero quis distinctio nostrum placeat sapiente expedita soluta? Odit, officiis reprehenderit. Error magni possimus voluptas libero omnis? Tenetur, minima."
        />
      </div>

      <Footer />
    </div>
  );
}
