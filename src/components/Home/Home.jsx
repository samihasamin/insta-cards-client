import React from "react";
import axios from "axios";
import CategoryCard from "../CategoryCard/CategoryCard";
import "./Home.scss";
import InstaCard from "../../assets/images/icons/Instacard - LOGO.svg";
import mathIcon from "../../assets/images/icons/math-2.svg";
// import mathIconTwo from "../../assets/images/icons/math-2.svg";
import scienceIcon from "../../assets/images/icons/science.svg";
// import scienceIconTwo from "../../assets/images/icons/science-2.svg";
import geoIcon from "../../assets/images/icons/Geo.svg";
import Header from "../Header/Header";

const API_URL = import.meta.env.VITE_API_URL;

const Home = () => {
  const fetchGeoQuestions = async () => {
    try {
      const response = await axios.get(`${API_URL}/geo`);
      return response.data;
    } catch (error) {
      console.error("Error fetching geography questions:", error);
      return [];
    }
  };

  const fetchMathQuestions = async () => {
    try {
      const response = await axios.get(`${API_URL}/math`);
      return response.data;
    } catch (error) {
      console.error("Error fetching math questions:", error);
      return [];
    }
  };

  const fetchScienceQuestions = async () => {
    try {
      const response = await axios.get(`${API_URL}/science`);
      return response.data;
    } catch (error) {
      console.error("Error fetching science questions:", error);
      return [];
    }
  };

  return (
    <div className="home">
      {/* <header className="header">
        <img src={InstaCard} alt="InstaCards Logo" className="" />
      </header> */}
      <Header></Header>

      <div className="categories">
        <CategoryCard
          title="Math"
          image={mathIcon}
          // imageTwo={mathIconTwo}
          bgColor="#E4572E"
          fetchQuestions={fetchMathQuestions}
        />
        <CategoryCard
          title="Science"
          image={scienceIcon}
          // imageTwo={scienceIconTwo}
          bgColor="#86aadf"
          fetchQuestions={fetchScienceQuestions}
        />
        <CategoryCard
          title="Geography"
          image={geoIcon}
          bgColor="#6D9F71"
          fetchQuestions={fetchGeoQuestions}
        />
      </div>
    </div>
  );
};

export default Home;
