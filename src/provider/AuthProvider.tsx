import React, { createContext, useState } from "react";
type Props = {
  children?: JSX.Element | JSX.Element[];
};
export const AuthContext = createContext({});
const AuthProvider = ({ children }: Props) => {
  const [cart, setCart] = useState([]);
  const totalContext = {
    cart,
    setCart,
  };
  return (
    <AuthContext.Provider value={totalContext}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
