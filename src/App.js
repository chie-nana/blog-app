import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import { Header } from './components/Header';
import { ArticleList } from './pages/ArticleList';
import { ArticleDetail } from './pages/ArticleDetail';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<ArticleList />} />
        <Route path="/posts/:id" element={<ArticleDetail />} />
      </Routes>
    </div>
  );
}

export default App;
