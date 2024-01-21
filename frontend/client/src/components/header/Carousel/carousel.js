import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Box, Image, Heading, AspectRatio, Highlight, useColorModeValue, IconButton } from '@chakra-ui/react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'; // Import arrow icons
const baseUrl = process.env.REACT_APP_BASE_URL 

const Carousel = () => {
  const [carouselImageData, setCarouselImageData] = useState([]);
  const sliderRef = useRef(null);

  const fetchCarouselImages = async () => {
    try {
      const res = await axios.get(`${baseUrl}/get-carousel-images`);
      if (res.status === 200) {
        setCarouselImageData(res.data.data);
      } else {
        console.log('Failed to fetch images');
      }
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  };
  useEffect(() => {
    fetchCarouselImages();
  }, []);

  // Define handleNext and handlePrev functions
  const handleNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext(); // Move to the next slide
    }
  };

  const handlePrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev(); // Move to the previous slide
    }
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
  };

  return (
    <Box bg={useColorModeValue('blue.500', 'blue.800')} >
      <Slider {...settings} ref={sliderRef}>
        {carouselImageData.map((image, index) => (
          <Box key={`carousel_${index}`}  >
            <AspectRatio ratio={{base: '0.8', sm: '0.8', md: '1', lg: '2'}}>
              <Image
                src={`data:image/jpeg;base64,${image.carouselImage}`}
                alt={image.imageTitle}
                objectFit="cover"
                w="100%"
              />
            </AspectRatio>
            
            <Heading
              pos='relative'
              style={{ transform: 'translateY(-130px)' }}
              as="h1"
              fontSize={{ base: '3xl', md: '5xl', lg: '6xl' }}
              textAlign="center"
              mt={4}
            >
              <Highlight
                query={image.imageTitle}
                styles={{ px: '3', py: '1', rounded: '10px', bg: "rgba(255,255,255,0.4)" }}
              >
                {image.imageTitle}
              </Highlight>
            </Heading>
          </Box>
        ))}
      </Slider>
      <IconButton
        bg={"transparent"}
        icon={<FaArrowLeft />}
        aria-label="Previous"
        onClick={handlePrev}
        position="absolute"
        top={{base:"0.8%", sm:"1.5%", md: "3%", lg:"6%", xl: "6%"}}
        left="2%"
        zIndex={4}
      />
      <IconButton
        bg={"transparent"}
        icon={<FaArrowRight />}
        aria-label="Next"
        onClick={handleNext}
        position="absolute"
        top={{base:"0.8%", sm:"1.5%", md: "3%", lg:"6%", xl: "6%"}}
        right="2%"
        zIndex={4}
      />
    </Box>
  );
};

export default Carousel;
