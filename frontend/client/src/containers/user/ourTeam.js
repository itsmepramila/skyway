import React, { useState, useEffect } from 'react';

import GalleryPhotoCard from "../../components/card/galleryPhotoCard";
import {
    Heading, Grid, Center, useColorModeValue, Image, Box, Text
} from '@chakra-ui/react'
import axios from 'axios';

const OurTeam = () => {
    const [team, setTeam] = useState([])

    const TeamData = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/navigations/');
        // Filter the response data by status and page_type
        if (response.data) {
          const DocumentData = response.data.filter(
            (item) => item.status === "Publish" && item.page_type === "Our Team"
          );
          setTeam(DocumentData);
          // Assuming you want to slice the filtered data
        }
      }
      catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  
    useEffect(() => {
      // Axios GET request to fetch data
      TeamData();
    }, []);


    const teamImages = [
        {
            image: "1.jpeg",
            title: "President",
            name: "Bhupendra Kadariya",
            email: "bhupendrakadariya83@gmail.com",
        },
        {
            image: "2.jpeg",
            title: "Director",
            name: "Manoj Dahal",
            email: "info@skywaynepal.com",
        },
        {
            image: "3.jpeg",
            title: "Country Director, Qatar",
            name: "Aftab Khan",
            email: "aftaabkhan.official@gmail.com",
        },
        {
            image: "4.jpeg",
            title: "Country Director, UAE",
            name: "Tulsi Poudyal",
            email: "md.skywayuae@gmail.com",
        },
    ]

    return (
        <Center
            py={10}
            bg={useColorModeValue('blue.600', 'gray.800')}
            color='gray.100'
            w={"full"}
        >
            <Heading m={2} fontSize={'3xl'} fontFamily={'body'} p={5}>
                Our Team
                <Grid templateColumns={{ sm: '1fr', lg: '1fr 1fr 1fr 1fr' }} gap={5} p={10} align="center" rowGap={5}>
                    {team && team.map((item, index) => (
                        <Box
                            reative
                            h="250px"
                            m="20px"
                        >
                            <Image
                                src={item.bannerimage}
                                alt={item.caption}
                                rounded={"10px"}
                                border={"2px solid white"}
                                objectFit='cover'
                                h="200px"
                                w="100%"
                                _hover={{
                                    transform: 'scale(1.05)',
                                }}
                                transition="0.4s ease-in-out"
                                absoulte
                            />
                            <Box
                                absolute
                                p={2}
                            >
                                <Text
                                    absolute
                                    fontSize={20}
                                >
                                    {item?.name}
                                </Text>
                                <Text
                                    absolute
                                    color="red.400"
                                    fontSize={18}
                                >
                                    {item?.caption}
                                </Text>
                                <Text
                                    absolute
                                    fontSize={14}
                                    // fontStyle="italic"
                                    fontWeight="6"
                                    color="teal.100"
                                >
                                    {item?.title}
                                </Text>
                            </Box>
                        </Box>
                    ))}
                </Grid>
            </Heading>
        </Center>
    )
}

export default OurTeam