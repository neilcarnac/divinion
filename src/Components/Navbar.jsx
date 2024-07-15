import React, { useState } from 'react'

function Navbar() {
  const [show, setShow] = useState(false);

  function onNavClick() {
    setShow(!show);
    console.log(show)
  }
  return (
    <>
      <nav className="sticky z-30 top-0 p-2 bg-transparent">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">

          {!show &&
            <>
              <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
                <img src="logo.svg" className="h-8" alt="Flowbite Logo" />
              </a>
              <button data-collapse-toggle="navbar-default" onClick={onNavClick} type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 f dark:text-gray-400 dark:hover:bg-gray-700 " aria-controls="navbar-default" aria-expanded="false">

                {/* <span className="sr-only">Open main menu</span> */}
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                </svg>
              </button>
            </>
          }



          <div className="hidden md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a href="/" className="block py-2 px-3 text-white bg-green-700 rounded md:bg-transparent md:text-green-700 md:p-0 dark:text-white md:dark:text-green-500" aria-current="page">Home</a>
              </li>
              <li>
                <a href="/about" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-500 md:p-0 dark:text-white md:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-green-500 md:dark:hover:bg-transparent">About</a>
              </li>
              <li>
                <a href="/blog" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-500 md:p-0 dark:text-white md:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-green-500 md:dark:hover:bg-transparent">News</a>
              </li>
              <li>
                <a href="/careers" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-500 md:p-0 dark:text-white md:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-green-500 md:dark:hover:bg-transparent">Careers</a>
              </li>
              <li>
                <a href="/contact" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-500 md:p-0 dark:text-white md:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-green-500 md:dark:hover:bg-transparent">Contact</a>
              </li>
            </ul>
          </div>

        </div>
      </nav>
      {show &&
        <>
          <div className="flex flex-col items-center  pl-10 pr-10 h-[92vh] w-full bg-white gap-24">
            <div className="flex flex-row items-center gap-20 ">
              <button onClick={onNavClick}>
                <p className='text-xl text-[#7B61FF]'>X</p>
              </button>
              <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
                <img src="logo.svg" className="h-7" alt="Flowbite Logo" />
              </a>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 text-[#7B61FF]">
                <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
              </svg>
            </div>
            <div className="flex flex-col items-center gap-8 font-joe text-2xl font-semibold">
              <button className='bg-transparent outline-none hover:border-2 pl-20 pr-20 pt-2 pb-2 hover:border-black'>
                <a href="/">
                  <p>
                    Home
                  </p>
                </a>
              </button>
              <button className='bg-transparent outline-none hover:border-2 pl-20 pr-20 pt-2 pb-2 hover:border-black'>
                <a href="/about">
                  <p>
                    About Us
                  </p>
                </a>
              </button>
              <button className='bg-transparent outline-none hover:border-2 pl-20 pr-20 pt-2 pb-2 hover:border-black'>
                <a href="/blog">
                  <p>
                    News
                  </p>
                </a>
              </button>
              <button className='bg-transparent outline-none hover:border-2 pl-20 pr-20 pt-2 pb-2 hover:border-black'>
                <a href="/careers">
                  <p>
                    Careers
                  </p>
                </a>
              </button>
            </div>
            <div className="flex flex-col text-gray-500">
              <a href="/login">
                <p>
                  Login as a Customer
                </p>
              </a>

            </div>

            <div className="">
              <p onClick={onNavClick}>--------------------</p>
            </div>
          </div>
        </>
      }

    </>
  )
}

export default Navbar
