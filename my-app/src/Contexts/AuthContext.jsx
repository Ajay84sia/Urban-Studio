import React, { createContext, useState } from "react";

export const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const [isAuth, setIsAuth] = useState(false);
  const [page, setPage] = useState(1);
  const handlePageChange = (val) => {
    setPage(page + val);
  };

  const login = () => {
    setIsAuth(true);
  };

  const logout = () => {
    setIsAuth(false);
  };

  return (
    <AuthContext.Provider value={{ login, logout, isAuth, page, handlePageChange }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;
