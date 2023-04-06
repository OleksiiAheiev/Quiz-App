import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import ScreenRoutes from './components/ScreenRoutes';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <BrowserRouter>
          <Routes>
            <Route path='/quiz/*' element={<ScreenRoutes />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
