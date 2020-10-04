import styled from "styled-components";
import React from 'react';
import {useSpring,animated} from "react-spring";
import Slider from "react-slick";
import bake from "../assets/images/bake.svg"

//styled
const SliderContain = styled.div`
  max-width: 100%;
  height: 20rem;
  background : #eee;
  color:black;
  text-align: center;
`
const SliderImg = styled.img`
  max-width: 100%;
  height: 100%;
  display: block;
  `





function SimpleSlider(){
    const props = useSpring({opacity: 1, from: {opacity: 0}});
    const settings = {
      pauseOnFocus: false,
      pauseOnHover: false,
      pauseOnDotsHover: false,
      autoplay: true, 
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1
    };
  
    return (
      
      <div>
      <animated.div style={props}>
        <Slider {...settings}>
          <SliderContain>
            <SliderImg src={bake} alt="main"/>
          </SliderContain>
          <SliderContain>
            <h3>2</h3>
          </SliderContain>
          <SliderContain>
            <h3>3</h3>
          </SliderContain>
        </Slider>
      </animated.div>
  
      </div>
    );
  }
  
  export default SimpleSlider;