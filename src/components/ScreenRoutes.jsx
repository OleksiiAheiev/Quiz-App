import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import MainTemplate from './Templates/MainTemplate';
import Quiz from '../pages/Quiz';
import HomePage from '../pages/HomePage';
import NotFound from '../pages/NotFound';
import CreateQuiz from '../pages/CreateQuiz';
import Favorite from '../pages/Favorite';

function ScreenRoutes() {
  const location = useLocation();

  return (
    <MainTemplate>
      <Routes>
        <Route path='*' element={<NotFound />} />
        <Route index path='/' element={<HomePage />} />
        <Route path='quiz/:name' element={<Quiz key={location.pathname} />} />
        <Route path='/create' element={<CreateQuiz />} />
        <Route path='/favorite' element={<Favorite />} />
      </Routes>
    </MainTemplate>
  );
}

export default ScreenRoutes;
