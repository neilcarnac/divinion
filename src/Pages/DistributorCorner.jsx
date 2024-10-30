import React from "react";

import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const DistributorCorner = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {" "}
      {/* Ensures the footer stays at the bottom */}
      <Navbar />
      <div className="flex-grow flex flex-col items-center justify-center py-10 font-joe">
        <p className="text-center p-4">
          {" "}
          {/* Added padding and centered text */}
          <a
            href="https://drive.google.com/drive/folders/1QhZdeWDJD6OQOoFj0rZyuNk71hpCFR-3?usp=sharing"
            className="text-blue-500 hover:underline "
            target="_blank"
            rel="noopener noreferrer"
          >
            Click here
          </a>{" "}
          for Distributor Empanelment forms.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default DistributorCorner;
