import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Result from './pages/result';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <BrowserRouter>
 <Routes>
  <Route>
    <Route path='/' element={<App/>}/>
    {/* <Route path='/result/' element={<Result/>}/> */}
  </Route>
 </Routes>
 </BrowserRouter>
);


