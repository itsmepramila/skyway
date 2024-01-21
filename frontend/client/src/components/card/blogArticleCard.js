import React, { useState, useEffect } from 'react';
import axios from 'axios';

import {
    Box,
    Heading,
    Image,
    Text,
    useColorModeValue,
    Container
} from '@chakra-ui/react'
import ScrollDiv from '../animation/scrollDiv'

const BlogArticleCard = () => {
    const [data, setData] = useState({});
    const AboutData = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:8000/api/navigations/');
            // Filter the response data by status and page_type
            if (response.data) {
                const DocumentData = response.data.find(
                    (item) => item.status === "Publish" && item.page_type === "Our Valuable Clients");
                setData(DocumentData); // Assuming you want to slice the filtered data
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
        <Box>
            {data &&
                (<Container maxW={'100%'} p="12"
                    maxH={'130vh'}
                    bg='blue.600'
                    color='white'
                    className="animated-div"
                >
                    <ScrollDiv>
                        <Heading as="h1">{data.name}</Heading>
                        <Box
                            marginTop={{ base: '1', sm: '5' }}
                            display="flex"

                            flexDirection={{ base: 'column', sm: 'row' }}
                            justifyContent="space-between">
                            <Box
                                display="flex"
                                flex="1"
                                marginRight="3"
                                position="relative"
                                alignItems="center">
                                <Box
                                    width={{ base: '100%', sm: '85%' }}
                                    zIndex="2"
                                    marginLeft={{ base: '0', sm: '5%' }}
                                    marginTop="5%">
                                    <Box borderRadius="lg" overflow="hidden" maxH={"600px"}>
                                        <Box textDecoration="none" _hover={{ textDecoration: 'none' }}>
                                            <Image
                                                borderRadius="lg"
                                                maxH={"500px"}
                                                src={data.bannerimage}
                                                alt="Overseas Co-operation Certificate"
                                                objectFit="contain"
                                                width="100%"
                                                transition="0.3s ease-in-out"
                                                _hover={{
                                                    transform: 'scale(1.05)',
                                                }}
                                            />
                                        </Box>
                                    </Box>
                                </Box>
                                <Box zIndex="1" width="100%" position="absolute" height="100%">
                                    <Box
                                        bgGradient='radial(white 1px, transparent 1px)'
                                        backgroundSize="20px 20px"
                                        opacity="0.6"
                                        height="100%"
                                    />
                                </Box>
                            </Box>
                            <Box
                                display="flex"
                                flex="1"
                                flexDirection="column"
                                justifyContent="center"
                                marginTop={{ base: '3', sm: '0' }}>

                                <Heading marginTop="1">
                                    <Text textDecoration="none" _hover={{ textDecoration: 'none' }}>
                                        {data.caption}
                                    </Text>
                                </Heading>
                                <Text
                                    color='gray.200'
                                    fontSize={'2xl'}
                                    fontWeight={'300'}>
                                    {data.title}
                                </Text>
                                <Text
                                    as="p"
                                    marginTop="2"
                                    color='gray50'
                                    fontSize="lg">
                                    {data.short_desc1}
                                </Text>
                            </Box>
                        </Box>
                    </ScrollDiv>
                </Container>)}
        </Box>
    )
}

export default BlogArticleCard