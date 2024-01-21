import React, { useState, useEffect } from 'react';
import axios from 'axios'
import {
  Box,
  chakra,
  Flex,
  useColorModeValue,
} from '@chakra-ui/react'

const ImageParagraph = () => {
  const [data, setData] = useState([]);

  const AboutData = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/navigations/');
      // Filter the response data by status and page_type
      if (response.data) {
        const DocumentData = response.data.filter(
          (item) => item.status === "Publish" && item.page_type === "MESSAGE FROM CHAIRMAN"
        );
        setData(DocumentData[0]); // Assuming you want to slice the filtered data
       
       
      }}
      catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  
  useEffect(() => {
    // Axios GET request to fetch data
    AboutData();
  }, []);
  // const [chairmanMessageData, setChairmanMessageData] = useState({});

  // const fetchData = async () => {
  //   try {
  //     const response = await axios.get(`${baseUrl}/get-companymessage1`);
  //     const data = response.data
  //     setChairmanMessageData(data)
  //   } catch (error) {
  //     console.error('Error fetching data:', error);
  //   }
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  const chairmanMessageData = {
    image: '1.png',
    title: 'MESSAGE FROM CHAIRMAN',
    text: 'Dear Valued Clients and Associates Greeting From SKY WAY MANAGEMENT Since its’ operation SKY WAY Management is always propelled with the Ethic and professionalism at the Top. We are always dedicated to our valued clients for meeting their need at one-go to save the time and effort while recruiting the competent aspirants in the jobs. We have a systematic procedure to hire the candidates in job based on their skills and experience which values for the operations of our valued client for the best out-put throughout the human capital. We have a vast knowing of context of the work and its nature as per the requirement we receive from our clients and accordingly address for the best',
  }

  return (
    <Flex

      _dark={{
        bg: "#3e3e3e",
      }}
      p={10}
      w="full"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        minH={"400px"}
        bg={useColorModeValue('blue.500', 'gray.1000')}
        color={useColorModeValue('white', 'gray.1000')}

        _dark={{
          bg: "gray.800",
        }}
        mx={{
          lg: 8,
        }}
        display={{
          lg: "flex",
        }}
        maxW={{
          lg: "7xl",
        }}
        w={"full"}
        maxH={"1000px"}
        shadow={{
          lg: "lg",
        }}
        rounded={{
          lg: "lg",
          base: "lg"
        }}
      >
        <Box
          py={12}
          px={6}
          maxW={{
            base: "xl",
            lg: "2xl",
          }}
          w={{
            lg: "50%",
          }}
        >
          <chakra.h2
            fontSize={{
              base: "2xl",
              md: "3xl",
            }}

            _dark={{
              color: "white",
            }}
            fontWeight="bold"
          >
            {" "}
            <chakra.span

              _dark={{
                color: "brand.400",
              }}
            >
              {data.name}
            </chakra.span>
          </chakra.h2>
          <chakra.p
            mt={4}

            _dark={{
              color: "gray.400",
            }}
            align={'left'}
            data-aos="fade-left"
            data-aos-once="true"
            data-aos-duration="800"
          >
            {data.short_desc1}
          </chakra.p>
        </Box>
        <Box
          w={{
            lg: "50%",
          }}
        >
          <Box
            h={{
              base: 64,
              lg: "full",
            }}
            roundedRight={{
              lg: "lg",
            }}
            rounded={{
              base: "lg",
            }}
            bgSize="cover"
            style={{
              backgroundImage: `url("${data.bannerimage}")`
            }}
          ></Box>
        </Box>
      </Box>
    </Flex>
  )
}

export default ImageParagraph