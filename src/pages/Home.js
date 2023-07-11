import React, { useState } from 'react'
import { Carousel, Container, Nav } from 'react-bootstrap'
import '../pages/header.css'
import Headroom from 'react-headroom';
import ImageSlider from '../component/ImageSlider';
import Navbar from '../component/Navbar';
import Customerrating from '../component/Customerrating';
import Footer from '../component/Footer';
import { MDBIcon } from 'mdb-react-ui-kit';
import Partner from '../component/Partner';
import { useTypewriter,Cursor } from 'react-simple-typewriter'

export default function Home() {

  const {text}=useTypewriter({
    words:['Partner','Partner'],
    loop:{}
  })

  const slides = [
    { url: "https://c4.wallpaperflare.com/wallpaper/59/97/72/design-sofa-furniture-watch-wallpaper-preview.jpg", title: 'furniture' },
    { url: "https://w0.peakpx.com/wallpaper/379/868/HD-wallpaper-black-and-white-decor-rug-lamp-window-books-plant-black-vase-silver-bed-furniture-tree-flowers-mirror-reflection-white.jpg", title: 'furniture' },
    { url: "https://c4.wallpaperflare.com/wallpaper/215/944/975/warm-and-modern-living-room-living-room-set-wallpaper-preview.jpg", title: 'furniture' },
    { url: "https://images6.alphacoders.com/125/1257448.jpg", title: 'furniture' },
    { url: "https://cdn.pixabay.com/photo/2016/11/18/17/20/living-room-1835923_1280.jpg", title: 'furniture' },
  ]



  return (
    <>
      <div id='nav'>
        <Navbar />


        {/* //   caurosel */}

        <div className='carousel' >
          <ImageSlider slides={slides} />
        </div>


        <div className='carousel-img'>
          <div className='wrap-content'>
          <div className="row ">
            <div className="col-md-6 content-1" >
              <div style={{ width: '500px', height: '400px' }}>
                <img className='section1-img1 py-4' height={'100%'} width={'100%'} src="https://assets-news.housing.com/news/wp-content/uploads/2022/10/07160457/15-Diwali-wallpaper-designs-to-liven-up-your-home-this-festive-season.jpg" alt="" />
              </div>
            </div>
            <div className="col-md-5 mt-4 content-text" >
              <div className='text-div' style={{ overflowY: 'hidden' }}>
                <h1 data-text="Furniture&nbsp;Land" className='text1'>Furniture&nbsp;Land</h1>
              </div>
              <div style={{ width: '100%' }} className=' text-div-p'>
                <p>Space has beauty and other dimensions ... we understand it</p>
              </div>
            </div>
          </div>

          <div className="row second-content">

            <div style={{ margin: '0 auto' }} className="col-md-5 content-text" >
              <div className='text-div' >
                <h1 data-text="Free&nbsp;Delivery" className='text1'>Free&nbsp;Delivery</h1>
              </div>
              <div style={{ width: '100%' }} className=' text-div-p'>
                <p>Anything, anytime, anywhere. We deliver it all.</p>
              </div>
            </div>
            <div className="col-md-6 content-1" >
              <div style={{ width: '500px', height: '400px' }} >
                <img className='section2-img2 py-4' height={'100%'} width={'100%'} src="https://media.istockphoto.com/id/1290253333/vector/loaders-carrying-armchair-and-boxes-in-new-house.jpg?s=612x612&w=0&k=20&c=FD33srnJ_k1pAiSb3i8SctfQ-dpjBgPIk62YBpG7Qzo=" alt="" />
              </div>
            </div>
          </div>
          </div>
          {/* google map */}
          <div className="map-div">
            <div className='map'>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d987.310195916035!2d77.25512377438963!3d8.178481436926255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b04fdfcdaf1bc0f%3A0xe70dde66046b9dec!2sAnith%20furniture!5e0!3m2!1sen!2sin!4v1688862561952!5m2!1sen!2sin" width="700" height="450" style={{ border: '0' }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className='location'>
              <div className='mt-2'><h3>We are Here</h3> </div>
              <div className='mt-2'><img src="https://cdn.dribbble.com/users/1518535/screenshots/7884443/media/a39dd96b64ea55f12b45be16b8b9fd1e.gif" alt="" /></div>
              <div className='youtube mt-2'>
                <iframe width="460" height="215" src="https://www.youtube.com/embed/RLm9Z8jhjW4?&mute=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen ></iframe>
              </div>
            </div>

          </div>

          {/* customer rating */}
          <div id='reviews' className='customer-div-text' style={{ overflowY: 'hidden' }}>
            <h1 data-text="Customer&nbsp;Review" className='text2'>Customer&nbsp;Review</h1>
          </div>

          <div className='customer-div'>
            <Customerrating/>
          </div>

          <div id='partner' className='customer-div-text' style={{ overflowY: 'hidden' }}>
            <h1 data-text="Partner" className='text4'>Partner</h1>
          </div>
          <div className='customer-div'>
          
            <Partner/>
          </div>

          <div id='contact'>
            <Footer/>
          </div>
        </div>
      </div>
      <a href="/#nav" class="top"><MDBIcon className='icon' fas icon="arrow-up" /></a>
    </>
  )
}
