import React, { useState, useEffect } from "react"
import GalleryPhotoCard from "../../components/card/galleryPhotoCard";
import {
    Heading, Grid, Center, useColorModeValue
} from '@chakra-ui/react'
import axios from 'axios'

const Gallery = () => {

    const [gallery, setGallery] = useState([])

    const GalleryData = async () => {
        try {
          const response = await axios.get('http://127.0.0.1:8000/api/navigations/');
          // Filter the response data by status and page_type
          if (response.data) {
            const DocumentData = response.data.filter(
              (item) => item.status === "Publish" && item.page_type === "Gallery"
            );
            setGallery(DocumentData);
            // Assuming you want to slice the filtered data
          }
        }
        catch (error) {
          console.error("Error fetching data:", error);
        }
      };
    
      useEffect(() => {
        // Axios GET request to fetch data
        GalleryData();
      }, []);
    
    return(
        <Center 
        py={10}
        bg={useColorModeValue('blue.500', 'gray.800')}
        color='gray.100'
            w={"full"}
            >
            <Heading m={2} fontSize={'2xl'} fontFamily={'body'} p={5}>
                Image Gallery
                <Grid templateColumns={{sm: '1fr', md: '1fr 1fr 1fr', lg: '1fr 1fr 1fr 1fr' }} gap={5} p={10} align="center" rowGap={5}>
                    <GalleryPhotoCard gallery={gallery}/>
                </Grid>
            </Heading>
        </Center>
    )
}

export default Gallery