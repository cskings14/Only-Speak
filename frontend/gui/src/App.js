import React from "react";
import ArticleList from "./components/article/ArticleListView";
import ArticleDetail from "./components/article/ArticleDetailView";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {



  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<ArticleList />} />
        <Route exact path="/:articleID" element={<ArticleDetail />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
