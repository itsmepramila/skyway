import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
  useColorModeValue,
  Center,
} from '@chakra-ui/react'

export default function CallToActionWithVideo() {
  // const [currentAboutUsData, setCurrentAboutUsData] = useState([])
  const navigate = useNavigate()
  const [data, setData] = useState([]);

//   const GetAboutUsData = async () => {
//     const res = await axios.get(`${baseUrl}/get-aboutuspage`)
//     if (res.data && res.data.headerData) {
//         setCurrentAboutUsData(res.data.headerData)
//     } else {
//         alert("Failed to fetch header data")
//     }
// }
const AboutData = async () => {
  try {
    const response = await axios.get('http://127.0.0.1:8000/api/navigations/');
    // Filter the response data by status and page_type
    if (response.data) {
      const DocumentData = response.data.filter(
        (item) => item.status === "Publish" && item.page_type === "About Us"
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

const aboutUsData = {
  image: '1.jpeg',
  text1: "Sky Way Management, A last resort of Manpower requirement to its clients, has started its service since 2013 then continuously supplies the manpower pertaining Blue to White Colors Workers in the Middle East and Malaysia. It has a team of competent, Talents who have worked in the sectors for decades. Team of Talents goes deep down through the requirements received by its value clients and always focuses for the best output meeting the target in one –go to save the time and effort of both the parties for fair and successful recruitment. We always value ethics and professionalism at the top. We excel in Hospitality, Facility Management, Security Services, Oil and Gas, Aviation and Ground Handling, Business need, MEP, Construction, and almost all sectors’ Manpower needs from our valued clients. We have a good nexus of training institutes and Vocational Training centers to source the skilled manpower. Besides these we have our own clear data base pool from where we source the competent and qualified aspirants to address the manpower need in one-go. We respect the job seekers, help them to enhance their skill and recommend the right job based on their cognitive power believing “Right person in the right Job” for the best result. Sky-Way Leaves no Stones unturned to serve its’ value client by all measures of multiple dimensions based on the new principle of Human Resources Management. We have a standard Skill test program to understand the competency level of job seekers looking for jobs in abroad and accordingly place them in fair recruitment based on merits. We believe in Ethical Recruitment; Equal and Free Recruitment opportunity for the Nepalese Workers. We are against Force Labor, Debt Bondage, and unfair recruitment practices .We respect the ILO and Human Right Mandate while recruiting the manpower and always put it on the Top priority."
}


// const Get50Words = async(inputText) => {
//   const words = await inputText.split(/\s+/);
//   const first50Words = words.slice(0, 50);
//   const result = first50Words.join(' ');
//   return result;
// }

// useEffect(() => {
//   GetAboutUsData()
// }, [])

  return (
    <Container maxW={'full'} bg={useColorModeValue('blue.500', 'gray.1000')} 
    color='white'>

        <Stack
          align={'center'}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }}
          px={{ base: 10, md: 20 }}
          direction={{ base: 'column', md: 'row' }}
          
        >
          <Flex
            flex={1}
            justify={'center'}
            align={'center'}
            position={'relative'}
            w={'full'}>
            <Box
              position={'relative'}
              height={'400px'}
              rounded={'2xl'}
              boxShadow={'2xl'}
              width={'full'}
              overflow={'hidden'}
              h={{ sm: '200', lg: '400px' }}
              >
          
              <Center>
                <Image
                data-aos="fade-right"
                data-aos-once="true"
                data-aos-duration="800"
                  alt={'Hero Image'}
                  fit={'cover'}
                  align={'center'}
                  w={'100%'}
                  h={'100%'}
                  src={data.bannerimage}
                    
                    _hover={{
                      transform: 'scale(1.05)',
                  }}
                  transition="0.4s ease-in-out"
                />
                </Center>
            </Box>
          </Flex>
          <Stack flex={1} spacing={{ base: 5, md: 10 }} align="center" >
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}
              >

              <Text as={'span'} 
              data-aos="flip-up"
              data-aos-once="true"
              data-aos-duration="800"
               >
                {data.name}
              </Text>
            </Heading>
            <Text  >
          {data.short_desc1}
            </Text>

            <Button
              rounded={'full'}
              size={'lg'}
              fontWeight={'bold'}
              px={6}
              w={"200px"}
              placeItems="center"
              color={useColorModeValue('blue.500', 'gray.900')}
              _hover={{ bg: 'whiteAlpha.900', color:'blue.600' }}
              onClick={() => navigate("/about-us")}
              bg={'whiteAlpha.800'}
            >
              Read More
            </Button>
          </Stack>
          
        </Stack>
    </Container>
  )
}
