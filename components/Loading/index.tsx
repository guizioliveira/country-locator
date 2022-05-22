import React from "react";
import { Circle } from "phosphor-react";

export const Loading = () => {
  return (
    <div className="flex animate-pulse flex-col items-center justify-center text-white">
      <div className="flex gap-2">
        <Circle
          weight="fill"
          className="h-6 w-6 animate-bounce text-primary-hover"
        />
        <Circle
          weight="fill"
          className="h-6 w-6 animate-bounce text-primary animation-delay-500"
        />
        <Circle
          weight="fill"
          className="h-6 w-6 animate-bounce text-primary-shape animation-delay-300"
        />
      </div>
    </div>
  );
};
