import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate } from "react-router-dom";
import { Children } from "../types";

const SecureRoute = ({ children }: Children) => {
  const getCon = useContext(AuthContext);
  if (getCon) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
};

export default SecureRoute;
