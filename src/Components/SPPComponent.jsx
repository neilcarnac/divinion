import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

const policies = [
  "Code of Conduct Policy",
  "Client Acceptance and PML Policy",
  "Conflict of Interest Policy",
  "Monitoring Investee Companies Policy",
  "Grievance Redressal Policy",
  "Insider Trading Policy",
  "Proxy Voting Policy",
  "Stewardship Policy",
  "Valuation Policy",
  "Risk Management Policy",
  "Investor Charter",
];

const SPPComponent = () => {
  return (
    <div className="flex flex-col w-full mx-auto">
      <p className="text-center p-4">
        {" "}
        {/* Added padding and centered text */}
        <a
          href="https://drive.google.com/drive/folders/1u9_s8i2xLv-P2Knq2vAkHx-syHdxd670"
          className="text-blue-500 hover:underline "
          target="_blank"
          rel="noopener noreferrer"
        >
          Click here
        </a>{" "}
        For Our Policies
      </p>
      <div className="flex flex-col gap-5">
        {policies.map((policy, index) => (
          <div
            key={index}
            className="p-4 w-3/4 mx-auto flex flex-col items-center shadow-sm hover:shadow-md cursor-pointer transition duration-500 bg-white rounded-md"
          >
            <div className="flex flex-row justify-between items-center gap-5 w-full mb-4">
              <p className="text-xl leading-tight font-semibold">{policy}</p>
              <a
                target="_blank"
                href="https://drive.google.com/drive/folders/1u9_s8i2xLv-P2Knq2vAkHx-syHdxd670"
              >
                <button className="p-3 rounded-full transition duration-500 hover:bg-black hover:text-white">
                  <FaExternalLinkAlt />
                </button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SPPComponent;
