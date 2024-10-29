import React from "react";
import { FaMapLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { IoCallSharp } from "react-icons/io5";

const ContactMe = () => {
  return (
    <>
      <div className="flex font-joe flex-col text-white ">
        {/* <p className="text-4xl font-semibold">Contact Me</p> */}
        <div className="flex flex-col items-start justify-center">
          <div className="flex flex-col  gap-8 items-center justify-center mx-auto">
            <div className="flex flex-col  items-center text-center">
              <FaMapLocationDot className=" w-20 h-20" />
              <p className="text-2xl font-semibold">Address</p>
              <p className="">
                1408, Maker Chambers V, Nariman Point, Mumbai - 400021
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <IoMdMail className="text-white w-20 h-20" />
              <p className="text-2xl font-semibold">Email</p>
              <a
                href="mailto:connect@divinion.in"
                className="underline text-white"
              >
                connect@divinion.in
              </a>
            </div>

            <div className="flex flex-col items-center text-center">
              <IoCallSharp className="text-white w-20 h-20" />
              <p className="text-2xl font-semibold">Mobile Number</p>

              <a href="tel:+912235130730" className="underline text-white">
                +91 2235130730
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactMe;
