import React from "react";
import { Circle } from "phosphor-react";

export const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center text-white animate-pulse">
      <div className="flex gap-2">
        <Circle
          weight="fill"
          className="w-6 h-6 text-primary-hover animate-bounce"
        />
        <Circle
          weight="fill"
          className="w-6 h-6 animate-bounce text-primary animation-delay-500"
        />
        <Circle
          weight="fill"
          className="w-6 h-6 animate-bounce text-primary-shape animation-delay-300"
        />
      </div>
    </div>
  );
};
