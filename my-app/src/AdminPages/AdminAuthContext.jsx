import React, { createContext, useState } from "react";

export const AdminAuthContext = createContext();

const AdminAuthContextProvider = ({ children }) => {
  const [adminAuth, setAdminAuth] = useState(false);

  const adminlogin = () => {
    setAdminAuth(true);
  };

  const adminlogout = () => {
    setAdminAuth(false);
  };

  return (
    <AdminAuthContext.Provider value={{ adminAuth, adminlogin, adminlogout }}>
      {children}
    </AdminAuthContext.Provider>
  );
};

export default AdminAuthContextProvider;
