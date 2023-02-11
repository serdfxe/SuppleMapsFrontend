import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './HomePage';

import GlobalStyles from './GlobalStyles';
import Article from './Pages/art/Article/Article';

function App() {
  return (
    <>
      <GlobalStyles/>
      <BrowserRouter>
        <Routes>
          <Route path="app">
            <Route path="" element={<Navigate to="map" />}/>
            <Route path="map" element={<HomePage/>} />
            <Route path="main" element={<HomePage/>} />
            <Route path="account" element={<HomePage/>} />
            <Route path="art" element={<Article/>} />
            <Route path="static_path" element={<HomePage/>} />
            <Route path="search" element={<HomePage/>} />
            <Route path="history" element={<HomePage/>} />
            <Route path="settings" element={<HomePage/>} />
          </Route>
          <Route path="*" element={<Navigate to="/app"/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
