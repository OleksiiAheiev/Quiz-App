import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { styled, Box } from '@mui/material';
import { quizes } from '../api/api';
import Question from '../components/Question';
import QuizResults from '../components/QuizResult';
import Loading from '../components/Loading';

const StyledQuizPage = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'center',
  minHeight: '65vh',
  padding: '0 15px',
  marginTop: '50px',
  marginBottom: '50px',
}));

function Quiz() {
  const [cards, setCards] = useState([]);
  const { name } = useParams();
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [showResults, setShowResults] = useState(false);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [result, setResult] = useState({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
    quizTime: 0,
  });

  const fetchQuizes = {
    html: quizes.fetchHtml,
    css: quizes.fetchCss,
    java_script: quizes.fetchJs,
  };

  const [time, setTime] = useState(0);

  useEffect(() => {
    let interval;
    if (!showResults) {
      interval = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [showResults]);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await fetchQuizes[name]();
        setCards(data);
      } catch (err) {
        console.error(err);
      }
    })();
  }, [name]);

  const handleQuizEnd = () => {
    setResult((prev) => ({
      ...prev,
      quizTime: time,
    }));
    setShowResults(true);
  };

  if (cards.length === 0) {
    return <Loading />;
  }

  const { correct_choice } = cards[activeQuestion];

  const calculateResult = () => {
    if (selectedAnswer) {
      setResult((prev) => ({
        ...prev,
        score: prev.score + 5,
        correctAnswers: prev.correctAnswers + 1,
      }));
    } else {
      setResult((prev) => ({
        ...prev,
        wrongAnswers: prev.wrongAnswers + 1,
      }));
    }
  };

  const updateQuestion = () => {
    if (activeQuestion !== cards.length - 1) {
      setActiveQuestion((prev) => prev + 1);
    } else {
      handleQuizEnd();
    }
  };

  const handleNextCard = () => {
    setSelectedAnswerIndex(null);
    calculateResult();
    updateQuestion();
  };

  const handleAnswerSelect = (answer, index) => {
    setSelectedAnswerIndex(index);
    if (answer === correct_choice) {
      setSelectedAnswer(true);
    } else {
      setSelectedAnswer(false);
    }
  };

  return (
    <StyledQuizPage>
      {!showResults ? (
        <Question
          cards={cards}
          activeQuestion={activeQuestion}
          handleAnswerSelect={handleAnswerSelect}
          selectedAnswerIndex={selectedAnswerIndex}
          handleNextCard={handleNextCard}
          seconds={time}
        />
      ) : (
        <QuizResults result={result} cards={cards} />
      )}
    </StyledQuizPage>
  );
}

export default Quiz;
