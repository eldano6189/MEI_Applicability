import { createContext, useEffect, useState } from "react";
import { Auth } from "aws-amplify";

const Data = createContext();

export const DataContext = ({ children }) => {
  const [user, setUser] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const loggedInState = () => {
    Auth.currentAuthenticatedUser()
      .then(() => {
        setLoggedIn(true);
      })
      .catch(() => {
        setLoggedIn(false);
      });
  };

  useEffect(() => {
    loggedInState();
  }, []);

  return (
    <Data.Provider
      value={{
        loggedIn,
        setLoggedIn,
        setUser,
        user,
      }}
    >
      {children}
    </Data.Provider>
  );
};

export default Data;
