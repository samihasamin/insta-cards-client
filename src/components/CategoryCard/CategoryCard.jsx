import React, { useState } from "react";
import "./CategoryCard.scss";

const CategoryCard = ({ title, image, bgColor, fetchQuestions }) => {
  const [flipped, setFlipped] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [currentAnswer, setCurrentAnswer] = useState(null);

  const handlePlayClick = async () => {
    const questions = await fetchQuestions(); // Fetch questions from API
    if (questions.length > 0) {
      const randomIndex = Math.floor(Math.random() * questions.length);
      setCurrentQuestion(questions[randomIndex].question);
      setCurrentAnswer(questions[randomIndex].answer);
    }
    setFlipped(false); // Reset card flip state
  };

  return (
    <div className="category-card-container">
      <div
        className={`category-card ${flipped ? "flipped" : ""}`}
        onClick={() => setFlipped(!flipped)}
        style={{ backgroundColor: bgColor }}
      >
        <div className="card-inner">
          {/* Front Side: Show Question */}
          <div className="card-front">
            <img src={image} alt={title} className="category-icon" />
            <h2>{title}</h2>
            <p className="question-text">
              {currentQuestion || "Click PLAY to start"}
            </p>
          </div>

          {/* Back Side: Show Answer */}
          <div className="card-back">
            <h3>Answer</h3>
            <p className="answer-text">{currentAnswer || "Flip to reveal!"}</p>
          </div>
        </div>
      </div>
      <button className="play-btn" onClick={handlePlayClick}>
        PLAY
      </button>
    </div>
  );
};

export default CategoryCard;
