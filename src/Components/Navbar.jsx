import React, { useState, useContext, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { UserContext } from "../Context/UserContext"; // Adjust the path as necessary

function Navbar() {
  const [show, setShow] = useState(false);
  const location = useLocation();
  const { isAdmin } = useContext(UserContext); // Get isAdmin from context
  const [servicesDropdown, setServicesDropdown] = useState(false); // State for services dropdown
  const [visible, setVisible] = useState(true); // State for navbar visibility
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset); // Track the scroll position

  // Toggle navbar visibility based on scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isScrollingUp = prevScrollPos > currentScrollPos;
      setVisible(isScrollingUp || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener when the component is unmounted
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  function onNavClick() {
    setShow(!show);
  }
  function toggleServicesDropdown() {
    setServicesDropdown(!servicesDropdown);
  }

  // Function to determine if the link is active
  const isActive = (path) => location.pathname === path;
  // ${visible ? 'translate-y-0' : '-translate-y-full'
  // }
  return (
    <>
      <nav
        className={`z-30 top-0 p-2 sticky bg-white transition-transform duration-300 `}
      >
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          {!show && (
            <>
              <div className="flex items-center justify-center">
                <a
                  href="/"
                  className="flex items-center space-x-3 rtl:space-x-reverse"
                >
                  <img src="logo.svg" className="h-12" alt="Logo" />
                </a>

                <button
                  data-collapse-toggle="navbar-default"
                  onClick={onNavClick}
                  type="button"
                  className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 "
                  aria-controls="navbar-default"
                  aria-expanded="false"
                >
                  <svg
                    className="w-5 h-5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 17 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 1h15M1 7h15M1 13h15"
                    />
                  </svg>
                </button>
              </div>
            </>
          )}

          <div className="hidden md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 ">
              <li>
                <Link
                  to="/"
                  className={`block py-2 px-3 rounded md:p-0 ${
                    isActive("/")
                      ? "text-dark-green"
                      : "text-gray-900 hover:text-dark-green"
                  }`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className={`block py-2 px-3 rounded md:p-0 ${
                    isActive("/about")
                      ? "text-dark-green"
                      : "text-gray-900 hover:text-dark-green"
                  }`}
                >
                  Approach
                </Link>
              </li>
              {/* <li>
                <Link
                  to="/team"
                  className={`block py-2 px-3 rounded md:p-0 ${
                    isActive("/about")
                      ? "text-dark-green"
                      : "text-gray-900 hover:text-dark-green"
                  }`}
                >
                  Team
                </Link>
              </li> */}
              <li>
                <Link
                  to="/blog"
                  className={`block py-2 px-3 rounded md:p-0 ${
                    isActive("/blog")
                      ? "text-dark-green"
                      : "text-gray-900 hover:text-dark-green"
                  }`}
                >
                  News
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className={`block py-2 px-3 rounded md:p-0 ${
                    isActive("/contact")
                      ? "text-dark-green"
                      : "text-gray-900 hover:text-dark-green"
                  }`}
                >
                  Contact
                </Link>
              </li>

              {isAdmin && (
                <li>
                  <Link
                    to="/admin"
                    className={`block py-2 px-3 rounded md:p-0 ${
                      isActive("/admin")
                        ? "text-dark-green"
                        : "text-gray-900 hover:text-dark-green"
                    }`}
                  >
                    Dashboard
                  </Link>
                </li>
              )}
              <li className="relative">
                <button
                  onClick={toggleServicesDropdown}
                  className={`block py-2 px-3 rounded md:p-0 ${
                    isActive("/services")
                      ? "text-dark-green"
                      : "text-gray-900 hover:text-dark-green"
                  }`}
                >
                  Services
                </button>
                {servicesDropdown && (
                  <ul className="absolute top-full left-0 mt-1 w-36 bg-white shadow-lg rounded-md z-10">
                    <li>
                      <Link
                        to="/services-form"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                      >
                        Form
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/distributor-corner"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                      >
                        Distributors Corner
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/services-privacy-policy"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                      >
                        Policies
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/disclosures"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                      >
                        Disclosures
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {show && (
        <div className="flex flex-col items-center pl-10 pr-10 h-[92vh] w-full bg-white gap-24">
          {/* Mobile menu */}
          <div className="flex flex-row items-center gap-20">
            <button onClick={onNavClick}>
              <p className="text-xl text-[#7B61FF]">X</p>
            </button>
            <a
              href="/"
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <img src="logo.svg" className="h-10" alt="Logo" />
            </a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6 text-[#7B61FF]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
              />
            </svg>
          </div>
          <div className="flex flex-col items-center gap-4 font-joe text-2xl font-semibold">
            <button className="bg-transparent outline-none hover:border-2 pl-20 pr-20 pt-2 pb-2 hover:border-black">
              <Link to="/">Home</Link>
            </button>
            <button className="bg-transparent outline-none hover:border-2 pl-20 pr-20 pt-2 pb-2 hover:border-black">
              <Link to="/about">About Us</Link>
            </button>
            <button className="bg-transparent outline-none hover:border-2 pl-20 pr-20 pt-2 pb-2 hover:border-black">
              <Link to="/blog">News</Link>
            </button>
            <button className="bg-transparent outline-none hover:border-2 pl-20 pr-20 pt-2 pb-2 hover:border-black">
              <Link to="/contact">Contact</Link>
            </button>
            <button className="bg-transparent outline-none hover:border-2 pl-20 pr-20 pt-2 pb-2 hover:border-black">
              <Link to="/services-privacy-policy">Services</Link>
            </button>
          </div>
          <div className="flex flex-col items-center text-gray-500">
            <Link to="/privacy-policy" className="mb-4">
              Terms and Conditions
            </Link>
            <Link to="/privacy-policy">Privacy Policies</Link>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
