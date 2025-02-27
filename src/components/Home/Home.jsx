import React, { useState } from "react";
import axios from "axios";
import CategoryCard from "../CategoryCard/CategoryCard";
import "./Home.scss";

const API_URL = import.meta.env.VITE_API_URL;

const Home = () => {
  const fetchGeoQuestions = async () => {
    try {
      const response = await axios.get(`${API_URL}/geo`);
      return response.data; // Return data to be used in CategoryCard
    } catch (error) {
      console.error("Error fetching geography questions:", error);
      return [];
    }
  };

  return (
    <div className="home">
      <div className="categories">
        <CategoryCard title="Math" bgColor="#E4572E" />
        <CategoryCard title="Science" bgColor="#DDE7F2" />
        <CategoryCard
          title="Geography"
          bgColor="#6D9F71"
          fetchQuestions={fetchGeoQuestions}
        />
      </div>
    </div>
  );
};

export default Home;
