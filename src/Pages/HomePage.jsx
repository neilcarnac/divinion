import React from 'react'
import Dashboard from '../Components/dashboard/Dashboard'
import BannerOne from '../Components/BannerOne'
import BannerTwo from '../Components/BannerTwo'
import Footer from '../Components/Footer'
import HomBanOne from '../Components/HomBanOne'
import HomBanTwo from '../Components/HomBanTwo'
import HomeBanThree from '../Components/HomeBanThree'
const HomePage = () => {
  return (
    <>
      <HomBanOne />
      <HomBanTwo />
      <HomeBanThree />
      {/* <BannerOne />
      <BannerTwo /> */}
      {/* <Dashboard /> */}
    </>
  )
}

export default HomePage
