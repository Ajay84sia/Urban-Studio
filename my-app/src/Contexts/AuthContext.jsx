import React, { createContext, useState } from "react";

export const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const [isAuth, setIsAuth] = useState(false);
  const [page, setPage] = useState(1);
  const [token, setToken] = useState("")

  const handlePageChange = (val) => {
    setPage(page + val);
  };

  const login = (token) => {
    setIsAuth(true);
    setToken(token)
  };

  const logout = () => {
    setIsAuth(false);
    setToken("")
  };


  return (
    <AuthContext.Provider value={{ login, logout, isAuth, page, handlePageChange, token}}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;
