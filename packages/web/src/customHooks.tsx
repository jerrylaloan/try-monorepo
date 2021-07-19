import React, { useState, useContext } from "react";
import { AuthContext } from "./authContext";

export interface IUseAuthProvider {
  user: null | string;
  signIn: (email: string, password: string) => void;
  signOut: () => void;
}

export const useAuthProvider = (): IUseAuthProvider => {
  const [user, setUser] = useState<null | string>(null);

  const signIn = (email: string, password: string) => {
    if (email === "logmein@email.com" && password === "p@55w0rd")
      setUser(email);
  };

  const signOut = () => setUser(null);

  return {
    user,
    signIn,
    signOut,
  };
};

export const useAuth = () => useContext(AuthContext);
