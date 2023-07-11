import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import { IChildren } from "../types";

const SecureRoute = ({ children }: IChildren) => {
  let location = useLocation();
  const { user } = useContext(AuthContext);
  if (user) {
    return children;
  } else {
    return <Navigate to="/login" state={location} />;
  }
};

export default SecureRoute;
