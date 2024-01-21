import React, { useState, useEffect } from 'react';
import axios from 'axios'

import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Container,
  Avatar,
  useColorModeValue,
} from '@chakra-ui/react'

interface Props {
  children: React.ReactNode
}

const Testimonial = (props: Props) => {
  const { children } = props

  return <Box>{children}</Box>
}

const TestimonialContent = (props: Props) => {
  const { children } = props

  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      boxShadow={'lg'}
      minH="150"
      minW="350"
      px={2}
      py={5}
      rounded={'xl'}
      align={'center'}
      pos={'relative'}
      _after={{
        content: `""`,
        w: 0,
        h: 0,
        borderLeft: 'solid transparent',
        borderLeftWidth: 16,
        borderRight: 'solid transparent',
        borderRightWidth: 16,
        borderTop: 'solid',
        borderTopWidth: 16,
        borderTopColor: useColorModeValue('white', 'gray.800'),
        pos: 'absolute',
        bottom: '-16px',
        left: '50%',
        transform: 'translateX(-50%)',
      }}>
      {children}
    </Stack>
  )
}

const TestimonialHeading = (props: Props) => {
  const { children } = props

  return (
    <Heading as={'h3'} fontSize={'xl'}>
      {children}
    </Heading>
  )
}

const TestimonialText = (props: Props) => {
  const { children } = props

  return (
    <Text
      textAlign={'center'}
      color={useColorModeValue('gray.600', 'gray.400')}
      fontSize={'sm'}>
      {children}
    </Text>
  )
}

const TestimonialAvatar = ({
  src,
  name,
  title,
}: {
  src: string,
  name: string,
  title: string,
}) => {
  return (
    <Flex align={'center'} mt={8} direction={'column'}>
      <Avatar src={src} mb={2} />
      <Stack spacing={-1} align={'center'}>
        <Text fontWeight={600} color={useColorModeValue('white', 'gray.400')}>{name}</Text>
        <Text fontSize={'sm'} color={useColorModeValue('gray.200', 'gray.400')}>
          {title}
        </Text>
      </Stack>
    </Flex>
  )
}

////////////MAIN FUNCTION /////////////////

const TestimonialCard = () => {

  const [banner, setBanner] = useState([])

  const AboutData = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/navigations/');
      // Filter the response data by status and page_type
      if (response.data) {
        const DocumentData = response.data.filter(
          (item) => item.status === "Publish" && item.page_type === "What Our Clients Say"
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
  
  //FETCH
  // const [testimonyData, setTestimonyData] = useState([])

  // const fetchTestimonies = async () => {
  //   try {
  //     const res = await axios.get(`${baseUrl}/get-testimonies`);
  //     const newData = await res.data.data
  //     setTestimonyData(newData)
  //     // console.log(testimonyData)
  //     // setLoading(false);
  //   } catch (error) {
  //     console.error('Error fetching data:', error);
  //     // setLoading(false);
  //   }
  // };

  // useEffect(() => {
  //   fetchTestimonies();
  // }, [])

    const testimonyData = [
        {
            "testimonyImage": "1.jpeg",
            "imageTitle": "I can send money home",
            "description": "Skyway helped me to find the job I was looking for. Now I can send money to my wife and children every month.",
            "name": "Ram Kumar Saapkota",
            "address": "Bake, Nepal",
        },
        {
            "testimonyImage": "2.jpeg",
            "imageTitle": "I loved the service",
            "description": "Skyway was extremely helpful, communicative, friendly and professional throughout the entire recruitment process.",
            "name": "Jay Kunwar",
            "address": "Bharatupr, Nepal",
        },
        {
            "testimonyImage": "3.jpeg",
            "imageTitle": "Testimony",
            "description": "Skyway was fantastic in helping me secure my first receptionist position! The staff were diligent, hardworking and always friendly.",
            "name": "Hari Thapa",
            "address": "Kathmandu, Nepal",
        }
    ]

  return (
    <Box bg={useColorModeValue('blue.600', 'gray.700')}
    >
      <Container maxW={'7xl'} py={16} as={Stack} spacing={12}>
        <Stack spacing={0} align={'center'} color='white'>
          <Heading>What Our Clients Say</Heading>
          <Text>We have been finding overseas jobs for clients from all over Nepal</Text>
        </Stack>
        <Stack
          direction={{ base: 'column', md: 'column', lg:"column", xl:"row" }}
          spacing={{ base: 10, md: 4, lg: 10 }}
          color={useColorModeValue('blue.700', 'gray.1000')}
        >
          {banner.map((testimony, id) => (
            <Testimonial  >
              <Box
                _hover={{
                  transform: 'scale(1.1)',
                  transition: '0.2s ease-in-out',
                }}
              >
                <TestimonialContent
                >
                  <TestimonialHeading>{testimony.name}</TestimonialHeading>
                  <TestimonialText>
                    {testimony.short_desc1}
                  </TestimonialText>
                </TestimonialContent>
              </Box>
              <TestimonialAvatar
                src={testimony.bannerimage}
                name={testimony.caption}
                title={testimony.title}
              />
            </Testimonial>
          ))}
        </Stack>

      </Container>
    </Box>
  )
}

export default TestimonialCard