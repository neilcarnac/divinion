import React from "react";

import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const ServicesForms = () => {
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
            href="https://drive.google.com/drive/folders/1u9_s8i2xLv-P2Knq2vAkHx-syHdxd670"
            className="text-blue-500 hover:underline "
            target="_blank" // Opens the link in a new tab
            rel="noopener noreferrer" // Security best practice
          >
            Click here
          </a>{" "}
          for Service related forms.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default ServicesForms;
