import React from 'react';
import './flashcardlist.css';

interface Flashcard {
  question: string;
  answer: string;
}

const cards: Flashcard[] = [
  {
    question: "What is the French word for 'hello'?",
    answer: "Bonjour",
  },
  {
    question: "What is the French word for 'yes'?",
    answer: "Oui",
  },
  {
    question: "What is the French word for 'no'?",
    answer: "Non",
  },
];

const FlashcardList: React.FC = () => {
  return (
    <div className="flashcard-list-container">
      <h2> Your Cards </h2>
      <div className="flashcard-list">
        {cards.map((card, index) => (
          <div className="flashcard" key={index}>
            <h3>{card.question}</h3>
            <p>{card.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlashcardList;
