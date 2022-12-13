// import React from "react";
// import ArticleList from "./components/article/ArticleListView";
// import ArticleDetail from "./components/article/ArticleDetailView";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

import React from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PrivateRoute from "./utils/PrivateRoute";
import { AuthProvider } from "./context/AuthContext";
import Home from "./views/homePage";
import Login from "./views/loginPage";
import Register from "./views/registerPage";
import ProtectedPage from "./views/ProtectedPage";


function App() {



  return (
    // <div className="App">
    //   <BrowserRouter>
    //   <Routes>
    //     <Route exact path="/" element={<ArticleList />} />
    //     <Route exact path="/:articleID" element={<ArticleDetail />} />
    //   </Routes>
    //   </BrowserRouter>
    // </div>
    <Router>
      <div className="app">
        <AuthProvider>
          <Navbar />
          <Routes>
            {/* <PrivateRoute element={ProtectedPage} path="/protected" exact /> */}
            <Route element={<Login />} path="/login" />
            <Route element={<Register />} path="/register" />
            <Route element={<Home />} path="/" />
          </Routes>
        </AuthProvider>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
