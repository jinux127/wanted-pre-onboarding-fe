import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import * as todoApi from './apis/todoApi';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import TodoPage from './pages/TodoPage';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/todo' element={<TodoPage />} />
        <Route path='/*' element={<LoginPage />} />
        <Route path='*' element={<div>404 NOT FOUND</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
