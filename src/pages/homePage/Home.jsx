import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import banner from "../../images/banner.png";
import FaqCard from "../../components/faq/FaqCard";
import ArticleCard from "../../components/article/ArticleCard";
import TopicsCard from "../../components/topics/TopicsCard";
import { faqs, reads, topics } from "../../data/data";
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
        {faqs.map((faq) => {
          return (
            <FaqCard key={faq.id} cardTitle={faq.faq} cardDesc={faq.ans} />
          );
        })}
      </div>

      <div className="read">
        <h2 className="mainTitle">have a read</h2>
        {reads.map((read) => {
          return (
            <ArticleCard
              key={read.id}
              cardTitle={read.title}
              cardDesc={read.desc}
            />
          );
        })}
      </div>

      <div className="topics">
        <h2 className="mainTitle">topics you can't miss</h2>
        {topics.map((topic) => {
          return (
            <TopicsCard
              key={topic.id}
              cardTitle={topic.title}
              cardDesc={topic.desc}
              backgroundImage={topic.imageUrl}
            />
          );
        })}
      </div>

      <Footer />
    </div>
  );
}
