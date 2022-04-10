import { createContext, useEffect, useState } from "react";
import { Auth } from "aws-amplify";

const Data = createContext();

export const DataContext = ({ children }) => {
  const [user, setUser] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") === "true" ? true : false
  );

  useEffect(() => {
    const fetchUser = async () => {
      try {
        await Auth.currentSession();
        const user = await Auth.currentAuthenticatedUser();
        setLoggedIn(true);
        setUser(user);
      } catch (err) {}
    };
    fetchUser();
  }, []);

  return (
    <Data.Provider
      value={{
        loggedIn,
        setLoggedIn,
        user,
        setUser,
        theme,
        setTheme,
      }}
    >
      {children}
    </Data.Provider>
  );
};

export default Data;
