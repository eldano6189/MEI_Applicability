import { DetailedView } from "./Detailed-view/DetailedView";
import { InfoPanel } from "./Info-panel/InfoPanel";
import { QuickView } from "./Quick-view/QuickView";

import { motion } from "framer-motion";

export const VehiclePage = ({ data }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <InfoPanel data={data} />
      <QuickView data={data} />
      <DetailedView data={data} />
    </motion.div>
  );
};
