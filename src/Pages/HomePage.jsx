import React from 'react'
import Dashboard from '../Components/dashboard/Dashboard'
import BannerOne from '../Components/BannerOne'
import BannerTwo from '../Components/BannerTwo'
import HomBanOne from '../Components/HomBanOne'
import HomBanTwo from '../Components/HomBanTwo'
import HomeBanThree from '../Components/HomeBanThree'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
const HomePage = () => {
  return (
    <>
      <Navbar />

      <HomBanOne />
      <HomBanTwo />
      <HomeBanThree />
      <Footer />

      {/* <BannerOne />
      <BannerTwo /> */}
      {/* <Dashboard /> */}
    </>
  )
}

export default HomePage
