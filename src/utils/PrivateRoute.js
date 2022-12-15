import { Navigate } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";

const PrivateRoute = ({ children }) => {
  // if there is nobody signed in, a user can't get into the base route
  let { user } = useContext(AuthContext);
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
};



export default PrivateRoute;