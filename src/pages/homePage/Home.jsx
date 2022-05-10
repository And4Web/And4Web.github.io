import React, { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import banner from "../../images/banner.png";
import FaqCard from "../../components/faq/FaqCard";
import ArticleCard from "../../components/article/ArticleCard";
import Card from "../../components/card/Card";
import Section from "../../components/section/Section";
import TopicsCard from "../../components/topics/TopicsCard";
import { db } from "../../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
// import { faqs, reads, topics } from "../../data/data";
import "./home.css";

export default function Home() {
  const [faqs, setFaqs] = useState([]);
  const [reads, setReads] = useState([]);
  const [topics, setTopics] = useState([]);
  const [categories, setCategories] = useState([]);

  const faqsCollectionRef = collection(db, "faqs");
  const readsCollectionRef = collection(db, "reads");
  const topicsCollectionRef = collection(db, "topics");
  const categoriesCollectionRef = collection(db, "categories");

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

    const getCategories = async () => {
      const data = await getDocs(categoriesCollectionRef);
      setCategories(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getFaqs();
    getReads();
    getTopics();
    getCategories();
  }, []);

  return (
    <div>
      <Header />
      <img src={banner} alt="banner" className="banner" />

      <Section sectionClass="intro" sectionTitle="how it works">
        <p> sea basket delivers fresh sourced seafood in a few easy clicks</p>
      </Section>

      <Section sectionClass="categories" sectionTitle="categories">
        <div className="test"></div>
        {/* {categories.map((category) => {
          return (
            <Card
              key={category.id}
              image={category.image}
              title={category.category}
            />
          );
        })} */}
      </Section>

      <Section sectionClass="glance" sectionTitle="a glance at our product">
        <div className="video-container">
          <i class="play fa-solid fa-circle-play"></i>
        </div>
      </Section>

      <Section sectionClass="faqs" sectionTitle="FAQS">
        {faqs.map((faq) => {
          return (
            <FaqCard key={faq.id} cardTitle={faq.faq} cardDesc={faq.ans} />
          );
        })}
      </Section>

      <Section sectionClass="read" sectionTitle="have a read">
        {reads.map((read) => {
          return (
            <ArticleCard
              key={read.id}
              cardTitle={read.title}
              cardDesc={read.desc}
            />
          );
        })}
      </Section>

      <Section sectionClass="topics" sectionTitle="topics you can't miss">
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
      </Section>

      <Footer />
    </div>
  );
}
