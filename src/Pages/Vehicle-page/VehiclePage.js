import { DetailedView } from "./Detailed-view/DetailedView";
import { InfoPanel } from "./Info-panel/InfoPanel";
import { QuickView } from "./Quick-view/QuickView";

export const VehiclePage = ({ data }) => {
  return (
    <>
      <InfoPanel data={data} />
      <QuickView data={data} />
      <DetailedView data={data} />
    </>
  );
};
