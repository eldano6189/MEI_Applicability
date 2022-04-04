import { useContext } from "react";
import { Auth } from "aws-amplify";

import Data from "../../Context/Context";

export const SignOut = () => {
  const { setLoggedIn } = useContext(Data);

  const signOut = async () => {
    try {
      await Auth.signOut();
      setLoggedIn(false);
    } catch (error) {
      console.log("error signing out: ", error);
    }
  };

  return (
    <button className="button" onClick={signOut}>
      Log Out
    </button>
  );
};
