import { createContext, useEffect, useState } from "react";
import { Vehicles } from "../Data/Vehicles";
import { Auth } from "aws-amplify";

const Data = createContext();

export const DataContext = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [search, setSearch] = useState("");
  const [found, setFound] = useState(false);
  const [veh, setVeh] = useState(Vehicles[0]);

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

  useEffect(() => {
    Vehicles.filter((vehicle) => {
      return vehicle.info.vrn === search.toUpperCase()
        ? (setVeh(vehicle), setFound(true))
        : (setVeh(Vehicles[0]), setFound(false));
    });
  }, [search]);

  return (
    <Data.Provider
      value={{
        search,
        setSearch,
        veh,
        found,
        loggedIn,
        setLoggedIn,
      }}
    >
      {children}
    </Data.Provider>
  );
};

export default Data;
