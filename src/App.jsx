import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ScreenRoutes from './components/ScreenRoutes';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path='/quiz/*' element={<ScreenRoutes />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
