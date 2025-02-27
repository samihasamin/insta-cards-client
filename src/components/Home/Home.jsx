import React, { useEffect, useState } from "react";
import axios from "axios";
import CategoryCard from "../CategoryCard/CategoryCard";
import "./Home.scss";

const API_URL = import.meta.env.VITE_API_URL;

const Home = () => {
  const [geoQuestions, setGeoQuestions] = useState([]);

  useEffect(() => {
    const fetchGeoQuestions = async () => {
      try {
        const response = await axios.get(`${API_URL}/geo`);
        console.log(response.data);
        setGeoQuestions(response.data);
      } catch (error) {
        console.error("Error fetching geography questions:", error);
      }
    };

    fetchGeoQuestions();
  }, []);

  // useEffect(() => {
  //   fetchGeoQuestions();
  //   fetchGeoAnswer();
  // }, []);

  // async function fetchGeoQuestions() {
  //   try {
  //     const { data } = await axios.get(`http://localhost:8080/geo`);
  //     setGeoQuestions(data);
  //   } catch (error) {
  //     console.error("Error fetching questions:", error);
  //   }
  // }

  return (
    <div className="home">
      <div className="categories">
        <CategoryCard title="Math" bgColor="#E4572E" />
        <CategoryCard title="Science" bgColor="#DDE7F2" />
        <CategoryCard title="Geography" bgColor="#6D9F71" />

        <div className="geo-questions">
          <h3>Geography Questions</h3>
          <ul>
            {geoQuestions.map((q, index) => (
              <li key={index}>{q.question}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
