import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import PrivateRoute from "./PrivateRoute";
import Private from "./Private";
import Login from "./Login";
import AuthProvider from "./AuthProvider";
import Public from "./Public";
import NavBar from "./NavBar";

function App() {
  return (
    <ChakraProvider>
      <AuthProvider>
        <BrowserRouter>
          <NavBar />

          <Switch>
            <Route path="/" component={Public} exact />
            <Route path="/login" component={Login} exact />
            <PrivateRoute path="/private-page" component={Private} exact />
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </ChakraProvider>
  );
}

export default App;
