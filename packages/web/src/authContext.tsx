import React, { createContext } from "react";
import { IUseAuthProvider } from "./customHooks";

export const AuthContext = createContext<IUseAuthProvider | null>(null);
