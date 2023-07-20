import React, { useState } from 'react';
import './flashcardquiz.css';

interface Flashcard {
  question: string;
  answer: string;
  remembered: boolean;
}

const cards: Flashcard[] = [
  {
    question: "What is the French word for 'hello'?",
    answer: "Bonjour",
    remembered: false
  },
  {
    question: "What is the French word for 'yes'?",
    answer: "Oui",
    remembered: false
  },
  {
    question: "What is the French word for 'no'?",
    answer: "Non",
    remembered: false
  },
];

const FlashcardQuiz: React.FC = () => {
  const [remainingCards, setRemainingCards] = useState<Flashcard[]>(cards);
  const [currentCard, setCurrentCard] = useState<Flashcard | null>(null);
  const [revealAnswer, setRevealAnswer] = useState(false);
  const [congratulations, setCongratulations] = useState(false);

  const handleRevealClick = () => {
    setRevealAnswer(true);
  };

  const handleRememberedClick = () => {
    if (currentCard) {
      const updatedRemainingCards = remainingCards.filter(card => card !== currentCard);
      setRemainingCards(updatedRemainingCards);
      setRevealAnswer(false);
      setCurrentCard(null);
      checkCompletion(updatedRemainingCards);
    }
  };

  const handleNotRememberedClick = () => {
    if (currentCard) {
      const updatedRemainingCards = [...remainingCards];
      updatedRemainingCards.shift(); // Remove the current card from the front
      updatedRemainingCards.push(currentCard); // Move the current card to the back
      setRemainingCards(updatedRemainingCards);
      setRevealAnswer(false);
      setCurrentCard(null);
      checkCompletion(updatedRemainingCards);
    }
  };

  const checkCompletion = (remaining: Flashcard[]) => {
    if (remaining.length === 0) {
      setCongratulations(true);
    } else {
      setCurrentCard(remaining[0]);
    }
  };

  // Initialize the first card
  if (currentCard === null && remainingCards.length > 0) {
    setCurrentCard(remainingCards[0]);
  }

  return (
    <div className="flashcard-container">
      {congratulations ? (
        <div className="flashcard-congratulations">
          Congratulations, you're done!
        </div>
      ) : (
        currentCard && (
          <div className="flashcard">
            {!revealAnswer ? (
              <>
                <div className="flashcard-question">{currentCard.question}</div>
                <button onClick={handleRevealClick}>Reveal</button>
              </>
            ) : (
              <>
                <div className="flashcard-question">{currentCard.question}</div>
                <div className="flashcard-answer">{currentCard.answer}</div>
                <div className="flashcard-buttons">
                  <button onClick={handleRememberedClick}>Remembered</button>
                  <button onClick={handleNotRememberedClick}>Didn't Remember</button>
                </div>
              </>
            )}
          </div>
        )
      )}
    </div>
  );
};

export default FlashcardQuiz;
