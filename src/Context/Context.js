import { createContext, useEffect, useState } from "react";
import { Auth } from "aws-amplify";

const Data = createContext();

export const DataContext = ({ children }) => {
  const [user, setUser] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      const session = await Auth.currentSession();
      setLoggedIn(true);
      console.log(session);
      const user = await Auth.currentAuthenticatedUser();
      setUser(user);
    };
    fetchUser();
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
