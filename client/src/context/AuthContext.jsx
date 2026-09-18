import React, { createContext, useContext, useState } from "react";
const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")) || null);
  const signIn = (data) => { localStorage.setItem("token", data.token); localStorage.setItem("user", JSON.stringify(data.user)); setUser(data.user); };
  const logout = () => { localStorage.removeItem("token"); localStorage.removeItem("user"); setUser(null); };
  return <AuthContext.Provider value={{ user, signIn, logout }}>{children}</AuthContext.Provider>;
};
export const useAuth = () => useContext(AuthContext);
