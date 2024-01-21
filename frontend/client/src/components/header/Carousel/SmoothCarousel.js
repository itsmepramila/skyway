import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./SmoothCarousel.css"
import { Box, Image, Center, VStack } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import axios from 'axios'
const CustomPrevArrow = (props) => {
    return <></>; // Empty fragment to hide the button
};

const CustomNextArrow = (props) => {
    return <></>; // Empty fragment to hide the button
};



const Carousel = () => {
  const [banner, setBanner] = useState([])

  const AboutData = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/navigations/');
      // Filter the response data by status and page_type
      if (response.data) {
        const DocumentData = response.data.filter(
          (item) => item.status === "Publish" && item.page_type === "Our Clients"
        );
        setBanner(DocumentData);
        // Assuming you want to slice the filtered data
      }
    }
    catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    // Axios GET request to fetch data
    AboutData();
  }, []);
const carouselImageData = [
  {
    carouselImage: "1.jpg"
  },
  {
    carouselImage: "2.jpg"
  },
  {
    carouselImage: "3.png"
  },
  {
    carouselImage: "4.jpg"
  },
  {
    carouselImage: "5.png"
  },
  {
    carouselImage: "6.jpg"
  },
  {
    carouselImage: "7.jpg"
  },
  {
    carouselImage: "8.jpg"
  },
  {
    carouselImage: "9.jpg"
  },

]

    const settings = {
        dots: false,
        infinite: true,
        speed: 5000, // Adjust the speed as needed
        slidesToShow: 4, // Set to a value greater than the number of slides
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 0, // Set to 0 to continuously scroll without delay
        pauseOnHover: true, // Set to false to prevent stopping on hover
        cssEase: 'linear',
        prevArrow: <CustomPrevArrow />, // Use the custom prevArrow component
        nextArrow: <CustomNextArrow />,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
            },
          },
        ],
    };

    return (
        <Box w="90%">
        <Slider {...settings}>
          {banner.map((imageData, index) => (
            <Center key={index}>
              <VStack spacing={5} mb={30}>
                <Box
                  height="150px" // Set a fixed height
                  width="100%" // Take full width of the container
                  display="flex"
                  justifyContent="center" // Vertically align content
                  overflow="hidden" // Hide image overflow
                >
                  <Image
                    h="100%" // Maximize image height within the container
                    w="auto" // Maintain image's aspect ratio
                    objectFit="contain" // Fit image within the box
                    src={imageData.bannerimage}
                    alt={imageData.imageTitle}
                  />
                </Box>
              </VStack>
            </Center>
          ))}
        </Slider>
      </Box>
    );
  };
export default Carousel;
