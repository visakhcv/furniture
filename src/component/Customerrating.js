import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import './customerrating.css'

// card
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Customerrating() {
  return (
    <div style={{ width: '100%' }}>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 200,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={
          true
        }
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className='img'>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                alt="green iguana"
                height="200"
                image="https://images.unsplash.com/photo-1502323703385-c3ea9ace787d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NHw4NjYyMzA3MXx8ZW58MHx8fHx8&w=1000&q=80"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lisa
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over 6,000
                  species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
              
            </Card>
          </div>

        </SwiperSlide>
        <SwiperSlide>
        <div className='img'>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                alt="green iguana"
                height="200"
                image="https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw4NjYyMzA3MXx8ZW58MHx8fHx8&w=1000&q=80"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Kevin
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over 6,000
                  species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
              
            </Card>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='img'>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                alt="green iguana"
                height="200"
                image="https://images.unsplash.com/photo-1609902726285-00668009f004?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wwfDF8c2VhcmNofDQzfHxoYXBweXxlbnwwfHx8fDE2MTU4OTMxMDU&ixlib=rb-1.2.1&q=80&w=2000"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Adrianne
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over 6,000
                  species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
              
            </Card>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='img'>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                alt="green iguana"
                height="200"
                image="https://img.freepik.com/free-photo/portrait-confident-bearded-man-earphones_171337-4769.jpg"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Steve Roger
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over 6,000
                  species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
              
            </Card>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='img'>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                alt="green iguana"
                height="200"
                image="https://img.freepik.com/free-photo/have-you-heard-what-guy-said-portrait-carefree-friendly-male-coworker-with-moustache-beard-pointing-right-with-thumb-smiling-broadly-indicating-person-gossiping-about-him_176420-22488.jpg"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Julius
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over 6,000
                  species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
              
            </Card>
          </div>
        </SwiperSlide>
        {/* <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
        </SwiperSlide> */}
      </Swiper>
    </div>
  )
}
