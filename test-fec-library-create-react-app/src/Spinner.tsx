import React from "react";
import { CubeLoadingSpinner } from "@mdhnpm/react-cube-loading-spinner";

export const Spinner: React.VFC = () => (
  <div data-testid="hello">
    <CubeLoadingSpinner
      mainColor="pink"
      secondaryColor="purple"
      spinnerInnerHeight={10}
      spinnerSpeed={1.5}
    />
  </div>
);
