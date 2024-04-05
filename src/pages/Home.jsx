import React from 'react'
import Header from '../layout/Header/Header'
import BannerSlider from '../component/BannerSlider'
import Notification from '../component/Notification'
import AboutUs from '../component/AboutUs'
import Podcost from '../component/Podcost'
import QuickLink from '../component/QuickLink'
import PhotoGallery from '../component/PhotoGallery'
import Events from '../component/Events'
import LogoSlider from '../component/LogoSlider'
import Footer from '../layout/Footer'
import '../css/font.css'

export default function () {
  return (
    <>
     <Header/>
     <BannerSlider/>
     <Notification/>
     <AboutUs/>
     <Podcost/>
     <QuickLink/>
     <PhotoGallery/>
     <Events/>
     <LogoSlider/>
     <Footer/>
    </>
  )
}
