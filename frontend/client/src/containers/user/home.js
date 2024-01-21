import React, { useState, useEffect, useRef } from 'react';
import {
    Box, Heading, Grid, useColorModeValue, Divider, Stack, Image, Modal, ModalBody, ModalContent, ModalOverlay, ModalFooter, IconButton
} from "@chakra-ui/react"
import { SmallCloseIcon } from "@chakra-ui/icons"
import CallToActionWithVideo from "../../components/card/callToActionWithVideo"
import ImageParagraph from "../../components/card/imageParagraph1"
import ImageParagraph2 from "../../components/card/imageParagraph2"
import StatisticsCard from "../../components/card/statsCard"
import TestimonialCard from "../../components/card/testimonialCard"
import BlogArticleCard from "../../components/card/blogArticleCard"
import SimpleCard from "../../components/card/simpleCard"
import Procedure from "../../components/stepper"
import BarChart from "../../components/animation/barChart"
import SmoothCarousel from "../../components/header/Carousel/SmoothCarousel"
import Newspaper from "./newspaper"
import AllJobs from "./allJobs"
import MainCarousel from '../../components/header/mainCarousel/mainCarousel';
import OurTeam from './ourTeam';
import axios from 'axios'
const baseUrl = process.env.REACT_APP_BASE_URL


const Home = () => {

    const modalImageData = [
        { image: "1.png" },
        { image: "2.png" },
        { image: "3.png" },
    ]

    const [modalStates, setModalStates] = useState(new Array(modalImageData.length).fill(true));
    const [isOpen, setIsOpen] = useState(true);
    const onClose = () => setIsOpen(false);

    // Function to open a specific modal
    const openModal = (index) => {
        const newModalStates = [...modalStates];
        newModalStates[index] = true;
    };

    // Function to close a specific modal
    const closeModal = (index) => {
        const newModalStates = [...modalStates];
        newModalStates[index] = false;
        console.log(newModalStates);
    };

    useEffect(() => {
        // Close the modal after a 8 secs delay 
        const timeout = setTimeout(() => {
            const newModalStates = [...modalStates];
            newModalStates.forEach((_, index) => {
                newModalStates[index] = false;
            });
            setModalStates(newModalStates);
        }, 8000);
    
        return () => {
            clearTimeout(timeout); 
        };
    }, []);
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

    return (
        <>
            <Box bg={useColorModeValue('teal.100', 'blue.800')} alignContent={'center'}>

                <MainCarousel />

                {/* ABOUT US */}
                <Box>

                    <CallToActionWithVideo pos="relative" bottom={"200px"} />
                </Box>
                {/* MESSAGES */}
                <Box >
                    <ImageParagraph />
                </Box>
                <Box >
                    <ImageParagraph2 />
                </Box>
                {/* OUR VALUABLE CLIENTS */}
                <Box >
                    <BlogArticleCard />
                </Box>
                <OurTeam />
                {/* <Newspaper /> */}
                {/* JOB SECTORS */}
                <Box id="job-sectors"  >
                    <Heading m={2} fontSize={'4xl'} fontFamily={'body'} p={5}
                        color={useColorModeValue('blue.600', 'gray.1000')}
                    >
                        Sectors We Work In
                    </Heading>
                    <Box color={useColorModeValue('blue.600', 'gray.200')}
                    >
                        <Grid templateColumns={{ sm: '1fr 1fr', md: '1fr 1fr 1fr 1fr 1fr 1fr' }} p={10} gap={10}>
                            <SimpleCard />
                        </Grid>
                    </Box>
                </Box>
                {/* LATEST JOBS */}
                <Box
                    maxW={'full'}
                >
                    <AllJobs displayAll={false} />
                </Box>
                <Divider />
                {/* OPERATING PROCEDURE */}
                <Box id="operating-procedure"
                    alignContent={'center'} align="center"
                    color={useColorModeValue('blue.700', 'gray.1000')}
                >
                    <Heading m={2} fontSize={'4xl'} fontFamily={'body'} p={10}>
                        Operating Procedure
                    </Heading>
                    <Box >
                        <Procedure />
                    </Box>
                </Box>
                {/* TESTIMONIALS */}
                <Box id="testimonials" >
                    <TestimonialCard />
                </Box>
                <Stack>
                    <Box align="center"
                        bg={useColorModeValue('blue.600', 'gray.700')}
                        color={useColorModeValue('gray.100', 'gray.50')}>
                        <Heading m={2} fontSize={'4xl'} fontFamily={'body'} p={10}>
                            Our Clients
                        </Heading>
                        {/* CLIENTS CAROUSEL */}
                        <Box>
                            <SmoothCarousel />
                        </Box>
                        <Box color={useColorModeValue('blue.600', 'gray.500')} pb={50}>
                            {/* STASTISTICS */}
                            <Heading color={useColorModeValue('gray.100', 'gray.50')} m={2} fontSize={'4xl'} fontFamily={'body'} p={10} mb={30} minH={'200px'}>
                                Sky Way Nepal Statistics
                            </Heading>
                            <BarChart />
                            <StatisticsCard />
                        </Box>
                    </Box>
                </Stack>
            </Box>
            {news && news.map((item, index) => (
    <Modal key={index} isOpen={modalStates[index]} onClose={() => closeModal(index)} zIndex="9999" isCentered>
        <ModalOverlay />
        <ModalContent  >
            <Box
                as={IconButton}
                size='sm'
                colorScheme='red'
                rounded="full"
                top='20px'
                left='90%'
                zIndex='10'
                boxShadow="2xl"
                onClick={() => {
                    const newModalStates = [...modalStates];
                    newModalStates[index] = false;
                    setModalStates(newModalStates); // Assuming you have a state setter function (setModalStates) to update modalStates
                }}
                w='30px'
                h='30px'
            >
                <SmallCloseIcon
                    color='gray.50'
                    w='30px'
                />
            </Box>


            <ModalBody>
                {/* Image inside the modal */}
                <Image
                    src={item.bannerimage}
                    alt="Image"
                />
            </ModalBody>
            <ModalFooter />
        </ModalContent>
    </Modal>
))
} 
        </>
    )
}

export default Home

