// import React from "react";
import ArticleList from "./components/article/ArticleListView";
import ArticleDetail from "./components/article/ArticleDetailView";
import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PrivateRoute from "./utils/PrivateRoute";
import { AuthProvider } from "./context/AuthContext";
import Login from "./views/loginPage";
import Register from "./views/registerPage";


function App() {



  return (
    <Router>
      <div className="app">
        <AuthProvider>
          <Header />
          <Routes>
            <Route element={<Login />} path="/login" />
            <Route element={<Register />} path="/register" />
            <Route path='/' element={<PrivateRoute>
              <ArticleList />
            </PrivateRoute>} />
            <Route path='/:articleID' element={<PrivateRoute>
              <ArticleDetail />
            </PrivateRoute>} />
          </Routes>
        </AuthProvider>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
