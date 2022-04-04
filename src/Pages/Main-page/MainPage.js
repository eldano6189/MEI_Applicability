import { useContext } from "react";
import Data from "../../Context/Context";
import { DetailedView } from "./Detailed-view/DetailedView";
import { InfoPanel } from "./Info-panel/InfoPanel";
import { QuickView } from "./Quick-view/QuickView";
import { NotFound } from "./Not-found/NotFound";

export const MainPage = () => {
  const { search, found } = useContext(Data);

  return (
    <>
      {search === "" ? null : found ? (
        <>
          <InfoPanel />
          <QuickView />
          <DetailedView />
        </>
      ) : (
        <NotFound />
      )}
    </>
  );
};
