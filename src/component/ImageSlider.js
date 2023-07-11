import React, { useState } from 'react'

export default function ImageSlider({slides}) {
    const [currentIndex, setCurrentIndex]=useState(0)

    // carousel
    const sliderStyles={
        height:'100%', 
        position:'relative',
        overflowY:'hidden',
        paddingBottom:'20px'
    }
    const SlideStyle={
        width:'100%',
        height:'90%',
        borderRadius:'10px',
        backgroundImage:`url(${slides[currentIndex].url})`,
        backgroundPosition:'center',
        backgroundSize:'cover'

    }
    const leftArrowStyle={
        position:'absolute',
        top:'50%',
        transform: 'translate(0, -50%)',
        left:'32px',
        fontSize:'45px',
        color:'#fff',
        zIndex:1,
        cursor:'pointer'
    }
    const rightArrowStyle={
        position:'absolute',
        top:'50%',
        transform: 'translate(0, -50%)',
        right:'32px',
        color:'#fff',
        fontSize:'45px',
        zIndex:1,
        cursor:'pointer'
    }
    const goToPrev= ()=>{
        const isFirstSlide= currentIndex===0
        const newIndex= isFirstSlide ? slides.length -1 : currentIndex - 1
        setCurrentIndex(newIndex)
    }
    const goToNext= ()=>{
        const isLastSlide= currentIndex === slides.length -1  
        const newIndex= isLastSlide ? 0 : currentIndex + 1
        setCurrentIndex(newIndex)
    }
    const goToSlide=(slideIndex)=>{
        setCurrentIndex(slideIndex)
    }

    const dotsContainerStyle={
        display:'flex',
        justifyContent:'center',
        marginTop:'10px'
    }

    const dotSyles={
        margin:'0 3px',
        cursor:'pointer',
        fontSize:'20px',
    }

  return (
    <div style={sliderStyles}>
        <div style={leftArrowStyle} onClick={goToPrev}> ◄ </div>
        <div style={rightArrowStyle} onClick={goToNext}>►</div>
        <div style={SlideStyle}></div>
        <div style={dotsContainerStyle}>
            {slides.map((slides,slideIndex)=>(
                <div key={slideIndex} style={dotSyles} onClick={()=> goToSlide(slideIndex)}>⚫</div>
            ))}
        </div>
    </div>
  )
}
