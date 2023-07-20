import React, { useState } from 'react';
import FlashcardList from './states/flashcardlist';
import './App.css';
import './Button.css';
import FlashcardQuiz from './states/flashcardquiz';

const App: React.FC = () => {
  const [showCardList, setShowCardList] = useState(false);
  const [showQuiz, setShowQuiz] = useState(false);

  const handleCardListClick = () => {
    setShowCardList(true);
    setShowQuiz(false);
  };

  const handleQuizClick = () => {
    setShowCardList(false);
    setShowQuiz(true);
  };

  return (
    <div>
      <div className='buttons-container'>
        <button className='button-arounder' onClick={handleQuizClick}>Quiz</button>
        <button className='button-arounder' onClick={handleCardListClick}>CardList</button>
      </div>
      <div className='App-title'>
        <h1>Flashcard App</h1>
      </div>
      <div>
        {showCardList && <FlashcardList />} 
        {showQuiz && <FlashcardQuiz />}
      </div>
    </div>
  );
};

export default App;
