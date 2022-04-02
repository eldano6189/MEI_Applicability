import { createContext, useEffect, useState } from "react";
import { Vehicles } from "../Data/Vehicles";

const VehData = createContext();

export const VehContext = ({ children }) => {
  const [search, setSearch] = useState("");
  const [veh, setVeh] = useState(Vehicles[0]);

  useEffect(() => {
    Vehicles.filter((vehicle) => {
      return vehicle.info.vrn === search.toUpperCase()
        ? setVeh(vehicle)
        : setVeh(Vehicles[0]);
    });
  }, [search]);

  console.log(search);
  console.log(veh);
  return (
    <VehData.Provider value={{ search, setSearch, veh }}>
      {children}
    </VehData.Provider>
  );
};

export default VehData;
