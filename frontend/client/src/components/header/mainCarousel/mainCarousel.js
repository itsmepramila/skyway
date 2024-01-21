import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { AspectRatio, Box } from "@chakra-ui/react"
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './styles.css'
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import axios from 'axios'

const MainCarousel = () => {
  const [banner, setBanner] = useState([])

  const AboutData = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/navigations/');
      // Filter the response data by status and page_type
      if (response.data) {
        const DocumentData = response.data.filter(
          (item) => item.status === "Publish" && item.page_type === "Home/Banner"
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
  

  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={0}
      speed={1500}
      loop={true}
      pagination={{
        clickable: true,
      }}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className={"mySwiper relative mt-[100px]"}
    >
      {banner.map((item, index) => (
        <SwiperSlide key={index}>
          <Box 
          pos="relative"
          alignItems="center"
          justifyContent="center"
          justifyItems="center"
          >

            <AspectRatio ratio={16 / 9} w="full" h="70vh">
              <Box
              pos="absolute"
                as="img"
                src={item.bannerimage}
                alt="Carousel image"
                objectFit="cover"
                style={{ filter: 'brightness(0.7)' }}
              />
            </AspectRatio>
            
          </Box>

        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default MainCarousel