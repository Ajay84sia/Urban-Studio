import React, { createContext, useState } from "react";

export const AdminAuthContext = createContext();

const AdminAuthContextProvider = ({ children }) => {
  const [adminAuth, setAdminAuth] = useState(false);
  const [page, setPage] = useState(1);

  const handlePageChange = (val) => {
    setPage(page + val);
  };

  const adminlogin = () => {
    setAdminAuth(true);
  };

  const adminlogout = () => {
    setAdminAuth(false);
  };

  return (
    <AdminAuthContext.Provider value={{ adminAuth, adminlogin, adminlogout , handlePageChange, page}}>
      {children}
    </AdminAuthContext.Provider>
  );
};

export default AdminAuthContextProvider;
