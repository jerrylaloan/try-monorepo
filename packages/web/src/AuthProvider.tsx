import React from "react";
import { AuthContext } from "./authContext";
import { useAuthProvider } from "./customHooks";

interface AuthProviderProps {}

const AuthProvider: React.FunctionComponent<AuthProviderProps> = ({
  children,
}) => {
  const auth = useAuthProvider();

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
