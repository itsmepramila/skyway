import React, { useState, useEffect } from 'react';
import axios from 'axios'
import {
  Grid, Heading, Text, Box, useColorModeValue, Image, Center, Modal, ModalOverlay, ModalContent, useDisclosure, ModalBody
} from '@chakra-ui/react'

const Newspaper = () => {
  // const [newspaperAds, setNewspaperAds] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedAdIndex, setSelectedAdIndex] = useState(null);

  const [news, setNews] = useState([])

  const NewspaperData = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/navigations/');
      // Filter the response data by status and page_type
      if (response.data) {
        const DocumentData = response.data.filter(
          (item) => item.status === "Publish" && item.page_type === "Newspaper"
        );
        setNews(DocumentData);
        // Assuming you want to slice the filtered data
      }
    }
    catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    // Axios GET request to fetch data
    NewspaperData();
  }, []);


  const newspaperAds = [
        {
            newsAdImage: "1.png",
        },
        {
          newsAdImage: "2.png",
        },
        {
          newsAdImage: "3.png",
        }
    ]

  const openModal = (index) => {
    setSelectedAdIndex(index);
    onOpen();
  }

  const closeModal = () => {
    setSelectedAdIndex(null);
    onClose();
  }

  return (
    <Box
      bg={useColorModeValue('blue.500', 'gray.800')}
      color='gray.100'
      p={5}
      py={10}
      pb={10}
    >

      <Heading
        lineHeight={1.1}
        fontWeight={600}
        fontSize={{ base: 'xl', sm: '4xl', lg: '4xl' }}
        p={5}>

        <Text as={'span'}>
          Newspaper Advertisements
        </Text>
      </Heading>
      <Grid templateColumns={{ sm: '1fr', md: '1fr 1fr', lg: "1fr 1fr", xl: '1fr 1fr 1fr' }} gap={5} p={1} justifyItems="center">
        {news.map((ad, index) => {
          return (
            <Box key={index}>
              <Center
                minH={530}
                p={2}
                w={{ sm: 'xs', md: 'sm', lg: "sm" }}
                alignItems="center"
                justifyContent="center"
                rounded="10px"
                borderWidth="1px"
                shadow="lg"
                position="relative"
                isCentered
                onClick={() => openModal(index)}
                cursor="pointer"
              >
                <Image
                  rounded={"10px"}
                  objectFit="cover" 
                  width="100%"
                  height="100%"
                  src={ad.bannerimage}
                />
              </Center>
              <Modal isOpen={isOpen && selectedAdIndex === index} onClose={closeModal} size='xl' zIndex={9999} >
                <ModalOverlay />
                <ModalContent >
                  <ModalBody  >
                    <Image
                      py={3}
                      src={ad.bannerimage}
                      alt={ad.newsAdTitle}
                    />
                  </ModalBody>
                </ModalContent>
              </Modal>
            </Box>
          )
        })}
      </Grid>
    </Box>
  )
}
export default Newspaper