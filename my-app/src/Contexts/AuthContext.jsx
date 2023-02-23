import React, { createContext, useState } from "react";

export const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const [isAuth, setIsAuth] = useState(false);
  const [page, setPage] = useState(1);
  const [cart, setCart] = useState([]);
  const handlePageChange = (val) => {
    setPage(page + val);
  };

  const login = () => {
    setIsAuth(true);
  };

  const logout = () => {
    setIsAuth(false);
  };

  const handleCart = (item) =>{
    let prod = [...cart, item]
    setCart(prod)
    console.log(cart)
  }

  return (
    <AuthContext.Provider value={{ login, logout, isAuth, page, handlePageChange, cart , handleCart}}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;
