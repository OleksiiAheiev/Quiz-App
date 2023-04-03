import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainTemplate from './Templates/MainTemplate';
import Quiz from '../pages/Quiz';
import HomePage from '../pages/HomePage';
import NotFound from '../pages/NotFound';
import CreateQuiz from './CreateQuiz';
import Favorite from './Favorite';

function ScreenRoutes() {
  return (
    <MainTemplate>
      <Routes>
        <Route path='*' element={<NotFound />} />
        <Route index element={<HomePage />} path='/' />
        <Route path='/:name' element={<Quiz />} />
        <Route path='/quiz/create' element={<CreateQuiz />} />
        <Route path='/quiz/favorite' element={<Favorite />} />
      </Routes>
    </MainTemplate>
  );
}

export default ScreenRoutes;
