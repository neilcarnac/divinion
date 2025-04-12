import React from "react";

export default function Unavailable() {
  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-4">
      <div className="w-12 h-12 border-4 border-gray-300 border-t-black rounded-full animate-spin"></div>
      <h1 className="text-2xl font-semibold text-center">
        Unable to load at the moment
      </h1>
    </div>
  );
}
