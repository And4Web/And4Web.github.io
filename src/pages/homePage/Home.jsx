import React, { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import banner from "../../images/banner.png";
import FaqCard from "../../components/faq/FaqCard";
import ArticleCard from "../../components/article/ArticleCard";
import TopicsCard from "../../components/topics/TopicsCard";
import { db } from "../../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
// import { faqs, reads, topics } from "../../data/data";
import "./home.css";

export default function Home() {
  const [faqs, setFaqs] = useState([]);
  const [reads, setReads] = useState([]);
  const [topics, setTopics] = useState([]);

  const faqsCollectionRef = collection(db, "faqs");
  const readsCollectionRef = collection(db, "reads");
  const topicsCollectionRef = collection(db, "topics");

  useEffect(() => {
    const getFaqs = async () => {
      const data = await getDocs(faqsCollectionRef);
      setFaqs(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    const getReads = async () => {
      const data = await getDocs(readsCollectionRef);
      setReads(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    const getTopics = async () => {
      const data = await getDocs(topicsCollectionRef);
      setTopics(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getFaqs();
    getReads();
    getTopics();
  }, []);

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
        <div className="video-container">
          <i class="play fa-solid fa-circle-play"></i>
        </div>
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
              style={{ backgroundImage: `${topic.imageUrl}` }}
            />
          );
        })}
      </div>

      <Footer />
    </div>
  );
}
